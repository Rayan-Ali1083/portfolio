import React from 'react'
import { motion } from 'framer-motion';

const AboutMe = () => {


  const underlineVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%', transition: { duration: 1 } }
  }

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 1.75 } }
  };

  return (
    <>
      <motion.section variants={parentVariants} initial="hidden" animate="visible" className='flex flex-col items-center h-screen text-[#CCD6F6]'>

        <div className='flex flex-row w-10/12 h-fit mt-7 gap-5 pl-28 items-center'>

          <div className='text-3xl font-bold'>

            <span className='font-roboto text-[#64ffda] text-2xl font-thin'>01. </span>

            About Me

          </div>

          <div className='bg-[#8892b05e] h-[1px] w-56'></div>

        </div>

        <div className='w-10/12 p-12 pl-28'>

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

          <div className='grid grid-cols-2 pl-10'>

            <div>Python</div>
            <div>MLOPS</div>
            <div>Power BI</div>
            <div>Scikit-Learn</div>
            <div>Next JS</div>
            <div>Tailwind CSS</div>

          </div>

          </div>

          <img>
          </img>

        </div>

      </motion.section>
    </>
  )
}

export default AboutMe