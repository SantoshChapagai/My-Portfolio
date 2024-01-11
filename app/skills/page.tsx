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
    <div className='min-h-screen p-24'>
      <div>
      <TypographyH2>Front End</TypographyH2>
      <div className='lg:grid gap-4 grid-cols-4'>
        <div className='flex flex-col justify-center items-center'>
        <FaHtml5 size={175}/>
        <TypographyH3>HTML</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaCss3 size={175} />
        <TypographyH3>CSS</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <IoLogoJavascript size={175} />
        <TypographyH3>JavaScript</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaReact size={175} />
        <TypographyH3>React</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <TbBrandNextjs size={175} />
        <TypographyH3>NextJs</TypographyH3>
        </div>
      </div>
      </div>
      <div>
      <TypographyH2>Backend</TypographyH2>
      <div className='lg:grid gap-4 grid-cols-4'>
        <div className='flex flex-col justify-center items-center'>
        <FaPhp size={175} />
        <TypographyH3>PHP</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaDrupal size={175} />
        <TypographyH3>Drupal</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <FaNodeJs size={175} />
        <TypographyH3>NodeJs</TypographyH3>
        </div>
      </div>
      </div>
      <div>
      <TypographyH2>Databases</TypographyH2>
      <div className='lg:grid gap-4 grid-cols-4'>
        <div className='flex flex-col justify-center items-center'>
        <DiMongodb size={175} /> 
        <TypographyH3>MongoDB</TypographyH3>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <DiMysql size={175} />
        <TypographyH3>MySql</TypographyH3>
        </div>
      </div>
      </div>
      <div>
        <TypographyH2> Tools </TypographyH2>
        <div className='lg:grid gap-4 grid-cols-4'>
          <div className='flex flex-col justify-center items-center'>
          <FaAws size={175}/>
          <TypographyH3>AWS</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaBootstrap size={175}/>
          <TypographyH3>Bootstrap</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <SiTailwindcss size={175}/>
          <TypographyH3>Tailwind</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <SiMocha size={175}/>
          <TypographyH3>Mocha</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <SiSonarcloud size={175}/>
          <TypographyH3>SonarCloud</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <PiFigmaLogoBold size={175}/>
          <TypographyH3>Figma</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaDocker size={175}/>
          <TypographyH3>Docker</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaGithubAlt size={175}/>
          <TypographyH3>Git</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaTrello size={175}/>
          <TypographyH3>Trello</TypographyH3>
          </div>
        </div>
      </div>
      <div>
        <TypographyH2>Others</TypographyH2>
        <div className='lg:grid gap-4 grid-cols-4'>
          <div className='flex flex-col justify-center items-center'>
          <SiMicrosoftexcel size={175} />
          <TypographyH3>Excel</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaFilePowerpoint size={175} />
          <TypographyH3>PowerPoint</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <GrPlan size={175} />
          <TypographyH3>Planning</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <PiStrategyBold size={175} />
          <TypographyH3>Strategic management</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <IoMdTime size={175} />
          <TypographyH3>Time management</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <GiArchiveResearch size={175} />
          <TypographyH3>Quantitative and qualitative research</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <MdAccountBalance size={175} />
          <TypographyH3>Accounting and finance</TypographyH3>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <RiTeamFill size={175} />
          <TypographyH3>Team work</TypographyH3>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Skills