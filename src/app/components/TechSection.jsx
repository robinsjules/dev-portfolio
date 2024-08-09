"use client"
import React, { useRef } from "react"
import TechCard from "./TechCard"
import { motion, useInView } from "framer-motion"

const projectsData = [
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
        <section className="items-center py-4 px-4 xl:px-16">
            <h1 className="text-[#FF4365] uppercase lg:text-4xl text-2xl font-bold mb-4">Technical Competencies</h1>

            <ul ref={ref} className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-2">
                {projectsData.map((project, index) => (
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