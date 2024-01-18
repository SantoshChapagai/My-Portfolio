import TypographyH2 from '@/components/typography/h2'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import TypographyH3 from '@/components/typography/h3';


const About = () => {
  return (
    <div className='min-h-screen pt-24 p-24 bg-blender'>
      <div className='flex justify-center space-x-10'>
      <div className='max-w-[750px] mt-5 '>
        <p>
        I am a graduate of a <strong>Master's of Business Administration</strong>, specializing in International Business. Now, I'm learning all about making websites at Business College Helsinki. For about a year, I've been learning about cool things like React and Drupal in my classes. I also took a course on making whole websites using React and Node JS on Udemy. When I'm not studying, I love exploring nature. I also play sports, spend time gaming on my PS4, and hang out with my family and friends. I'm excited about mixing my business skills with what I'm learning in tech. The world of making websites keeps changing, and I find it super interesting. I'm always curious about new things in web development.
        </p>
        <p>I completed my Master's Degree in Business at Centria University of Applied Sciences and have embarked on a career transition towards the dynamic field of information technology. Motivated by the evolving landscape within this sector, I began honing my programming skills through platforms like FreeCodeCamp and Udemy.</p>
       <p>Fortunately, I was admitted to the <strong>Full Stack Developer program</strong> at Business College Helsinki, where I've had the privilege of immersing myself in cutting-edge technologies such as React and Drupal. Over the course of a year, the once-daunting journey has become increasingly manageable and realistic through consistent practice and patience. This transition has been an enlightening experience, fostering a deep appreciation for the intricacies of programming and development. I find particular fascination and enjoyment in exploring the capabilities of technologies like React and Drupal, discovering their potential applications and versatility within the digital landscape.</p>
      
       </div>
       <div className='lg:bg-carolina rounded-tr-full rounded-bl-full mt-10'>
        <Image src="/santosh.jpg" width={768} height={512} className="object-cover h-80 w-80 rounded-3xl mt-10" />
       </div>
       </div>
       
      <div className='mt-10'>
        <TypographyH2>Educational Background</TypographyH2>
        <div className='lg:grid grid-cols-2 gap-8 mt-12'>
        <Link href="https://tu.edu.np/" target="_blank" className='flex justify-center items-center transition-all rounded-3xl group' style={{width:"50rem"}}>
          <div className='mb-2 overflow-hidden aspect-w-16 aspect-h-10 rounded-xl'>
          <Image src="/tu.png" alt="TU" width={768} height={512} className="object-contain rounded-3xl h-72 w-72 transition-transform duration-700 transform group-hover:scale-110"/>
          </div>
         <div>
         <h3 className='text-xl font-bold'>Bachelor's Degree in Business Studies</h3>
          <h3 className='font-bold mb-5'>Tribhuvan University</h3>
          <h4 className='group-hover:font-bold underline'>Major courses</h4>
          <ul>
            <li>Accounting</li>
            <li>Finance</li>
            <li>Marketing</li>
            <li>Research and development</li>
          </ul>
          </div>
        </Link>
        <Link href="https://seamk.fi/" target="_blank" className='flex justify-center items-center transition-all rounded-3xl group' style={{width:"50rem"}}>
        <div className='mb-2 overflow-hidden aspect-w-16 aspect-h-10 rounded-xl'>
          <Image src="/seamk.png" alt="Seinäjoki" width={768} height={512} className="object-contain rounded-3xl h-72 w-72 transition-transform duration-700 transform group-hover:scale-110"/>
          </div>
          <div className='ml-8'>
          <h3 className='text-xl font-bold'>Bachelor's in Business Administration, International Business</h3>
          <h3 className='font-bold mb-5'>Seinäjoki University of Applied Sciences</h3>
          <h4 className='group-hover:font-bold underline'>Major courses</h4>
          <ul>
            <li>Business planning</li>
            <li>Market research</li>
            <li>Accounting</li>
            <li>Interntaional business management</li>
            <li>Strategic planning</li>
            <li>Teamwork</li>
            <li>Research</li>
          </ul>
          </div>
        </Link>
        <Link href="https://centria.fi/" target="_blank" className='flex justify-center items-center transition-all rounded-3xl group' style={{width:"40rem"}}>
        <div className='mb-2 overflow-hidden aspect-w-16 aspect-h-10 rounded-xl'>
          <Image src="/centria.png" alt="Centria" width={768} height={512} className="object-contain rounded-3xl h-72 w-72 transition-transform duration-700 transform group-hover:scale-110 p-4 mr-4"/>
          </div>
          <div>
          <h2 className='text-xl font-bold'>Master's in Business Administration, International Business</h2>
          <h3 className='font-bold mb-5'>Centria University of Applied Aciences</h3>
          <h4 className='group-hover:font-bold underline'>Major courses</h4>
          <ul>
            <li>International business management</li>
            <li>Strategic management</li>
            <li>Marketing strategy</li>
            <li>Research</li>
            <li>Human resource development</li>
            <li>Sustainable development</li>
            <li>Change management</li>
          </ul>
          </div>
        </Link>
        <Link href="https://www.bc.fi/" target="_blank" className='flex justify-center transition-all rounded-3xl group' style={{width:"50rem"}}>
        <div className='mb-2 overflow-hidden aspect-w-16 aspect-h-10 rounded-xl'>
          <Image src="/BCH.png" alt="BCH" width={768} height={512} className="object-contain rounded-3xl h-72 w-72 transition-transform duration-700 transform group-hover:scale-110 p-4 mr-4"/>
          </div>
        <div>
          <h2 className='text-xl font-bold'>Full-Stack Web Development</h2>
          <h3 className='font-bold mb-5'>Business College Helsinki</h3>
          <h4 className='group-hover:font-bold underline'>Major courses</h4>
          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>Php and Symfony</li>
            <li>Responsive web design</li>
            <li>Drupal</li>
            <li>React and AWS</li>
            <li>Design and testing with Mocha</li>
            <li>NextJs, Docker and Git</li>
          </ul>
        </div>
        </Link>
        </div>
      </div>
      <div className='mt-10'>
        <TypographyH2>What I do in free time?</TypographyH2>
      </div>
      <div>
        <div>
          <TypographyH3>Travel</TypographyH3>
        </div>
        <div>
          <TypographyH3>Study</TypographyH3>
        </div>
        <div>
          <TypographyH3>Watch sports</TypographyH3>
        </div>
      </div>
    </div>
  )
}

export default About