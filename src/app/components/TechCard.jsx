import React from 'react'
import { FaPython, FaJava, FaPhp, FaHtml5, FaReact, FaVuejs, FaFigma, FaGithub, FaDocker } from "react-icons/fa"
import { SiSolidity, SiTailwindcss, SiNextdotjs, SiTypescript, SiPostgresql, SiSupabase, SiMongodb, SiMysql, SiMarvelapp, SiPostman, SiJira } from "react-icons/si"

const rawIcons = {
  "Python": FaPython,
  "Java": FaJava,
  "Solidity": SiSolidity,
  "PHP": FaPhp,
  "HTML": FaHtml5,
  "Tailwind CSS": SiTailwindcss,
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "Vue.js": FaVuejs,
  "TypeScript": SiTypescript,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Figma": FaFigma,
  "MarvelApp": SiMarvelapp,
  "GitHub": FaGithub,
  "Docker": FaDocker,
  "Postman": SiPostman,
  "JIRA": SiJira
}

const icons = Object.fromEntries(
  Object.entries(rawIcons).map(([key, Icon]) => [key, <Icon key={key} className="mr-4" />])
)

const TechCard = ({ title, items }) => {
  return (
    <div className="flex flex-col justify-start w-64 bg-[#181818] rounded-xl p-4 mx-auto mb-4">
      <h2 className="lg:text-2xl text-xl font-semibold mb-4 text-white hover:text-[#00C2FF]">{title}</h2>
      <div className="flex flex-col justify-start"> 
        {items.map((item, index) => (
          <div key={index} className="flex items-center lg:text-lg text-white">
            {icons[item] || null}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechCard