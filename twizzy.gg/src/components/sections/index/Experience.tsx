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
                        url="https://kyo.gg"
                        title="Kyo Profile"
                        fullDescription={[
                            "Kyo Profile is a portfolio platform similar to guns.lol where users can create customizable portfolio pages with custom backgrounds, music, and more. It's a platform that allows users to showcase their work and personality in a unique and personalized way.",
                            "As the founder and head developer, I'm responsible for all aspects of the platform including frontend development, backend development, and overall design. The platform provides users with extensive customization options to make their portfolio truly their own."
                        ]}
                        cardImage="/kyo.png"
                        cardDescription="Kyo Profile is a portfolio platform similar to guns.lol where users can create customizable portfolio pages with custom backgrounds, music, and more."
                        media={[]}
                        myRole="Head Developer"
                        timeline="March 2021 - 2023"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        url="https://discord.gg/p6HnkxMZSz"
                        title="Kyro"
                        fullDescription={[
                            "Kyro is the ultimate Discord management solution, providing bots, dashboards, and automations all in one place. It's a leading bot for management and engagement, built to elevate community experiences and streamline server management.",
                            "As a developer, I work on implementing features including premium moderation and protection modules like filters, fake permissions, anti-nuke, and anti-raid systems. Kyro also offers automated moderation, role & permission management, custom commands, real-time analytics, seamless integrations with Twitch, TikTok, and Spotify, and enterprise-grade security features.",
                            "The bot powers thousands of Discord servers with features including translation, text-to-speech, reaction triggers, auto responders, levels, snipe, giveaways, games, and countless more utilities. Kyro is designed to be the only bot you need for your server."
                        ]}
                        cardImage="/kyro.png"
                        cardDescription="Kyro is the ultimate Discord management solution, providing bots, dashboards, and automations all in one place with premium moderation, protection, and engagement features."
                        media={[]}
                        myRole="Founder/Lead Developer"
                        timeline="September 2022 - Present"
                        delay={0.2}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
