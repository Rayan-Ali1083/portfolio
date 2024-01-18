import React from 'react'
import { motion } from 'framer-motion'
import Heading from '../assets/Heading'
import ProjectCard from '../assets/ProjectCard'

const Projects = () => {

    const parentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 1.75 } }
      };

  return (
    <>
        <motion.section variants={parentVariants} initial="hidden" animate="visible" className='flex flex-col items-center h-screen'>

        <Heading heading="Some Things I've built" number="02." />

        <div className='flex flex-row w-11/12 h-full p-12 justify-center'>

            <ProjectCard />

        </div>

        </motion.section>

    </>
  )
}

export default Projects