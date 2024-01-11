import TypographyH3 from '@/components/typography/h3'
import React from 'react'

const Projects = () => {
  return (
    <div className='min-h-screen pt-32 p-10'>
      <div>
        <p>I have developed some cool projects as a part of my study during the time at Business College Helsinki. When I started learning coding I developed focused on the front-end and as the study progress and get to know about backend I have developed some full stack application. I have also developed some site using publicly availiable APIs. Moreover, I have also developed some project as a part of my study in Udemy.</p>
      </div>
      <div>
        <div>
          <TypographyH3>Country App</TypographyH3>
          <p>It is built in react using bootstrap. Used the rest country API and disply the list of country. Use the google firebase for the sign in functionality. The site displayed homepage, sigin and signup page at first. Once the user signin or signup it has card of all countries with flag, population, languages, and currency. There is also a search field at the top to filter the country. User can also mark their favourites country with the heart sign at the card which save the country to the favourite list. Once user go to the favourite list they can see their favourite country if they have choose and can remove the country from favourite list. Clicking in the card navigates to the individual country. It has used api from Pixaby and shows the images from individual country in the bootstrap carousel. It use the open weather api to show the weather of a country capital. It uses google map api to show the country in google map. It has also shows some other basic information. There is also a list of borders of the country, which are clickable and clickling on the border country navigates to that particular country.</p>
        </div>
        <div>
          <TypographyH3>Shopping App</TypographyH3>
          <p>Build in react using the bootstrap. It uses the fakestore api and render information about the product in a card. The card shows the information basic information about the product along with image. There is also a option to filter the products at the top. User can categorize product based on category, gender, and prices.</p>
        </div>
        <div>
          <TypographyH3>Receipe App</TypographyH3>
          <p>Build in React using CSS. It is the app which shows the basic information about the receipe in the card and if user want can navigate to the individual receipe to see more information about that receipe. There is also a option for the user to add their favourite receipe to the list.</p>
        </div>
        <div>
          <TypographyH3>ToDo</TypographyH3>
          <p>Built with Node, EJS, MongoDb, and CSS. It is the simple app where the current date is displayed on the top and user can add the todo ietm on the list. User can also mark the completed task clicking the checkbox.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects