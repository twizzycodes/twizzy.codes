import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/profile/ProfileSection";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Experience from "@/components/sections/index/Experience";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";

export default function Home() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <ProfileSection />
      <div id="portfolio" className="relative z-20 bg-background">
        <Navbar />
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
