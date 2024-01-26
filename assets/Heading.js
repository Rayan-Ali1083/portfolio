import React from 'react'

const Heading = (props) => {
    return (
        <div className='flex flex-row lg:w-10/12 h-fit lg:mt-7 gap-5 lg:pl-28 lg:items-center lg:mr-0 mr-auto text-[#CCD6F6] font-mono'>

            <div className='lg:text-3xl font-bold'>

                <span className='font-roboto text-[#64ffda] lg:text-2xl font-thin'>{props.number} </span>

                {props.heading}

            </div>

            <div className='hidden lg:block lg:bg-[#8892b05e] lg:h-[1px] lg:w-56'></div>

        </div>
    )
}

export default Heading