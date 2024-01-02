import TypographyH2 from '@/components/typography/h2'
import TypographyH3 from '@/components/typography/h3'
import React from 'react'


const About = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='max-w-[750px]'>
        <p>
        I am a graduate of a Master's of Business Administration, specializing in International Business. Now, I'm learning all about making websites at Business College Helsinki. For about a year, I've been learning about cool things like React and Drupal in my classes. I also took a course on making whole websites using React and Node JS on Udemy. When I'm not studying, I love exploring nature. I also play sports, spend time gaming on my PS4, and hang out with my family and friends. I'm excited about mixing my business skills with what I'm learning in tech. The world of making websites keeps changing, and I find it super interesting. I'm always curious about new things in web development.
        </p>
      </div>
      <div className='max-w-[750px]'>
        <TypographyH2>Journey to be a developer</TypographyH2> 
        <p>I completed my Master's Degree in Business at Centria University of Applied Sciences and have embarked on a career transition towards the dynamic field of information technology. Motivated by the evolving landscape within this sector, I began honing my programming skills through platforms like FreeCodeCamp and Udemy.

Fortunately, I was admitted to the Full Stack Developer program at Business College Helsinki, where I've had the privilege of immersing myself in cutting-edge technologies such as React and Drupal. Over the course of a year, the once-daunting journey has become increasingly manageable and realistic through consistent practice and patience.

This transition has been an enlightening experience, fostering a deep appreciation for the intricacies of programming and development. I find particular fascination and enjoyment in exploring the capabilities of technologies like React and Drupal, discovering their potential applications and versatility within the digital landscape.</p>
      </div>
      <div>
        <TypographyH2>Educational Background</TypographyH2>
        <div>
          <TypographyH3>Bachelor's Degree in Business Studies</TypographyH3>
          <h3>Tribhuvan University</h3>
          <h4>Skills</h4>
          <ul>
            <li>Accounting</li>
            <li>Finance</li>
            <li>Marketing</li>
            <li>Research and development</li>
          </ul>
        </div>
        <div>
          <h2>Bachelor's in Business Administration, International Business</h2>
          <h3>Seinäjoki University of Applied Sciences</h3>
          <h4>Skills</h4>
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
        <div>
          <h2>Master's in Business Administration, International Business</h2>
          <h3>Centria University of Applied Aciences</h3>
          <h4>Skills</h4>
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
        <div>
          <h2>Full-Stack Web Development</h2>
          <h3>Business College Helsinki</h3>
          <h4>Skills</h4>
          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>Php and Symfony</li>
            <li>Responsive web design</li>
            <li>Drupal</li>
            <li>React and NextJS</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Hobbies</h1>
      </div>
    </div>
  )
}

export default About