import React from 'react'

const ProjectContent = (props) => {
    return (
        <>
            <div className='text-white h-full w-full border-2'>

                {props.selectedOption === 'healthcare' && (

                    <p>HealthCare</p>

                )}

                {props.selectedOption === 'anime' && (

                    <p>Anime</p>

                )}

                {props.selectedOption === 'crop' && (

                    <p>Crop</p>

                )}

                {props.selectedOption === 'iot' && (

                    <p>IoT</p>

                )}

                {props.selectedOption === 'dis' && (

                    <p>Disaster</p>

                )}

                {props.selectedOption === 'BI' && (

                    <p>Power BI</p>

                )}

            </div>
        </>
    )
}

export default ProjectContent