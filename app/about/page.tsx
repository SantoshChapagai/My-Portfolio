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
        <p>
        I am a graduate of a <strong>Master's of Business Administration</strong>, specializing in International Business. Now, I'm learning all about making websites at Business College Helsinki. For about a year, I've been learning about cool things like React and Drupal in my classes. I also took a course on making whole websites using React and Node JS on Udemy. When I'm not studying, I love exploring nature. I also play sports, spend time gaming on my PS4, and hang out with my family and friends. I'm excited about mixing my business skills with what I'm learning in tech. The world of making websites keeps changing, and I find it super interesting. I'm always curious about new things in web development.
        </p>
        <p className='mb-4'>I completed my Master's Degree in Business at Centria University of Applied Sciences and have embarked on a career transition towards the dynamic field of information technology. Motivated by the evolving landscape within this sector, I began honing my programming skills through platforms like FreeCodeCamp and Udemy.</p>
        <hr className='h-4'/>
       <p>Fortunately, I was admitted to the <strong>Full Stack Developer program</strong> at Business College Helsinki, where I've had the privilege of immersing myself in cutting-edge technologies such as React and Drupal. Over the course of a year, the once-daunting journey has become increasingly manageable and realistic through consistent practice and patience. This transition has been an enlightening experience, fostering a deep appreciation for the intricacies of programming and development. I find particular fascination and enjoyment in exploring the capabilities of technologies like React and Drupal, discovering their potential applications and versatility within the digital landscape.</p>
       </div>
       <div className='lg:bg-card rounded-tr-full rounded-bl-full mt-10'>
        <Image alt="" src="/images/santosh_about.jpg" width={768} height={512} className="object-contain w-80 rounded-3xl mt-10 ml-4 lg:ml-0 p-0 lg:p-3" />
       </div>
       </div>
       
      <div className='mt-8 lg:mt-16'>
        <div className='text-heading2 text-center underline'>
        <TypographyH2>Educational Background</TypographyH2>
        </div>
        <div className='lg:grid grid-cols-2 mt-2 lg:mt-12 space-y-6'>
        <Link href="https://tu.edu.np/" target="_blank" className='lg:flex items-center group'>
          <div className='lg:mb-2 lg:mr-2 w-64 h-64 p-4 overflow-hidden rounded-br-full bg-white transition-transform duration-700 group-hover:scale-110'>
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
        <div className='lg:mb-2 flex flex-col justify-start items-center w-64 h-64 p-4 overflow-hidden rounded-br-full bg-white transition-transform duration-700 group-hover:scale-110'>
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
        <div className='lg:mb-2 flex flex-col justify-start items-center w-56 h-56 p-4 overflow-hidden rounded-tr-full bg-white transition-transform duration-700 group-hover:scale-110'>
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
        <Link href="https://www.bc.fi/" target="_blank" className='lg:flex items-center group' style={{width:"50rem"}}>
        <div className='lg:mb-2 flex flex-col justify-start items-center w-64 h-64 p-4 overflow-hidden rounded-tr-full bg-white transition-transform duration-700 group-hover:scale-110'>
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