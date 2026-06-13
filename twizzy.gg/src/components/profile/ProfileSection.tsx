import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import CursorSnow from "./CursorSnow";
import ProfileMedia from "./ProfileMedia";

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

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: "https://github.com/bigcheesh",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "Discord",
    url: "https://discordapp.com/users/914501905869320265",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
  },
  {
    label: "Website",
    url: "https://twizzygg.vercel.app",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
  },
];

export default function ProfileSection() {
  const [musicStarted, setMusicStarted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.35 });

  const scrollToPortfolio = () => {
    const portfolio = document.getElementById("portfolio");
    portfolio?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ProfileMedia
        profileInView={inView}
        musicStarted={musicStarted}
        onStartMusic={() => setMusicStarted(true)}
      />
      <CursorSnow active={inView && musicStarted} />

      <section ref={ref} id="profile" className="profile-section">
        <div className="profile-overlay" />

        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar-ring">
              <img
                src="/me.jpeg"
                alt="twizzy profile"
                className="profile-avatar"
                draggable={false}
              />
            </div>

            <div className="profile-info">
              <div className="profile-name-row">
                <h1 className="profile-name glow-text">twizzy</h1>
                <div className="profile-badges">
                  {BADGES.map((badge) => (
                    <div key={badge.label} className="profile-badge" title={badge.label}>
                      <img src={badge.icon} alt={badge.label} draggable={false} />
                      <span className="profile-badge-tooltip">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="profile-bio">
                17 y/o full-stack developer from Canada. building cool stuff on the web.
              </p>
            </div>
          </div>

          <div className="profile-divider" />

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
                <img src={link.icon} alt={link.label} draggable={false} />
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToPortfolio}
          className="profile-scroll-hint"
          aria-label="Scroll to portfolio"
        >
          <span>portfolio</span>
          <ChevronDown size={20} className="profile-scroll-chevron" />
        </button>
      </section>
    </>
  );
}
