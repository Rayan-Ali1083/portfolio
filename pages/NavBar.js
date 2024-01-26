import { motion } from 'framer-motion'
import React from 'react'

const NavBar = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      };
    
      const listItemVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      };
    
      const buttonVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      };

      const sections = [
        {id: '#aboutme', name: 'About Me', index: 0},
        {id: '#projects', name: 'Projects', index: 1},
        {id: '#blogs', name: 'Blogs', index: 2}, 
        {id: '#contact', name: 'Contact', index: 3}
      ];

  return (
    <nav className='hidden lg:block fixed w-fit p-4 right-0 mt-3 pr-14 font-mono'>

        <motion.ul
          className='text-[#CCD6F6] flex flex-row gap-8 text-[14px] font-medium items-center'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {sections.map((section) => (

            <motion.li
              key={section.index}
              variants={listItemVariants}
              className='cursor-pointer hover:text-[#64ffda]'
            >
              <a href={section.id}>
              <span className='text-[#64ffda]'>0{section.index + 1}. </span>
              {section.name}
              </a> 
            </motion.li>

          ))}

          <motion.button
            className='border-[1px] border-[#64ffda] rounded-sm w-20 plr-3 pt-2 pb-2 text-[#64ffda] font-medium'
            variants={buttonVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#64ffda', color: '#0a192f'}}
          >

            <a href='https://drive.google.com/file/d/1uFy8uEQ9odK_d_3SQcRx5lCgvERZiEo7/view?usp=sharing' target='_blank'>Resume</a>
          </motion.button>

        </motion.ul>
      </nav>
  )
}

export default NavBar