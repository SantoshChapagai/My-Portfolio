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
import { SiTailwindcss } from "react-icons/si";
import { SiMocha } from "react-icons/si";
import { SiSonarcloud } from "react-icons/si";
import TypographyH3 from '@/components/typography/h3';
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFilePowerpoint } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { PiStrategyBold } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { PiFigmaLogoBold } from "react-icons/pi";
import { FaDocker } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { FaTrello } from "react-icons/fa6";



const Skills = () => {
  return (
    <div className='min-h-screen px-16 md:px-20 lg:px-24 pt-16 md:pt-24 text-primary'>
      <div>
        <div className='text-heading2 pt-6 whitespace-nowrap'>
      <TypographyH2>Technology Stack</TypographyH2>
      </div>
      <div className='grid gap-x-24 lg:gap-x-4 gap-y-4 grid-cols-3 lg:grid-cols-8 md:grid-cols-6'>
        <div className='flex flex-col justify-center items-center'>
        <FaHtml5 size={72}/>
        <TypographyH3>HTML</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaCss3 size={72} />
        <TypographyH3>CSS</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <IoLogoJavascript size={72} />
        <TypographyH3>JavaScript</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaReact size={72} />
        <TypographyH3>React</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <TbBrandNextjs size={72} />
        <TypographyH3>NextJs</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaPhp size={72} />
        <TypographyH3>PHP</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaDrupal size={72} />
        <TypographyH3>Drupal</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaNodeJs size={72} />
        <TypographyH3>NodeJs</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <DiMongodb size={72} /> 
        <TypographyH3>MongoDB</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <DiMysql size={72} />
        <TypographyH3>MySql</TypographyH3>
        </div>
      </div>
      </div>
      <div>
      <div className='text-heading2 p-6'>
        <TypographyH2> Tools </TypographyH2>
        </div>
        <div className='grid gap-x-28 gap-y-5 lg:gap-x-4 grid-cols-3 lg:grid-cols-8 md:grid-cols-6'>
          <div className='flex flex-col justify-center items-center'>
          <FaAws size={72}/>
          <TypographyH3>AWS</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaBootstrap size={72}/>
          <TypographyH3>Bootstrap</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <SiTailwindcss size={72}/>
          <TypographyH3>Tailwind</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <SiMocha size={72}/>
          <TypographyH3>Mocha</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <SiSonarcloud size={72}/>
          <TypographyH3>SonarCloud</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <PiFigmaLogoBold size={72}/>
          <TypographyH3>Figma</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaDocker size={72}/>
          <TypographyH3>Docker</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaGithubAlt size={72}/>
          <TypographyH3>Git</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaTrello size={72}/>
          <TypographyH3>Trello</TypographyH3>
          </div>
        </div>
      </div>
      <div>
      <div className='text-heading2 p-6'>
        <TypographyH2>Others</TypographyH2>
        </div>
        <div className='grid gap-x-32 lg:gap-x-4 grid-cols-2 lg:grid-cols-8 md:grid-cols-6'>
          <div className='flex flex-col justify-center items-center'>
          <SiMicrosoftexcel size={72} />
          <TypographyH3>Excel</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaFilePowerpoint size={72} />
          <TypographyH3>PowerPoint</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <GrPlan size={72} />
          <TypographyH3>Planning</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <PiStrategyBold size={72} />
          <TypographyH3>Strategic management</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <IoMdTime size={72} />
          <TypographyH3>Time management</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <GiArchiveResearch size={72} />
          <TypographyH3>Quantitative and qualitative research</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <MdAccountBalance size={72} />
          <TypographyH3>Accounting and finance</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <RiTeamFill size={72} />
          <TypographyH3>Team work</TypographyH3>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Skills