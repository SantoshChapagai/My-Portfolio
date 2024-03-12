import TypographyH2 from '@/components/typography/h2'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import TypographyH3 from '@/components/typography/h3';
import { IoBookSharp } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import TypographyH1 from '@/components/typography/h1';


const About = () => {
  return (
    <div className='min-h-screen pt-24 lg:p-24 bg-blender'>
      <div className='lg:flex justify-center flex-row-reverse items-center '>
      <div className='max-w-[650px] text-primary mx-8 mt-10 lg:space-x-16'>
        <p>I am a <strong>Full-Stack Web Developer</strong> currently studying at Business College Helsinki, where I've had the privilege of immersing myself in cutting-edge technologies such as React and Drupal. During my time at Business College Helsinki, I have become familiar with HTML, CSS, JavaScript, PHP, Symfony, MySQL, Figma, Trello, React, Tailwind CSS, Drupal, CI/CD, and Mocha. In the meantime, I have also completed the full-stack web development course from Udemy, focusing on React, Node.js, Express, and MongoDB. Prior to joining Business College, I had studied HTML, CSS, and JavaScript from platforms like FreeCodeCamp and W3Schools. Moreover, I also enjoy solving problems on platforms like Codewars, mainly related to JavaScript.</p>
        <hr  className='h-4 mt-2'/>
        <p>Additionally, my study background is related to business, and I am a graduate of <strong>Master's of Business Administration</strong> from Centria University of Applied Sciences. During my studies at Centria, I learned different aspects of business such as strategic management, change management, research, human resource management, accounting, and international business management.</p>
        <p className='mt-2'>When I'm not studying, I love exploring nature. I also play sports, spend time gaming on my PS4, and hang out with my family and friends.</p>
       </div>
       <div className='lg:bg-card rounded-tr-full rounded-bl-full mt-10'>
        <Image alt="" src="/images/santosh_about.jpg" width={768} height={512} className="object-contain w-80 rounded-3xl mt-10 ml-4 lg:ml-0 p-0 lg:p-3" />
       </div>
       </div>
       
      <div className='mt-8 lg:mt-16'>
        <div className='text-heading2 text-center underline'>
        <TypographyH2>Educational Background</TypographyH2>
        </div>
        <div className='flex flex-col justify-center items-center lg:grid grid-cols-2 mt-2 lg:mt-12 space-y-6'>
        <Link href="https://tu.edu.np/" target="_blank" className='lg:flex items-center group'>
          <div className='lg:mb-2 lg:mr-2 w-72 h-fit p-6 overflow-hidden rounded-br-full bg-white transition-transform duration-700 group-hover:scale-110'>
         <TypographyH1>Tribhuvan University</TypographyH1>
         <TypographyH3 >Bachelor's Degree in Business Studies</TypographyH3>
          </div>
         <div className='text-heading3'>
          <TypographyH3>Major courses</TypographyH3>
          <ul className='text-primary mx-4'>
            <li>Accounting</li>
            <li>Finance</li>
            <li>Marketing</li>
            <li>Research and development</li>
            <li>Business statics</li>
            <li>Principles of management</li>
          </ul>
          </div>
        </Link>
        <Link href="https://seamk.fi/" target="_blank" className='lg:flex items-center group'>
        <div className='lg:mb-2 flex flex-col justify-start items-center w-72 h-fit p-6 overflow-hidden rounded-br-full bg-white transition-transform duration-700 group-hover:scale-110'>
        <TypographyH1>Seinäjoki UAS</TypographyH1>
        <TypographyH3>Bachelor's in Business Administration</TypographyH3>
          </div>
         <div className='text-heading3 mx-4'>
          <TypographyH3>Major courses</TypographyH3>
          <ul className='text-primary'>
          <li>Business planning</li>
            <li >Market research</li>
            <li>Interntaional business management</li>
            <li>Strategic planning</li>
            <li>Teamwork</li>
            <li>Research</li>
          </ul>
          </div>
        </Link>
        <Link href="https://centria.fi/" target="_blank" className='lg:flex items-center group'>
        <div className='lg:mb-2 flex flex-col justify-start items-center w-72 h-fit p-6 overflow-hidden rounded-tr-full bg-white transition-transform duration-700 group-hover:scale-110'>
        <TypographyH1>Centria UAS</TypographyH1>
        <TypographyH3 >Master's in Business Administration</TypographyH3>
          </div>
         <div className='text-heading3'>
          <TypographyH3>Major courses</TypographyH3>
          <ul className='text-primary mx-4'>
            <li>International business management</li>
            <li>Strategic management</li>
            <li>Marketing strategy and research</li>
            <li>Human resource development</li>
            <li>Sustainable development</li>
            <li>Change management</li>
          </ul>
          </div>
        </Link>
        <Link href="https://www.bc.fi/" target="_blank" className='lg:flex items-center group'>
        <div className='lg:mb-2 flex flex-col justify-start items-center w-72 h-fit p-6 over overflow-hidden rounded-tr-full bg-white transition-transform duration-700 group-hover:scale-110'>
        <TypographyH1>Business College Helsinki</TypographyH1>
        <TypographyH3 >Full Stack Web Development</TypographyH3>
          </div>
         <div className='text-heading3'>
          <TypographyH3>Major courses</TypographyH3>
          <ul className='text-primary mx-4'>
          <li>HTML, CSS, and JavaScript</li>
            <li>Php, Symfony, and Drupal</li>
            <li>Responsive web design</li>
            <li>React and AWS</li>
            <li>Design and testing with Mocha</li>
            <li>NextJs, Docker and Git</li>
          </ul>
          </div>
        </Link>
        </div>
      </div>
      <div className='mt-10 text-heading2'>
        <TypographyH2>What I do in free time?</TypographyH2>
      </div>
      <div className='flex flex-col lg:grid grid-cols-3'>
        <div className='text-heading3'>
          <div className='flex items-center space-x-2'>
          <TypographyH3>Travel</TypographyH3>
          <span className='animate-round'><FaPlaneDeparture size={28}/></span>
          </div>
          
        </div>
        <div className='text-heading3'>
          <div className='flex items-center space-x-2'>
          <TypographyH3>Study</TypographyH3>
          <span className='animate-round'><IoBookSharp size={28}/></span>
          </div>
        </div>
        <div className='text-heading3'>
          <div className='flex items-center space-x-2'>
          <TypographyH3>Watch sports</TypographyH3>
          <span className='animate-round'><PiTelevisionSimpleBold size={28}/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About