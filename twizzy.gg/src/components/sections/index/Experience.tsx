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
                        url="https://example.com"
                        title="Potato Info"
                        fullDescription={[
                            "Potato Info is a portfolio platform similar to guns.lol where users can create customizable portfolio pages with custom backgrounds, music, and more. It's a platform that allows users to showcase their work and personality in a unique and personalized way.",
                            "As the founder and head developer, I'm responsible for all aspects of the platform including frontend development, backend development, and overall design. The platform provides users with extensive customization options to make their portfolio truly their own."
                        ]}
                        cardImage="/potato-logo.png"
                        cardDescription="Potato Info is a portfolio platform similar to guns.lol where users can create customizable portfolio pages with custom backgrounds, music, and more."
                        media={[
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7zdwvchf.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/04s2qt5p.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7rivygg2.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lejpmjvp.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/4qh6eag6.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/x8capy8n.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/slub8gdh.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/hf7i7o31.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/yrk5zedf.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/tb8jdveo.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/2v0ymhiz.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/3xfw3xts.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/k36z8iwq.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/su4s5oxd.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/dsolrzxq.png",
                        ]}
                        myRole="Founder/Head Developer"
                        timeline="March 2021 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        url="https://www.kyos.bot"
                        title="kyos"
                        fullDescription={[
                            "Kyos is the ultimate Discord management solution, providing bots, dashboards, and automations all in one place. It's a leading bot for management and engagement, built to elevate community experiences and streamline server management.",
                            "As a developer, I work on implementing features including premium moderation and protection modules like filters, fake permissions, anti-nuke, and anti-raid systems. Kyos also offers automated moderation, role & permission management, custom commands, real-time analytics, seamless integrations with Twitch, TikTok, and Spotify, and enterprise-grade security features.",
                            "The bot powers thousands of Discord servers with features including translation, text-to-speech, reaction triggers, auto responders, levels, snipe, giveaways, games, and countless more utilities. Kyos is designed to be the only bot you need for your server."
                        ]}
                        cardImage="/kyos.png"
                        cardDescription="Kyos is the ultimate Discord management solution, providing bots, dashboards, and automations all in one place with premium moderation, protection, and engagement features."
                        media={[
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5mwfskp1.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/w5stxuds.mp4"
                        ]}
                        myRole="Developer"
                        timeline="September 2024 - December 2025"
                        delay={0.2}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
