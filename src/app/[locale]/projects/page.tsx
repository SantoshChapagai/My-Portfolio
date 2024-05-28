"use client"
import TypographyH3 from '@/src/app/[locale]/components/typography/h3'
import React, {useRef, useEffect} from 'react'
import Video from "next-video"
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import TypographyH1 from '@/src/app/[locale]/components/typography/h1'
import { useTranslations } from 'next-intl'



const Projects = () => {
  const videoRef= useRef<HTMLVideoElement>(null);
  const t = useTranslations("projects");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className='min-h-screen pt-32 p-10 flex flex-col items-center text-primary'>
      <div className='max-w-[700px] mb-8'>
        <p>{t("intro")}</p>
      </div>
      <div className='flex flex-col items-center'>
        <div className='lg:max-w-[1000px]'>
          <div className='flex flex-col lg:flex-row justify-around items-center mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Recipe App</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>{t("recipe_intro")}</p>
          <Link href="https://github.com/SantoshChapagai/recipe-react" target='blank' className='flex justify-center hover:underline p-2'>{t("see")} <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="/videos/recipe.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px]'>
          <div className='flex flex-col lg:flex-row-reverse justify-around items-center mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Shopping App</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>{t("shopping_intro")}</p>
          <Link href="https://github.com/SantoshChapagai/shopping-app" target='blank' className='flex justify-center hover:underline p-2'>{t("see")} <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="/videos/shopping.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px] mt-4'>
          <div className='flex flex-col lg:flex-row justify-around items-center lg:mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Speed Game</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>{t("speed_game_intro")}</p>
          <Link href="https://github.com/SantoshChapagai/speedgame-react" target='blank' className='flex justify-center hover:underline p-2'>{t("see")} <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="/videos/speedgame.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px] mt-4'>
          <div className='flex flex-col lg:flex-row-reverse justify-around items-center lg:mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Blog</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>{t("blog_intro")}</p>
          <Link href="https://github.com/SantoshChapagai/blog-mongodb" target='blank' className='flex justify-center hover:underline p-2'>{t("see")} <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="/videos/blog.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px] mt-4'>
          <div className='flex flex-col lg:flex-row justify-around items-center lg:mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Country</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>{t("country_intro")}</p>
          <Link href="https://github.com/SantoshChapagai/country-project" target='blank' className='flex justify-center hover:underline p-2'>{t("see")} <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="/videos/country.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center py-4 mt-12'>
          <TypographyH1>{t("h1")}</TypographyH1>
         <Link href="https://github.com/SantoshChapagai" target='blank'><FaGithub size={36}/></Link> 
        </div>
      </div>
    </div>
  )
}

export default Projects