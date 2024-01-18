import React from 'react'
import SingleCard from './SingleCard'
import AnimeRec from './AnimeRec.jpg'
import CropDoc from './CropDoc.jpg'
import DisasterRelief from './DisasterRelief.jpg'
import HealthLink from './HealthLink.jpeg'
import Layer7Defend from './Layer7Defend.png'
import PowerBI from './PowerBI.png'

const ProjectsCard = () => {

  return (
    <>

      <section className='w-11/12'>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <a target='blank' href='https://github.com/Rayan-Ali1083/Anime-Recommendation' ><SingleCard projectname="Project 1" techused="React, Tailwind CSS" img={AnimeRec} /></a>

          <a target='blank' href='https://raw.githubusercontent.com/Rayan-Ali1083/Power-BI/main/Madhav%20Store%20Ecommerce%20Data/Madhav%20Store%20Ecommerce.PNG' ><SingleCard projectname="Project 1" techused="React, Tailwind CSS" img={PowerBI} /></a>

          <a target='blank' href='https://github.com/Rayan-Ali1083/Layer7Defend' ><SingleCard projectname="Project 1" techused="React, Tailwind CSS" img={Layer7Defend} /></a>


          <a target='blank' href='https://github.com/Rayan-Ali1083/Crop-Doc' ><SingleCard projectname="Project 1" techused="React, Tailwind CSS" img={CropDoc} /></a>

          <a target='blank' href='https://github.com/Rayan-Ali1083/Disaster-Relief-Management-System' ><SingleCard projectname="Project 1" techused="React, Tailwind CSS" img={DisasterRelief} /></a>

          <a ><SingleCard projectname="Project 1" techused="React, Tailwind CSS" img={HealthLink} /></a>



        </div>

      </section>

    </>
  )
}

export default ProjectsCard