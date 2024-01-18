import React from 'react'
import Image from 'next/image';


const SingleCard = (props) => {
    return (

        <div className="flex flex-col w-full shadow-md hover:shadow-xl hover:shadow-yellow-400 shadow-yellow-400 items-center hover:-translate-y-2 duration-200 rounded-xl">
            <div className="relative h-48 w-full ">
                
                <Image
                    src={props.img}
                    alt={`Image for ${props.projectname}`}
                    layout="fill"
                    objectFit="cover"
                    className='rounded-xl'
                />
            
            </div>
        </div>
    )
}

export default SingleCard