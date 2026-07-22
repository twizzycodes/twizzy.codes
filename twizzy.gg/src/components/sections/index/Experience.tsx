import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://github.com/twizzycodes/lemonade-cli"
                        title="Lemonade CLI"
                        fullDescription={[
                            "An open-source, model-agnostic AI coding CLI. Lemonade is a Claude Code–style agentic terminal assistant",
                            "any model on OpenRouter https://openrouter.ai (Multiple free models)"
                        ]}
                        cardImage="/lemonade.png"
                        cardDescription="An open-source, model-agnostic AI coding CLI. Lemonade is a Claude Code–style agentic terminal assistant that runs against any model on OpenRouter https://openrouter.ai — pick whichever model you have credits or access for. Point it at an API key"
                        media={[]}
                        myRole="Developer"
                        timeline="July 2026 - Current"
                        delay={0.1}
                        gradient="bg-gradient-to-br from-orange-500 to-yellow-300"
                    />
                    <ExperienceCard
                        url="https://github.com/bigcheesh/openflow"
                        title="OpenFlow"
                        fullDescription={[
                            "OpenFlow is a powerful jailbroken AI platform that lets you use models like Claude and Gemini with zero restrictions for maximum flexibility.",
                            "This has now been discontinued as I have stopped updating."
                        ]}
                        cardImage="/kyo.png"
                        cardDescription="OpenFlow is a powerful jailbroken AI platform that lets you use models like Claude and Gemini with zero restrictions for maximum flexibility."
                        media={[]}
                        myRole="Developer"
                        timeline="March 2025 - discontinued"
                        delay={0.1}
                        gradient="bg-gradient-to-br from-sky-400 to-sky-200"
                    />
                    <ExperienceCard
                        url="https://oceansystems.vercel.app/"
                        title="OceanSystems"
                        fullDescription={[
                            "Ocean Systems is a multi use discord moderation build in website bot, where you can moderate your server from a dashboard. We are still in development and now require a key to access.",
                            "If you would like to try, please add me on discord lix.bear to get pre-access."
                        ]}
                        cardImage="/oceansystems.png"
                        cardDescription="OceanSystems is the ultimate Discord management solution, providing bots, dashboards, and automations all in one place with premium moderation, protection, and engagement features."
                        media={[]}
                        myRole="Founder/Lead Developer"
                        timeline="September 2022 - Present"
                        delay={0.2}
                        gradient="bg-gradient-to-br from-purple-900 to-black"
                    />
                </ul>
            </section>
        </>
    );
}
