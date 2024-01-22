import React from 'react'
import Image from 'next/image';


const SingleCard = (props) => {
    return (
        <>

            <div className="group flex flex-col w-full h-52 shadow-md hover:shadow-xl items-center hover:-translate-y-2 duration-200 rounded-xl">
                <h1 className='text-[#CCD6F6] text-2xl font-bold'>{props.blogname}</h1>

                <div className="relative h-full w-full group">

                    <Image
                        src={props.img}
                        alt={`Image for ${props.blogname}`}
                        layout="fill"
                        objectFit="cover"
                        className='rounded-xl'  
                    />

                </div>

                <div className='hidden group-hover:flex group-hover:fixed bottom-0 group-hover:w-full group-hover:h-4/5'>

                    <div className="flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-50 rounded-xl">

                        <div className='text-justify p-4'>{props.techused}</div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default SingleCard