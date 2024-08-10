"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from "next/link";
import GitHubIcon from "../../../public/github-icon.svg"
import LinkedInIcon from "../../../public/linkedin-icon.svg"

const HeroSection = () => {
  return (
    <section className="items-center px-4 xl:px-16 lg:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-6 place-self-center mb-4 mt-4 lg:mt-0">
                <div className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/Jules-Photo.png"
                        alt="Jules Hero Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="col-span-6 text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4365] to-[#B6DC76]">
                        Hello, I&apos;m {" "}
                        </span>
                        <br/>
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
                <p className="text-white lg:text-2xl mb-6">
                    and an aspiring full stack developer.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                    <button className="bg-[#FF4365] hover:bg-slate-200 text-[#051014] py-2 px-4 rounded-full">
                        Email Me
                    </button>
                    <div className="flex">
                        <Link href="https://github.com/robinsjules">
                            <Image src={GitHubIcon} alt="GitHub Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/robinsjules/">
                            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection 