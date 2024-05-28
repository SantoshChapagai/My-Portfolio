import TypographyH2 from '@/src/app/[locale]/components/typography/h2'
import React from 'react'
import Image from 'next/image'
import TypographyH3 from '@/src/app/[locale]/components/typography/h3';
import { IoBookSharp } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations("about");
  return (
    <div className='min-h-screen pt-24 lg:p-24 bg-blender'>
      <div className='lg:flex justify-center flex-row-reverse items-center '>
      <div className='max-w-[650px] text-primary mx-8 mt-10 lg:space-x-16'>
        <p>{t("intro")} <strong>{t("intro_study")}</strong> {t("school_description")}</p>
        <hr  className='h-4 mt-2'/>
        <p>{t("study_background")} <strong>{t("previous_course")}</strong> {t("study_details")}</p>
        <p className='mt-2'>{t("other")}</p>
       </div>
       <div className='lg:bg-card rounded-tr-full rounded-bl-full mt-10'>
        <Image alt="" src="/images/santosh_about.jpg" width={768} height={512} className="object-contain w-80 rounded-3xl mt-10 ml-4 lg:ml-0 p-0 lg:p-3" />
       </div>
       </div>
      <div className='mt-10 text-heading2'>
        <TypographyH2>{t("h2")}</TypographyH2>
      </div>
      <div className='flex flex-col lg:grid grid-cols-3'>
        <div className='text-heading3 flex flex-col items-center'>
          <div className='flex space-x-2 my-4'>
          <TypographyH3>{t("study")}</TypographyH3>
          <span className='animate-round'><IoBookSharp size={28}/></span>
          </div>
          <div>
            <Image src={"/images/study.png"} alt="travel" width={768} height={512}  className='w-72 h-48 rounded-xl'/>
          </div>
        </div>
        <div className='text-heading3 flex flex-col items-center'>
          <div className='flex space-x-2 my-4'>
          <TypographyH3>{t("travel")}</TypographyH3>
          <span className='animate-round'><FaPlaneDeparture size={28}/></span>
          </div>
          <div>
            <Image src={"/images/travel.jpeg"} alt="travel" width={768} height={512}  className='w-72 h-48 rounded-xl'/>
          </div>
        </div>
        <div className='text-heading3 flex flex-col items-center'>
          <div className='flex space-x-2 my-4'>
          <TypographyH3>{t("watch")}</TypographyH3>
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