import React, { useState } from 'react';
import SideBar from '../assets/SideBar';
import Heading from '../assets/Heading';
import ProjectContent from '../assets/ProjectContent';

const Projects = () => {

    const [selectedOption, setSelectedOption] = useState('iot');

    return (
        <>

            <section id='projects' className='flex flex-col items-center h-full p-5 lg:p-0'>

                <Heading heading="Some of My Projects" number="02." />


                <div className='flex flex-col lg:flex-row w-11/12 h-5/6 lg:p-12 p-2 items-center'>
                        
                        <div className='lg:border-[1px] lg:h-[384px] lg:border-[#8892B0]'></div>

                        <SideBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

                        <ProjectContent selectedOption={selectedOption} />

                </div>

            </section>

        </>
    )
}

export default Projects