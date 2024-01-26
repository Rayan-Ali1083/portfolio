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
      <motion.section id='aboutme' variants={parentVariants} initial="hidden" animate="visible" className='flex flex-col items-center h-screen p-5 lg:p-0'>

        <Heading heading='About Me' number='01. ' />

        <div className='flex lg:flex-row lg:w-10/12 lg:p-12 lg:pl-28'>


          <div className='flex flex-col items-center lg:items-start w-full lg:w-7/12 lg:font-normal text-[#8892B0] lg:text-[17px] text-[13px]'>
            <p>

              Hello! My name is Rayan and I enjoy creating value from raw data. My interest in data science started back in 2020 when I decided to try a course on data science where I classified heart patients !

            </p>

            <br></br>

            <p>

              As of now, I and the
              {<span className="relative text-[#64ffda] group"> Data Science Lead of Google Student Developer's Club <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span>
              </span>}
              and have contributed to projects like

              {<span className='relative text-[#64ffda] group'> IOT Cyber Attack Classification<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span>},

              {<span className='relative text-[#64ffda] group'> Cotton Plant Health Detection<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span>},

              {<span className='relative text-[#64ffda] group'> Recommendation <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span>}, and 
              
              {<span className='relative text-[#64ffda] group'> Power BI dashboards. <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span> }
              
              Currently pursuing a Bachelor's in Computer Science and Engineering at <span className='relative text-[#64ffda] group'>FAST University<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span>,</span> I'm actively seeking opportunities in Data Science and Machine Learning.

            </p>

            <br></br>
            
            <Image src={img} className='lg:hidden outline outline-[#64ffda] outline-offset-[5px] lg:outline-offset-[8px] lg:hover:outline-offset-[16px] hover:outline-offset-[10px] duration-150 hover:animate-pulse' width={150} alt='me'>
          </Image>

            <p className=' lg:mt-0 mt-2'>

              I love learning new technologies and am currently learning {<span className='relative text-[#64ffda] group'>Next.js<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span>} and {<span className='relative text-[#64ffda] group'>Tailwind CSS<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span>}. 
              
              Moreover I'm also learning {<span className='relative text-[#64ffda] group'>MLOPS<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span>} and how to {<span className='relative text-[#64ffda] group'>deploy machine learning models.<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span>}

            </p>

            <br></br>

            <p>

              Here are a few technologies I've been working with recently:

            </p>

            <br></br>


            <ul className='grid grid-cols-2 lg:ml-14- lg:w-full'>

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


          <Image src={img} style={{ "borderRadius": "93% 7% 49% 51% / 57% 46% 54% 43%" }} className='hidden lg:block outline outline-[#64ffda] outline-offset-8 hover:outline-offset-[16px] duration-150' width={400} alt='me'>
          </Image>

        </div>

      </motion.section>
    </>
  )
}

export default AboutMe