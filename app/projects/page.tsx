import TypographyH3 from '@/components/typography/h3'
import React from 'react'

const Projects = () => {
  return (
    <div className='min-h-screen pt-4'>
      <div>
        <p>I have developed some cool projects as a part of my study during the time at Business College Helsinki. When I started learning coding I developed focused on the front-end and as the study progress and get to know about backend I have developed some full stack application. I have also developed some site using publicly availiable APIs. Moreover, I have also developed some project as a part of my study in Udemy.</p>
      </div>
      <div>
        <div>
          <TypographyH3>Country App</TypographyH3>
          <p>Used the rest country API and disply the list of country. Use the google firebase for the sign in functionality.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects