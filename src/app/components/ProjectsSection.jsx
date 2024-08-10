"use client"
import React, { useRef } from "react"
import ProjectCard from "./ProjectCard"
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "This is my portfolio website you're viewing now! It is responsive to different screen sizes and devices; feel free to view on web or mobile. Logo was also designed by me :D",
        languages: ["React", "Next.js", "Tailwind CSS"],
        image: "/images/Portfolio-Image.png",
        gitUrl: "https://github.com/robinsjules/dev-portfolio",
    },
    {
        id: 2,
        title: "SurplusHero Web App",
        description: "To prevent food wastage, SurplusHero allows you to buy discounted groceries and browse + share recipes. The fridge feature reminds you of expiry dates too.",
        languages: ["Vue.js", "Bootstrap", "Python", "PostgreSQL"],
        image: "/images/SurplusHero-Image.png",
        gitUrl: "https://github.com/robinsjules/WAD2-Project",
    },
    {
        id: 3,
        title: "GIS Analysis of JC Mergers",
        description: "This QGIS project explores the equity of access after closures or mergers of Junior Colleges in Singapore. The website was rendered using Quarto in RStudio and is hosted on Netlify.",
        languages: ["QGIS", "RStudio", "Quarto", "JavaScript", "HTML", "Netlify"],
        image: "/images/GIS-Image.png",
        gitUrl: "https://github.com/robinsjules/GISProject",
    }
]

const ProjectsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <section className="items-center px-4 xl:px-16 lg:pt-20 py-4" id="projects">
            <h1 className="text-[#FF4365] uppercase lg:text-4xl text-2xl font-bold mb-4">Projects</h1>

            <p className="text-[#ADB7BE] text-base lg:text-lg lg:pb-14 pb-4 lg:pr-80">
                These are tech projects which I am proud to call my own! Some of them are made in fulfillment of SMU group projects,
                while others are fruits of my personal motivation to excel outisde of school. These showcase my technical capabilities,
                time management, and spirit to innovate. You can tap on the images to view the GitHub repositories.
            </p>

            <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                    className="flex"
                >
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    languages={project.languages}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    />
                </motion.li>
                ))}
            </ul>

        </section>
    )
}

export default ProjectsSection
