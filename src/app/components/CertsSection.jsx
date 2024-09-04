"use client"
import React, { useRef } from "react"
import CertCard from "./CertCard"
import { motion, useInView } from "framer-motion"

const certsData = [
    {
        id: 1,
        title: "Google AI Essentials",
        description: "Issued August 2024",
        image: "/images/Google-Logo.png",
        link: "https://www.credly.com/badges/4bf9082d-8ce8-4a92-8b0b-e003182fed92/public_url"
    },
    {
        id: 2,
        title: "Google IT Support Professional Certificate",
        description: "Issued August 2024",
        image: "/images/Google-Logo.png",
        link: "https://www.credly.com/badges/45b16588-2a69-484e-86dd-ff9cf5e125a5/public_url"
    },
    {
        id: 3,
        title: "Docker Foundations Professional Certificate",
        description: "Issued August 2024",
        image: "/images/Docker-Logo.png",
        link: "https://www.linkedin.com/learning/certificates/445f4172bb836d3623cd08fbc093c210e4046bc745173ab0ee16427eb7eea3c8?u=21102035"
    },
    {
        id: 4,
        title: "Java Certified Foundations Associate",
        description: "Issued November 2023",
        image: "/images/Oracle-Logo.png",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=AF2AA5243AF6E6761C2D5F467D80EA611EEA69BA2813962105C9CC82F8BFC324"
    },
    {
        id: 5,
        title: "Introduction to Blockchain with Industry Applications",
        description: "Issued May 2023",
        image: "/images/Udemy-Logo.png",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a7c3bba9-165a-4f79-8710-90232a08bf09.pdf"
    },
    {
        id: 6,
        title: "JavaScript Basics for Beginners",
        description: "Issued May 2023",
        image: "/images/Udemy-Logo.png",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9c050d0d-93e2-4d5a-a1da-2367a71a0b3c.pdf"
    },
    {
        id: 7,
        title: "Figma UI/UX Design Essential Training",
        description: "Issued May 2023",
        image: "/images/Udemy-Logo.png",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-448352f4-0bb6-43ba-ada7-79530e2ea4dd.pdf"
    }
]

const CertsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <section className="items-center px-4 xl:px-16 lg:pt-20 py-4" id="certifications">
            <h1 className="text-[#FF4365] uppercase lg:text-4xl text-2xl font-bold mb-4">Certifications</h1>

            <p className="text-[#ADB7BE] text-base lg:text-lg lg:pb-14 pb-4 lg:pr-80">
                Upskilling is a continuous cycle that I enjoy committing myself to. The certifications I have gained
                throughout the years exemplify my thirst for knowledge and allow me to adapt to different roles I am positioned in.
            </p>

            <ul ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {certsData.map((cert, index) => (
                <motion.li
                    key={cert.id}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                    className="flex"
                >
                    <CertCard
                    title={cert.title}
                    description={cert.description}
                    imgUrl={cert.image}
                    link={cert.link}
                    />
                </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default CertsSection