"use client";
import { useEffect, useRef } from "react";
import Link from 'next/link';
import { IoMenuOutline } from "react-icons/io5";
import ThemeToggle from './ThemeToggle';
import { Lemon } from "next/font/google";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Lang } from "./Lang";

const lemon = Lemon({
  weight: "400",
  subsets: ['latin'],
});

const Navbar: React.FC<{ locale: string }> = ({ locale }) => {
  const t = useTranslations("navbar");


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
        menuRef.current.classList.add('hidden');
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('hidden');
    }
  };

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  return (
    <nav className={`${lemon.className} w-full fixed top-0 z-50 bg-navbar text-navbar-foreground`}>
      <div className="h-fit">
        <div className="flex justify-between items-center px-2">
          <div className="flex-shrink-0 flex items-center py-2 space-x-2">
            <Link href={getLocalizedPath("/")} className="flex justify-center items-center space-x-2">
              <Image className="w-auto h-16" src="/logo.png" alt="Logo" height={300} width={300} />
              <span className="text-sm">Santosh</span>
            </Link>
          </div>
          <div className="hidden sm:flex space-x-4 font-bold mr-8">
            <>
              <Link href={getLocalizedPath("/")}>{t('home')}</Link>
              <Link href={getLocalizedPath("/about")}>{t('about')}</Link>
              <Link href={getLocalizedPath("/skills")}>{t('skills')}</Link>
              <Link href={getLocalizedPath("/projects")}>{t('projects')}</Link>
              <Link href={getLocalizedPath("/contact")}>{t('contact')}</Link>
              <Lang />
            </>
            <ThemeToggle />
          </div >
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
        className="hidden sm:hidden"
        id="mobile-menu"
        ref={menuRef}
      >
        <hr />
        <div className="flex flex-col p-3 space-y-1 font-bold">
          <>
            <Link href={getLocalizedPath("/")}>{t('home')}</Link>
            <Link href={getLocalizedPath("/about")}>{t('about')}</Link>
            <Link href={getLocalizedPath("/skills")}>{t('skills')}</Link>
            <Link href={getLocalizedPath("/projects")}>{t('projects')}</Link>
            <Link href={getLocalizedPath("/contact")}>{t('contact')}</Link>
            <Lang />
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
