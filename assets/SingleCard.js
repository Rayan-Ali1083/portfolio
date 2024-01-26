import React from 'react'
import Image from 'next/image';


const SingleCard = (props) => {
    return (
        <>

            <div className="group flex flex-col w-full lg:h-52 lg:shadow-md lg:hover:shadow-xl items-center hover:-translate-y-2 duration-200 rounded-xl gap-1 lg:gap-0">
                <h1 className='text-lg text-[#CCD6F6] lg:text-2xl font-bold mr-auto lg:mr-0'>{props.blogname}</h1>

                <div className="hidden sm:block mr-auto h-28 w-full lg:relative lg:h-full lg:w-full lg:group">

                    <Image
                        src={props.img}
                        alt={`Image for ${props.blogname}`}
                        layout="fill"
                        objectFit="cover"
                        className='rounded-xl'
                    />

                </div>

                <div className='hidden lg:text-pretty lg:group-hover:flex lg:group-hover:fixed bottom-0 lg:group-hover:w-full lg:group-hover:h-4/5'>

                    <div className="flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-50 rounded-xl">

                        <div className='text-justify lg:p-4'>{props.techused}</div>

                    </div>

                </div>

                <div className='flex flex-col lg:hidden h-1/2 w-full text-pretty whitespace-normal p-1'>

                    <Image
                    src={props.img}
                    alt={`Image for ${props.blogname}`}
                    objectFit="cover"
                    className='rounded-xl'
                    ></Image>

                    <div className='text-sm text-white h-fit text-justify'>
                        {props.techused}
                    </div>

                </div>

            </div>


        </>
    )
}

export default SingleCard