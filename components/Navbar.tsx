import React from 'react'
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    <div className='w-full mx-auto flex justify-between items-center px-12 h-24 py-4 bg-black text-white fixed'>
       <Link href="/">
        SC
       </Link>
      <nav className='flex space-x-4'>
        <Link href="/">Home</Link>
        <Link href="/about" passHref={true} legacyBehavior><a>About</a></Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar