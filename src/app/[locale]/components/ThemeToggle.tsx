"use client";
import React, {useState, useEffect} from 'react';
import {FaMoon} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs";


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if(theme === "dark") setDarkMode(false);
  }, [])

  useEffect(()=>{
   if(darkMode){
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark");
   }else{
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light");
   }
  }, [darkMode])
  return (
    <div className='relative h-8 flex items-center cursor-pointer rounded-full p-1 mr-2' onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? (
      <BsSunFill className="text-white" size={18} />
    ) : (
      <div className='relative w-6 h-6 transition-transform duration-300 transform' style={darkMode ? { transform: 'translateX(100%)' } : {}}>
        <FaMoon className="absolute top-0 left-0" size={18} />
      </div>
    )}
  </div>
  )
}

export default ThemeToggle