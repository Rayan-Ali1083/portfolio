import React from 'react'

const Heading = (props) => {
    return (
        <div className='flex flex-row w-10/12 h-fit mt-7 gap-5 pl-28 items-center text-[#CCD6F6] font-mono'>

            <div className='text-3xl font-bold'>

                <span className='font-roboto text-[#64ffda] text-2xl font-thin'>{props.number} </span>

                {props.heading}

            </div>

            <div className='bg-[#8892b05e] h-[1px] w-56'></div>

        </div>
    )
}

export default Heading