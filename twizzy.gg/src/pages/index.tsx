import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/profile/ProfileSection";
import ProfileMedia from "@/components/profile/ProfileMedia";
import CursorSnow from "@/components/profile/CursorSnow";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Experience from "@/components/sections/index/Experience";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";
import { useSectionScroll } from "@/hooks/useSectionScroll";

export default function Home() {
  const [musicStarted, setMusicStarted] = useState(false);
  const [profileInView, setProfileInView] = useState(true);

  useSectionScroll(musicStarted);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <ProfileMedia profileInView={profileInView} musicStarted={musicStarted} />
      <CursorSnow active={musicStarted} />

      <ProfileSection
        musicStarted={musicStarted}
        onStartMusic={() => setMusicStarted(true)}
        onInViewChange={setProfileInView}
      />

      <div id="portfolio" className="relative z-20 bg-background">
        <Navbar visible={!profileInView} />
        <main className="relative min-h-screen overflow-x-hidden px-6">
          <GridPattern
            width={50}
            height={50}
            x={-1}
            y={-1}
            className='z-[-5]'
          />
          <Hero inView={inView} descRef={ref} />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  );
}
