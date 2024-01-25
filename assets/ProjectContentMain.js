import React from 'react'
import Link from 'next/link'

const ProjectContentMain = (props) => {
    return (
        <>

            <div className='flex flex-col h-full items-center'>

                <h1 className='text-center text-2xl font-mono'>{props.section}</h1>

                <div className='grid grid-cols-2 grid-rows-2 gap-5'>

                    <div className="p-4">
                        <h1 className='text-left text-xl text-[#64ffda] font-mono'>Overview</h1>
                        <div className='pl-10 text-justify'>{props.overview}</div>
                    </div>

                    <div className="p-4">
                        <h1 className='text-left text-xl text-[#64ffda] font-mono'>Impact</h1>
                        <div className='pl-10 text-justify'>{props.impact}</div>
                    </div>

                    <div className="p-4">
                        <h1 className='text-left text-xl text-[#64ffda] font-mono'>Technology Used</h1>
                        <div className='pl-10 text-justify'>{props.techs}</div>
                    </div>

                    <div className="p-4">
                        <h1 className='text-left text-xl text-[#64ffda] font-mono'>UseCases</h1>
                        <div className='pl-10 text-justify'>{props.usecases}</div>
                    </div>

                </div>

                <button className='flex w-fit h-fit text-white rounded-md font-mono hover:shadow-md hover:shadow-white hover:bg-[#64ffda] hover:text-black duration-150'><Link target='blank' className='flex p-5 h-full w-full' href={props.link}>Click Here</Link></button>

            </div>

        </>
    )
}

export default ProjectContentMain