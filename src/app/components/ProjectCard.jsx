import React from 'react'
import Link from "next/link"
import { CodeBracketIcon } from "@heroicons/react/24/outline"

const ProjectCard = ({ imgUrl, title, description, languages, gitUrl }) => {
  const colors = ["#FF4365", "#FFA900", "#00C2FF", "#A6FF00", "#FFFF00", "#CF9FFF"]

  return (
    <div className="flex flex-col justify-between h-full"> 
      <div
        className="h-52 md:h-40 lg:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
      >
        <div className="rounded-t-xl overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 flex-grow">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] flex-grow overflow-hidden">{description}</p>
        <br />
        <div className="flex flex-wrap">
          {languages.map((language, index) => (
            <span
              key={index}
              style={{ color: colors[index % colors.length] }}
              className="mr-2 mb-1"
            >
              {language.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
