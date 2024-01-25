import { motion } from 'framer-motion';
import React from 'react'

const MainLanding = () => {

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1.5,
                staggerChildren: 0.1
            }
        }
    }
    const item = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <>
            <section className='flex justify-center h-screen '>

                <motion.div className='w-10/12 mt-40 pl-16' variants={container}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.h1 variants={item} className='font-mono text-[18px] text-[#64ffda]'>Hi, my name is</motion.h1>


                    <motion.h1 variants={item} className='text-[#CCD6F6] text-[4rem] font-bold'>Rayan Ali.</motion.h1>

                    <motion.h1 variants={item} className='text-[#8892B0] text-[4rem] font-bold leading-tight'>I hunt patterns in Data.</motion.h1>

                    <motion.p variants={item} className='text-[#8892B0] text-lg font-medium w-1/2 mt-8'>

                        I'm a <span className='text-[#64ffda]'>data scientist</span> who analyzes data to find trends and creates Power BI reports. Upcoming projects will include MLOps and Web Development.
                    
                    </motion.p>

                    <motion.button variants={item} className='p-3 pr-7 pl-7 mt-14 rounded-md border-2 border-[#64ffda] text-[#64ffda] hover:border-r-4 hover:border-b-4 hover:-translate-y-10 duration-150'>
                        
                        Get in touch
                    
                    </motion.button>

                </motion.div>
                
            </section>
        </>
    )
}

export default MainLanding