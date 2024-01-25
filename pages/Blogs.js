import React from 'react'
import { motion } from 'framer-motion'
import Heading from '../assets/Heading'
import BlogCard from '../assets/BlogCard'

const Blogs = () => {

    const parentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 1.75 } }
      };

  return (
    <>
        <motion.section id='blogs' variants={parentVariants} initial="hidden" animate="visible" className='flex flex-col items-center h-screen'>

        <Heading heading="Some of My Writings" number="03." />

        <div className='flex flex-row w-11/12 h-full p-12 justify-center'>

            <BlogCard />

        </div>

        </motion.section>

    </>
  )
}

export default Blogs