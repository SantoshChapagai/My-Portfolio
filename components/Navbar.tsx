import React from 'react'
import Link from "next/link";
import Image from "next/image";
import About from '../pages/about';

const Navbar = () => {
  return (
    <div className='w-full mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-teal-200 fixed'>
       <Link href="/">
        <Image src="/logo.png" alt="santosh" width={72} height={16} className="object-contain"/>
       </Link>
      <nav className='flex space-x-4'>
        <Link href="/about" passHref={true} legacyBehavior><a>About</a></Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar