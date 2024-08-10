"use client"
import React, { useRef } from "react"
import TechCard from "./TechCard"
import { motion, useInView } from "framer-motion"

const techData = [
    {
      id: 1,
      title: "Backend",
      items: ["Python", "Java", "Solidity", "PHP"]
    },
    {
      id: 2,
      title: "Frontend",
      items: ["HTML", "Tailwind CSS", "React", "Next.js", "Vue.js", "TypeScript"]
    },
    {
      id: 3,
      title: "Databases",
      items: ["PostgreSQL", "Supabase", "MongoDB", "MySQL"]
    },
    {
      id: 4,
      title: "Others",
      items: ["Figma", "MarvelApp", "GitHub", "Docker", "Postman", "JIRA"]
    }
]

const TechSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <section className="items-center px-4 xl:px-16 lg:pt-20 py-4" id="technologies">
            <h1 className="text-[#FF4365] uppercase lg:text-4xl text-2xl font-bold mb-4">Technical Competencies</h1>

            <p className="text-[#ADB7BE] text-base lg:text-lg lg:pb-14 pb-4 lg:pr-80">
                Here are the technologies and tools I am most experienced in. As an aspiring full-stack developer, I believe that
                being knowledgable in multiple coding languages and frameworks are essential to complete projects timely. I am also
                looking forward to learning more fundamental tools for my future career. 
            </p>

            <ul ref={ref} className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-2">
                {techData.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                    className="flex"
                >
                    <TechCard
                    key={project.id}
                    title={project.title}
                    items={project.items}
                    />
                </motion.li>
                ))}
            </ul>

        </section>
    )
}

export default TechSection