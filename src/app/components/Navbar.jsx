import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-[#FFFFF3] font-semibold">
                Logo
            </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul>
                <li><Link
                        href="#about"
                        className="block py-2 pl-3 pr-4 text-[#FFFFF3] sm:text-xl rounded md:p-0"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar