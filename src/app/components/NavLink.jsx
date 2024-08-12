import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title }) => {
  return (
    <Link
        href = {href}
        className = "block py-2 pl-3 pr-4 text-white hover:text-[#FF4365]"
    >
        {title}
    </Link>
  )
}

export default NavLink