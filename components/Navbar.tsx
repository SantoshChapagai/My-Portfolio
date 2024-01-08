"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { IoMenuOutline } from 'react-icons/io5';
import Image from 'next/image';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 556);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full mx-auto flex justify-between items-center lg:px-12 h-24 py-4 bg-cyan-100 dark:bg-black fixed z-50'>
      <div className='ml-2'>
        <Link href='/' className='flex items-center space-x-4'>
          <Image src='/logo.png' height={300} width={300} className='h-20 w-20' />
          <span className='font-mono text-lg'>Santosh</span>
        </Link>
      </div>

      <div className='flex items-center space-x-4'>
        {isSmallScreen && (
          <button onClick={toggleMobileMenu}>
            <IoMenuOutline size={32} />
          </button>
        )}

        <div className={`${showMobileMenu ? 'block' : 'hidden'} absolute top-24 left-0 right-0 bg-white dark:bg-gray-800`}>
          <div className='flex flex-col items-center'>
            <Link href='/'>Home</Link>
            <Link href='/about' passHref={true} legacyBehavior>
              About
            </Link>
            <Link href='/skills'>Skills</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>

        {!isSmallScreen && !showMobileMenu && (
          <div className='flex space-x-4'>
            <Link href='/'>Home</Link>
            <Link href='/about' passHref={true} legacyBehavior>
              About
            </Link>
            <Link href='/skills'>Skills</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        )}
         <div>
        <ThemeToggle />
      </div>
      </div>

     
    </div>
  );
};

export default Navbar;
