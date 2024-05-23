"use client"
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { IoMenuOutline } from "react-icons/io5";
import ThemeToggle from './ThemeToggle';
import {Lemon} from "next/font/google";
import Image from 'next/image';

const lemon = Lemon({
  weight: "400",
  subsets: ['latin'],
})

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${lemon.className} w-full fixed top-0 z-50 bg-navbar text-navbar-foreground`}>
      <div className="h-fit">
        <div className="flex justify-between items-center px-2">
          <div className="flex-shrink-0 flex items-center py-2 space-x-2">
            <Link href="/" className="flex justify-center items-center space-x-2">
            <Image className=" w-auto h-16" src="/logo.png" alt="Logo" height={300} width={300}/>
            <span className="text-sm">Santosh</span>
            </Link>
          </div>
          <div className="hidden sm:flex space-x-4 font-bold mr-8">
              <>
                <Link href="/">
                  Home
                </Link>
                <Link href="/about">
                  About
                </Link>
                <Link href="skills">
                  Skills
                </Link>
                <Link href="/projects">
                  Projects
                </Link>

                <Link href="/contact">
                  Contact
                </Link>
              </>
              <ThemeToggle />
          </div>
          <div className="mr-2 flex items-center sm:hidden">
            <button
            ref={buttonRef}
              onClick={toggleMenu}
              className="flex flex-end items-center justify-center p-2 rounded-md transition duration-150 ease-in-out"
            >
              <IoMenuOutline size={32} />
            </button>
            <ThemeToggle />
          </div>
          
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
        ref={menuRef}
      >
        <hr />
        <div className="flex flex-col p-3 space-y-1 font-bold">
        <>
                <Link href="/">
                  Home
                </Link>
                <Link href="/about">
                  About
                </Link>
                <Link href="skills">
                  Skills
                </Link>
                <Link href="/projects">
                  Projects
                </Link>

                <Link href="/contact">
                  Contact
                </Link>
              </>
        </div>
      </div>
    </nav>
   
    
  );
};

export default Navbar;