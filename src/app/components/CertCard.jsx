import React from 'react'
import Link from "next/link"
import { LinkIcon } from "@heroicons/react/24/outline"

const CertCard = ({ imgUrl, title, description, link }) => {
  return (
    <div className="flex flex-col justify-between w-full md:w-80 lg:w-96 bg-[#181818] rounded-xl overflow-hidden">
      <div
        className="h-40 relative group" // Adjust the height as needed
        style={{ background: `url(${imgUrl}) center center / cover no-repeat` }} // Center and cover image
      >
        <div className="rounded-t-xl overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={link}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <LinkIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 flex-grow">
        <h5 className="text-xl font-semibold mb-4">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default CertCard
