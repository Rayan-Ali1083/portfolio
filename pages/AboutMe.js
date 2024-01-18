import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import SVGComp from '../assets/SVGComp';
import Heading from '../assets/Heading';
import img from '../assets/AboutMe.jpg'

const AboutMe = () => {

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 1.75 } }
  };

  return (
    <>
      <motion.section variants={parentVariants} initial="hidden" animate="visible" className='flex flex-col items-center h-screen'>

        <Heading heading='About Me' number='01. ' />

        <div className='flex flex-row w-10/12 p-12 pl-28'>

          <div className='w-7/12 font-normal text-[#8892B0] text-[17px]'>

            <p>

              Hello! My name is Rayan and I enjoy creating value from raw data. My interest in data science started back in 2020 when I decided to try a course on data science which led me to classify heart patients !

            </p>

            <br></br>

            <p>

              In my journey, I've contributed to projects like <span className='text-[#64ffda]'>IOT Cyber Attack Classification</span>, <span className='text-[#64ffda]'>Healthy/Diseased Cotton Plant Detection</span>, <span className='text-[#64ffda]'>Recommendation System</span>, and <span className='text-[#64ffda]'>Power BI dashboards.</span> Currently pursuing a Bachelor's in Computer Science and Engineering at <span className='text-[#64ffda]'>FAST University,</span> I'm actively seeking opportunities in Data Science and Machine Learning.

            </p>

            <br></br>

            <p>

              I love learning new technologies and am currently learning <span className='text-[#64ffda]'>Next.js</span> and <span className='text-[#64ffda]'>Tailwind CSS</span>. Moreover I'm also learning <span className='text-[#64ffda]'>MLOPS</span> and how to <span className='text-[#64ffda]'>deploy machine learning models.</span>

            </p>

            <br></br>

            <p>

              Here are a few technologies I've been working with recently:

            </p>

            <br></br>


            <ul className='grid grid-cols-2 ml-14'>

            <li className='flex items-center gap-3 hover:-translate-y-1 duration-200'>
                <SVGComp />
                Python
              </li>

              <li className='flex items-center gap-3 hover:-translate-y-1 duration-200'>
                <SVGComp />
                MLOPS
              </li>

              <li className='flex items-center gap-3 hover:-translate-y-1 duration-200'>
                <SVGComp />
                Power BI
              </li>

              <li className='flex items-center gap-3 hover:-translate-y-1 duration-200'>
                <SVGComp />
                Sci-kit Learn
              </li>

              <li className='flex items-center gap-3 hover:-translate-y-1 duration-200'>
                <SVGComp />
                Next JS
              </li>

              <li className='flex items-center gap-3 hover:-translate-y-1 duration-200'>
                <SVGComp />
                Tailwind CSS
              </li>

            </ul>

          </div>


          <Image src={img} style={{ "borderRadius": "93% 7% 49% 51% / 57% 46% 54% 43%" }} className='outline outline-[#64ffda] outline-offset-8 hover:outline-offset-[16px] duration-150' width={400} alt='me'>
          </Image>

        </div>

      </motion.section>
    </>
  )
}

export default AboutMe