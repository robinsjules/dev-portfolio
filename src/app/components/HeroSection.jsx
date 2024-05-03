"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from "next/link";
import GitHubIcon from "../../../public/github-icon.svg"
import LinkedInIcon from "../../../public/linkedin-icon.svg"

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-[#FFFFF3] mb-4 text-4xl smt:text-5xl lg:text-5xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4365] to-green-200">
                        Hello, I'm {" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Jules",
                                1500,
                                "Driven",
                                1000,
                                "Reliable",
                                1000,
                                "Innovative",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                </h1>
                <p className="text-[#B7AD99] text-base sm:text-lg mb-6 lg:text-xl">
                    I'm an aspiring full stack developer!
                </p>
                <div className="flex items-center gap-2">
                    <button className="bg-[#FF4365] hover:bg-slate-200 text-black py-2 px-4 rounded-full">
                        Email Me
                    </button>
                            <Link href="https://github.com/robinsjules">
                                <Image src={GitHubIcon} alt="GitHub Icon" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/robinsjules/">
                                <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                            </Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
                    <Image
                        src="/images/Jules-Photo.png"
                        alt="Jules Hero Image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection 