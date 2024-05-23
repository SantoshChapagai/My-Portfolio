"use client"
import React, {useState, useEffect} from 'react'
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      
      if (scrollPosition > window.innerHeight * 0.8) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div
      className={`${
        showButton ? 'fixed bottom-8 right-2 md:right-10 transition-transform duration-300' : '-right-full'
      }`}
    >
      {showButton && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-primary-foreground rounded-full p-3 focus:outline-none"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  )
}

export default TopButton