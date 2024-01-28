import { motion } from 'framer-motion';
import Bars from './Bars';
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
            <section className='flex justify-center h-screen'>

                <motion.div className='flex flex-col gap-5 lg:gap-0 justify-center lg:justify-normal w-10/12 lg:mt-40 lg:pl-16' variants={container}
                    initial="hidden"
                    animate="visible"
                >

                    <Bars emaildisp="hidden" icons="block lg:hidden" position="lg:hidden flex w-full justify-between" bar="hidden" />

                    <motion.h1 variants={item} className='font-mono text-sm lg:text-[18px] text-[#64ffda]'>Hi, my name is</motion.h1>


                    <motion.h1 variants={item} className='text-[#CCD6F6] text-[3rem] font-semibold lg:text-[4rem] lg:font-bold'>Rayan Ali.</motion.h1>

                    <motion.h1 variants={item} className='text-[#8892B0] text-[1.75rem] font-semibold lg:text-[4rem] lg:font-bold leading-tight'>I hunt patterns in Data.</motion.h1>

                    <motion.p variants={item} className='text-[#8892B0] text-lg text-justify lg:text-lg font-medium lg:w-1/2 mt-8'>

                        I'm a <span className="relative text-[#64ffda] group">data scientist<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-width duration-300 group-hover:w-full"></span></span> who analyzes data to find trends and creates Power BI reports. Upcoming projects will include MLOps and Web Development.

                    </motion.p>

                    <div className='w-full h-fit flex flex-col gap-1 p-0'>

                        <motion.a href='mailto:rayanali1083@gmail.com' variants={item} className='lg:mt-14 lg:w-fit p-3 pr-7 pl-7 rounded-md border-2 border-[#64ffda] text-[#64ffda] hover:border-r-4 hover:border-b-4 hover:-translate-y-10 duration-100 text-center'>

                            Get in touch

                        </motion.a>

                        <motion.a target='blank' href='https://drive.google.com/file/d/13C85u18wQzriuxvGYDyhRm2VPVD-XY4Q/view?usp=sharing' variants={item} className='lg:hidden lg:w-fit p-3 pr-7 pl-7 rounded-md border-2 border-[#64ffda] text-[#64ffda] hover:border-r-4 hover:border-b-4 hover:-translate-y-10 duration-100 text-center'>

                            Resume

                        </motion.a>
                    </div>
                    <Bars emaildisp="block lg:hidden" icons="hidden" position="lg:hidden text-[#CCD6F6] flex w-full tracking-widest justify-center" bar="hidden" />

                </motion.div>



            </section>
        </>
    )
}

export default MainLanding