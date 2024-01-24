import React, { useState } from 'react';
import SideBar from '../assets/SideBar';
import Heading from '../assets/Heading';
import ProjectContent from '../assets/ProjectContent';

const Projects = () => {

    const [selectedOption, setSelectedOption] = useState('healthcare');

    return (
        <>

            <section className='flex flex-col items-center h-screen'>

                <Heading heading="Some of My Projects" number="02." />

                <div className='flex flex-row w-11/12 h-full p-12 border-2 items-center'>
                        
                        <div className='border-[1px] h-[66%] border-[#8892B0]'></div>

                        <SideBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

                        <ProjectContent selectedOption={selectedOption} />



                </div>

            </section>

        </>
    )
}

export default Projects