import React from 'react'
import Link from 'next/link'

const ProjectContentMain = (props) => {
    return (
        <>

            <div className='static flex flex-col flex-wrap:wrap items-center h-full'>

            <h1 className='hidden sm:block lg:text-center lg:text-2xl font-mono w-full'>{props.section}</h1>

                <div className='static lg:grid lg:grid-cols-2 lg:grid-rows-2 h-full'>

                    <div className="static flex flex-col lg:p-2 p-1 lg:h-full">
                        <h1 className='text-left text-xs lg:text-xl text-[#64ffda] font-mono'>Overview</h1>
                        <div className='lg:pl-10 text-justify text-sm lg:text-base'>{props.overview}</div>
                    </div>

                    <div className="static flex flex-col lg:p-2 p-1 lg:h-full">
                        <h1 className='text-left text-xs lg:text-xl text-[#64ffda] font-mono'>Impact</h1>
                        <div className='lg:pl-10 text-justify text-sm lg:text-base'>{props.impact}</div>
                    </div>

                    <div className="static flex flex-col lg:p-2 p-1 lg:h-full">
                        <h1 className='text-left text-xs lg:text-xl text-[#64ffda] font-mono'>Technology Used</h1>
                        <div className='lg:pl-10 text-justify text-sm lg:text-base'>{props.techs}</div>
                    </div>

                    <div className="static flex flex-col lg:p-2 p-1 lg:h-full">
                        <h1 className='text-left text-xs lg:text-xl text-[#64ffda] font-mono'>UseCases</h1>
                        <div className='lg:pl-10 text-justify text-sm lg:text-base'>{props.usecases}</div>
                    </div>

                </div>

                <button className= 'static text-sm lg:text-base px-2 py-1 lg:px-5 lg:py-2 font-mono hover:-translate-y-1 mt-5 flex outline outline-[1px] outline-[#64FFDA] text-[#64FFDA] duration-150'><Link target='blank' className='flex items-center justify-center h-full w-full' href={props.link}>Click Here</Link></button>

            </div>

        </>
    )
}

export default ProjectContentMain