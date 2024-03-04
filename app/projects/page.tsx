"use client"
import TypographyH3 from '@/components/typography/h3'
import React, {useRef, useEffect} from 'react'
import Video from "next-video"
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import TypographyH1 from '@/components/typography/h1'



const Projects = () => {
  const videoRef= useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className='min-h-screen pt-32 p-10 flex flex-col items-center text-primary'>
      <div className='max-w-[700px] mb-8'>
        <p>I have developed some cool projects as a part of my study during the time at Business College Helsinki. When I started learning coding I developed focused on the front-end and as the study progress and get to know about backend I have developed some full stack application. I have also developed some site using publicly availiable APIs. Moreover, I have also developed some project as a part of my study in Udemy.</p>
      </div>
      <div>
        <div>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Recipe App</TypographyH3>
          </div>
          <p className='max-w-[700px] mx-8'>Built with React and CSS, this recipe app displays basic recipe information on cards, allowing users to navigate to individual recipes for more details. Users can also add their favorite recipes to a list.</p>
          <Link href="https://github.com/SantoshChapagai/recipe-react" target='blank' className='flex justify-center hover:underline'>See more at: <FaGithub size={28}/></Link>
          </div>
          <div className='w-[500px]'>
            <Video ref={videoRef} src="videos/recipe.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div>
          <div className='flex flex-col lg:flex-row-reverse justify-between items-center'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Shopping App</TypographyH3>
          </div>
          <p className='max-w-[700px] mx-8'>Built with React and Bootstrap, this website integrates the Fakestore API to showcase product details via cards with images. Users can filter products by category, gender, and prices.</p>
          <Link href="https://github.com/SantoshChapagai/shopping-app" target='blank' className='flex justify-center hover:underline'>See more at: <FaGithub size={28}/></Link>
          </div>
          <div className='w-[500px]'>
            <Video ref={videoRef} src="videos/shopping.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div>
          <TypographyH3>Country App</TypographyH3>
          <p>Built using React/Bootstrap, this site utilizes Rest API, Firebase auth for signup/signin. It displays country list, favs, weather via OpenWeather API, maps via Google Maps API, and borders. Pixabay API provides images. Clickable borders navigate to respective countries.</p>
        </div>
        <div className='rounded-3xl w-96 overflow-hidden'>
          <video src="./videos/recip.mp4" autoPlay autoFocus></video>
        </div>
        <div>
          <TypographyH3>ToDo</TypographyH3>
          <p>Built with Node, EJS, MongoDb, and CSS. It is the simple app where the current date is displayed on the top and user can add the todo ietm on the list. User can also mark the completed task clicking the checkbox.</p>
          <div className='rounded-3xl'>
          </div>
        </div>
        <div className='flex justify-center items-center py-4'>
          <TypographyH1>See more of my work in</TypographyH1>
         <Link href="https://github.com/SantoshChapagai" target='blank'><FaGithub size={36}/></Link> 
        </div>
      </div>
    </div>
  )
}

export default Projects