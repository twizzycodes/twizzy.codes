import { useEffect, useMemo, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const TRACKS = ["/profile/GREECE.mp3"]; // multiple tracks ["/profile/GREECE.mp3", "/profile/GREECE.mp3"];

interface ProfileMediaProps {
  profileInView: boolean;
  musicStarted: boolean;
}

export default function ProfileMedia({ profileInView, musicStarted }: ProfileMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const track = useMemo(
    () => TRACKS[Math.floor(Math.random() * TRACKS.length)],
    []
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;

    if (profileInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [profileInView, videoError]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !musicStarted) return;

    audio.play().catch(() => {});
  }, [musicStarted, track]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = muted;
  }, [muted]);

  return (
    <>
      <video
        ref={videoRef}
        className={`profile-bg-video ${profileInView ? "opacity-100" : "opacity-0"}`}
        src="/profile/background.mp4"
        loop
        muted
        playsInline
        preload="auto"
        onError={() => setVideoError(true)}
      />

      {videoError && profileInView && (
        <div className="profile-bg-fallback" aria-hidden="true" />
      )}

      <audio ref={audioRef} src={track} loop preload="auto" />

      {musicStarted && (
        <button
          type="button"
          onClick={() => setMuted((prev) => !prev)}
          className="fixed bottom-6 right-6 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
          aria-label={muted ? "Unmute music" : "Mute music"}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </>
  );
}
