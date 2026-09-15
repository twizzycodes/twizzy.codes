import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  //set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16 -mb-2"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>
        <ul className={`${showAll ? '' : 'max-h-[100rem]'} grid md:grid-cols-2 pt-6 pb-1 grid-cols-1 gap-4 overflow-hidden`}>
          <ProjectCard
            url="https://nexusmovies.xyz"
            title="Nexus Movies"
            fullDescription={[
              "Nexus Movies is a free streaming website for movies, TV shows, and live TV. It is built around quick access with no signup required.",
              "The project has been active since 2023 and focuses on a dark, simple viewing experience that keeps the content easy to browse."
            ]}
            cardImage="/nexusmovies-banner.png"
            cardDescription="2023 - Present. A free online movies, TV shows, and live TV website with no signup required."
            media={["/nexusmovies-banner.png"]}
            myRole="Creator/Developer"
            delay={0.1}
            gradient="bg-gradient-to-br from-neutral-950 to-neutral-800"
          />
          <ProjectCard
            url="https://github.com/twizzycodes/lemonade-cli"
            title="Lemonade CLI"
            fullDescription={[
              "Lemonade CLI is an open-source, model-agnostic AI coding CLI. It is a Claude Code-style agentic terminal assistant that can run against models through OpenRouter.",
              "The project has been active since July 2026 and lets users pick whichever supported model they have credits or access for."
            ]}
            cardImage="/lemonade.png"
            cardDescription="July 2026 - Current. An open-source, model-agnostic AI coding CLI for agentic terminal workflows."
            media={["/lemonade.png"]}
            myRole="Creator/Developer"
            delay={0.15}
            gradient="bg-gradient-to-br from-orange-500 to-yellow-300"
          />
          {!showAll &&
            <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
              <Button label="Show More" onClick={() => setShowAll(true)} width="w-[10rem]" />
            </div>
          }
        </ul>
      </section>
    </>
  );
}
