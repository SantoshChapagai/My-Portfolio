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
      <div className='flex flex-col items-center'>
        <div className='lg:max-w-[1000px]'>
          <div className='flex flex-col lg:flex-row justify-around items-center mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Recipe App</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>Built with React and CSS, this recipe app displays basic recipe information on cards, allowing users to navigate to individual recipes for more details. Users can also add their favorite recipes to a list.</p>
          <Link href="https://github.com/SantoshChapagai/recipe-react" target='blank' className='flex justify-center hover:underline p-2'>See more at: <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="videos/recipe.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px]'>
          <div className='flex flex-col lg:flex-row-reverse justify-around items-center mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Shopping App</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>Built with React and Bootstrap, this website integrates the Fakestore API to showcase product details via cards with images. Users can filter products by category, gender, and prices.</p>
          <Link href="https://github.com/SantoshChapagai/shopping-app" target='blank' className='flex justify-center hover:underline p-2'>See more at: <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="videos/shopping.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px] mt-4'>
          <div className='flex flex-col lg:flex-row justify-around items-center lg:mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Speed Game</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>Built with React, this game features three levels: Easy, with 4 circles; Medium, with 5 circles; and Hard, with 6 circles. The cat appears randomly in one of the circles. If the player clicks the circle where the cat appears, 10 points are added to the score.</p>
          <Link href="https://github.com/SantoshChapagai/speedgame-react" target='blank' className='flex justify-center hover:underline p-2'>See more at: <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="videos/speedgame.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px] mt-4'>
          <div className='flex flex-col lg:flex-row-reverse justify-around items-center lg:mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Blog</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>
Built with Node, Express, and EJS, this web application uses MongoDB for the database. Users can compose blogs, and all composed blogs are listed on the home page.</p>
          <Link href="https://github.com/SantoshChapagai/blog-mongodb" target='blank' className='flex justify-center hover:underline p-2'>See more at: <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="videos/blog.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='lg:max-w-[1000px] mt-4'>
          <div className='flex flex-col lg:flex-row justify-around items-center lg:mt-5'>
          <div className='space-y-4'>
          <div className='text-center'>
          <TypographyH3>Country</TypographyH3>
          </div>
          <p className='w-[300px] md:w-[500px] lg:w-[500px] mx-8'>
          Built using React/Bootstrap, this site utilizes Rest API, Firebase auth for signup/signin. It displays country list, favs, weather via OpenWeather API, maps via Google Maps API, and borders. Pixabay API provides images. Clickable borders navigate to respective countries.</p>
          <Link href="https://github.com/SantoshChapagai/country-project" target='blank' className='flex justify-center hover:underline p-2'>See more at: <FaGithub size={28}/></Link>
          </div>
          <div className='w-[300px] md:w-[500px] lg:w-[500px]'>
            <Video ref={videoRef} src="videos/country.mp4" autoPlay muted loop/>
          </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center py-4 mt-12'>
          <TypographyH1>See more of my work at</TypographyH1>
         <Link href="https://github.com/SantoshChapagai" target='blank'><FaGithub size={36}/></Link> 
        </div>
      </div>
    </div>
  )
}

export default Projects