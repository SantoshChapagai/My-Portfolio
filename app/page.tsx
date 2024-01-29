import TypographyH2 from '@/components/typography/h2'
import TypographyH1 from '@/components/typography/h2'
import TypographyH3 from '@/components/typography/h3'
import Image from 'next/image'
import Link from 'next/link'
import { ImProfile } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";
import {Overpass} from "next/font/google"
const overPass = Overpass({
  weight: "400",
  subsets: ['latin'],

})

export default function Home() {
  return (
    <main>
      <div className="flex lg:flex-row sm:flex-col flex-wrap lg:justify-center lg:items-center lg:space-x-10 pt-24 lg:px-16 h-2/3">
        <div className='ml-2 text-heading1'>
        <TypographyH1>Hello! I'm Santosh Chapagai</TypographyH1>
        <div className='text-heading2'>
      <TypographyH2>A Full-Stack Developer <span className='transition duration-1000 ease-in animate-pulse'>👋</span></TypographyH2>
      </div>
      <div className={`${overPass.className} max-w-[650px] text-primary mx-8`}>
      <p className='mb-4'>I am a Master's in Business Administration graduate and a full stack developer. I am about to complete my full-stack program from Business College Helsinki. Currently, I am looking for an internship in the field of web development.</p>
      <hr className='h-4'/>
      <p>I have learned about HTML, CSS, JavaScript, PHP, Symfony, MySql, Figma, Trello, React, Drupal, CI/CD, and Mocha during my studies in Business College Helsinki. I have also complete the course focusing on React, NodeJs, MongoDB, and Typescript from Udemy. Moreover, I solve the task from CodeWar, FreeCodeCamp, and W3School to develop my skills and knowledge. </p>
      </div>
      <button className='mt-5 sm:text-center bg-primary mx-8 text-primary-foreground p-2 rounded-xl'>Download CV</button>
        </div>
        <div className='lg:bg-card  rounded-tl-full w-96 mt-10'>
         <Image src="/images/santosh.jpeg" alt="santosh" width={768} height={512} className="object-contain rounded-full w-80 mb-5 ml-2"/>
         </div>
         </div>
     
      <div className='lg:flex justify-evenly mx-8 lg:mt-32 lg:mb-12'>
        <Link href="/about" className="max-w-[250px] group relative">
          <div className='flex items-center space-x-4  group-hover:underline text-heading2'>
          <TypographyH2>About</TypographyH2>
          <ImProfile size={32} />
          </div>
          <p className='text-primary'>I have a short introduction that details my journey to becoming a software developer along with my studies and hobbies.</p>
        </Link>
        <Link href="/skills" className="max-w-[250px] group">
          <div className='flex items-center space-x-4 group-hover:underline text-heading2'>
          <TypographyH2>Skills</TypographyH2>
          <GiSkills size={32} />
          </div>
          <p className='text-primary'>Here's a list of skills I've acquired during my studies, covering both software development and business studies.</p>
        </Link>
        <Link href="/projects" className="max-w-[250px] group">
          <div className='flex items-center space-x-4 group-hover:underline text-heading2'>
          <TypographyH2>Projects</TypographyH2>
          <GrProjects size={24}/>
          </div>
          <p className='text-primary'>During my time at Business College Helsinki, I completed several impressive projects. Few of them are listed here.</p>
        </Link>
        <Link href="contact" className="max-w-[250px] group">
          <div className='flex items-center space-x-4 group-hover:underline text-heading2'>
          <TypographyH2>Contact</TypographyH2>
          <IoIosContacts size={32} />
          </div>
          <p className='text-primary'>Let's get connected, share experiences and help each other to develop the skills.</p>
        </Link>
      </div>
    </main>
  )
}
