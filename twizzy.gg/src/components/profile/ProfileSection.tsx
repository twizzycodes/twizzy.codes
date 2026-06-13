import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { scrollToSection } from "@/lib/smoothScroll";

const BADGES = [
  {
    label: "Developer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    label: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    label: "Full-Stack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

const TYPEWRITER_STRINGS = [
  "full-stack developer.",
  "building cool stuff on the web.",
  "discord.",
  "17 y/o from Canada.",
];

const SOCIAL_LINKS = [
  {
    label: "Discord",
    url: "https://discordapp.com/users/914501905869320265",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    url: "https://github.com/bigcheesh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Website",
    url: "https://twizzygg.vercel.app",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

interface ProfileSectionProps {
  musicStarted: boolean;
  onStartMusic: () => void;
  onInViewChange: (inView: boolean) => void;
}

export default function ProfileSection({
  musicStarted,
  onStartMusic,
  onInViewChange,
}: ProfileSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const { ref, inView } = useInView({
    threshold: 0.5,
    onChange: onInViewChange,
  });

  useEffect(() => {
    if (!inView || !musicStarted) {
      setTilt({ x: 0, y: 0 });
      return;
    }

    const handleMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateY = ((e.clientX - centerX) / (window.innerWidth / 2)) * 12;
      const rotateX = ((centerY - e.clientY) / (window.innerHeight / 2)) * 12;

      setTilt({ x: rotateX, y: rotateY });
    };

    const handleLeave = () => setTilt({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [inView, musicStarted]);

  const scrollToPortfolio = () => {
    scrollToSection("portfolio", 1800);
  };

  return (
    <section ref={ref} id="profile" className="profile-section">
      <div className="profile-overlay" />

      {!musicStarted && inView && (
        <button
          type="button"
          onClick={onStartMusic}
          className="profile-enter-overlay"
          aria-label="Click to enter and start music"
        >
          <span className="profile-enter-text">click to enter</span>
        </button>
      )}

      <div className="profile-card-wrapper">
        <div
          ref={cardRef}
          className="profile-glass"
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <img
            src="/me.jpeg"
            alt="twizzy"
            className="profile-avatar"
            draggable={false}
          />

          <h1 className="profile-name glow-text">twizzy</h1>

          <div className="profile-badges">
            {BADGES.map((badge) => (
              <div key={badge.label} className="profile-badge" title={badge.label}>
                <img src={badge.icon} alt={badge.label} draggable={false} />
                <span className="profile-badge-tooltip">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="profile-typewriter">
            <Typewriter
              options={{
                strings: TYPEWRITER_STRINGS,
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="profile-socials">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                className="profile-social-link"
                title={link.label}
                draggable={false}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToPortfolio}
        className="profile-scroll-hint"
        aria-label="Scroll for more"
      >
        <span>Scroll for more</span>
        <ChevronDown size={18} className="profile-scroll-chevron" />
      </button>
    </section>
  );
}
