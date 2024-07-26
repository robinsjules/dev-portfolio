"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from "./NavLink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
import AppLogo from "../../../public/app-logo.svg"

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Experience",
        path: "#experience",
    },
    {
        title: "Technologies",
        path: "#technologies",
    },
    {
        title: "Certifications",
        path: "#certifications",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 py-2 bg-[#051014] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-2 lg:px-10">
            <Link href={"/"}>
                <div className="flex items-center cursor-pointer">
                    <Image src={AppLogo} alt="Logo" height={40} width={40} />
                    <span className="ml-2 text-white hidden lg:inline">Jules Robins</span>
                </div>
            </Link>
                <div className="block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen (true)}
                            className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-7 w-7"/>
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen (false)}
                            className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-7 w-7"/>
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    href={link.path}
                                    title={link.title}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar