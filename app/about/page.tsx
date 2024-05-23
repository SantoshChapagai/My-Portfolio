import TypographyH2 from '@/components/typography/h2'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import TypographyH3 from '@/components/typography/h3';
import { IoBookSharp } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";


const About = () => {
  return (
    <div className='min-h-screen pt-24 lg:p-24 bg-blender'>
      <div className='lg:flex justify-center flex-row-reverse items-center '>
      <div className='max-w-[650px] text-primary mx-8 mt-10 lg:space-x-16'>
        <p>I am a <strong>Full-Stack Web Developer</strong> graduated from Business College Helsinki, where I've had the privilege of immersing myself in cutting-edge technologies such as React and Drupal. During my time at Business College Helsinki, I have become familiar with HTML, CSS, JavaScript, PHP, Symfony, MySQL, Figma, Trello, React, Tailwind CSS, Drupal, CI/CD, and Mocha. In the meantime, I have also completed the full-stack web development course from Udemy, focusing on React, Node.js, Express, and MongoDB. Prior to joining Business College, I had studied HTML, CSS, and JavaScript from platforms like FreeCodeCamp and W3Schools. Moreover, I also enjoy solving problems on platforms like Codewars, mainly related to JavaScript.</p>
        <hr  className='h-4 mt-2'/>
        <p>Additionally, my study background is related to business, and I am a graduate of <strong>Master's of Business Administration</strong> from Centria University of Applied Sciences. During my studies at Centria, I learned different aspects of business such as strategic management, change management, research, human resource management, accounting, and international business management.</p>
        <p className='mt-2'>When I'm not studying, I love exploring nature. I also play sports, spend time gaming on my PS4, and hang out with my family and friends.</p>
       </div>
       <div className='lg:bg-card rounded-tr-full rounded-bl-full mt-10'>
        <Image alt="" src="/images/santosh_about.jpg" width={768} height={512} className="object-contain w-80 rounded-3xl mt-10 ml-4 lg:ml-0 p-0 lg:p-3" />
       </div>
       </div>
      <div className='mt-10 text-heading2'>
        <TypographyH2>What I do in free time?</TypographyH2>
      </div>
      <div className='flex flex-col lg:grid grid-cols-3'>
        <div className='text-heading3 flex flex-col items-center'>
          <div className='flex space-x-2 my-4'>
          <TypographyH3>Study</TypographyH3>
          <span className='animate-round'><IoBookSharp size={28}/></span>
          </div>
          <div>
            <Image src={"/images/study.png"} alt="travel" width={768} height={512}  className='w-72 h-48 rounded-xl'/>
          </div>
        </div>
        <div className='text-heading3 flex flex-col items-center'>
          <div className='flex space-x-2 my-4'>
          <TypographyH3>Travel</TypographyH3>
          <span className='animate-round'><FaPlaneDeparture size={28}/></span>
          </div>
          <div>
            <Image src={"/images/travel.jpeg"} alt="travel" width={768} height={512}  className='w-72 h-48 rounded-xl'/>
          </div>
        </div>
        <div className='text-heading3 flex flex-col items-center'>
          <div className='flex space-x-2 my-4'>
          <TypographyH3>Watch sports</TypographyH3>
          <span className='animate-round'><PiTelevisionSimpleBold size={28}/></span>
          </div>
          <div>
            <Image src={"/images/sport.png"} alt="travel" width={768} height={512}  className='w-72 h-48 rounded-xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About