import React, { useState } from 'react';
import SideBar from '../assets/SideBar';
import Heading from '../assets/Heading';
import ProjectContent from '../assets/ProjectContent';

const Projects = () => {

    const [selectedOption, setSelectedOption] = useState('healthcare');

    return (
        <>

            <section id='projects' className='flex flex-col items-center h-screen p-5 lg:p-0'>

                <Heading heading="Some of My Projects" number="02." />

                <div className='flex flex-row w-11/12 h-full lg:p-12 p-2 items-center border-2'>
                        
                        <div className='border-[1px] lg:h-[384px] h-[280px] border-[#8892B0]'></div>

                        <SideBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

                        <ProjectContent selectedOption={selectedOption} />


                </div>

            </section>

        </>
    )
}

export default Projects