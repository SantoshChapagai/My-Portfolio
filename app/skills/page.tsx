import TypographyH2 from '@/components/typography/h2'
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { FaDrupal } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='min-h-screen p-24'>
      <div>
      <TypographyH2>Front End</TypographyH2>
      <div className='grid gap-4 grid-cols-4'>
      <FaHtml5 size={96}/>
      <FaCss3 size={96} />
      <IoLogoJavascript size={96} />
      <FaReact size={96} />
      <TbBrandNextjs size={96} />
      </div>
      </div>
      <div>
      <TypographyH2>Backend</TypographyH2>
      <div className='grid gap-4 grid-cols-4'>
       <FaPhp size={96} />
       <FaDrupal size={96} />
       <FaNodeJs size={96} />
      </div>
      </div>
      <div>
      <TypographyH2>Databases</TypographyH2>
      <div className='flex'>
        <DiMongodb size={96} />
        <DiMysql size={96} />
        
      </div>
      </div>
      <div>
        <TypographyH2> Tools </TypographyH2>
        <div className='grid gap-4 grid-cols-4'>
         <FaAws size={96}/>
         <FaBootstrap size={96}/>
        </div>
      </div>
      
    </div>
  )
}

export default Skills