import React from 'react'
import ProjectContentMain from '../assets/ProjectContentMain'
import SVGComp from './SVGComp'

const ProjectContent = (props) => {
    return (
        <>
            <div className='text-[#CCD6F6] h-full w-full'>

                {props.selectedOption === 'healthcare' && (

                    <ProjectContentMain section={'Remote HealthCare System'} overview={
                        'For my Final Year Project my team is developing an IoT-based Remote Healthcare System using Next.js, Tailwind CSS, and Spring Boot, with a focus on modernizing healthcare through Data Interoperability and making the product HL7 and FHIR complaint.'
                    }
                    usecases={
                        <ul>

                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Remote Patient Monitoring</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Telemedicine Integration</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Medication Management</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Emergency Alerts</li>

                        </ul>
                    } 
                    impact ={
                        'The IoT-based Remote Healthcare System offers real-time monitoring, virtual consultations, automated medication management, and emergency alerts, improving accessibility, optimizing resources, and personalizing healthcare for enhanced patient engagement.'
                    }

                    techs={
                        <ul>
                                
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Next.js</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Tailwind CSS</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Spring Boot</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />MySQL</li>
                                
                        </ul>
                    }

                    link={
                        'NULL'
                    }

                    />

                )}

                {props.selectedOption === 'anime' && (

                    <ProjectContentMain section={'Anime Recommender System'} overview={'This is an Anime Recommendation System that utilizes a combination of User-Based Collaborative Filtering, Content Filtering, and Deep Neural Networks (DNN) to provide personalized anime recommendations. '}
                    
                    usecases={
                        <ul>

                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />User-Based Collaborative Filtering</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Content Filtering</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Deep Neural Networks</li>

                        </ul>
                    }
                    
                    impact ={
                        'The Anime Recommendation System offers personalized recommendations, improving user experience and engagement. It also provides a platform for anime enthusiasts to discover new anime based on their preferences and viewing history.'
                    }

                    techs={
                        <ul>
                                
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Python</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Tensorflow</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Sklearn</li>
                                
                        </ul>
                    }

                    link={
                        'https://github.com/Rayan-Ali1083/Anime-Recommendation'
                    }

                    />

                )}

                {props.selectedOption === 'crop' && (

                    <ProjectContentMain section={'Crop Health Detection'} overview={'CropGuard AI-Powered Crop Disease Detection Revolutionize agriculture with CropGuard: an AI solution for rapid, precise disease detection. Achieved 94% accuracy using VGG16.'}
                    
                    usecases={
                        <ul>

                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Crop Disease Detection</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Crop Health Monitoring</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />API available</li>

                        </ul>
                    }

                    impact ={
                        'CropGuard offers rapid, precise disease detection, improving crop health monitoring and maximizing crop yields. It also provides a platform for farmers to make informed decisions and secure global food production.'
                    }

                    techs={
                        <ul>
                                
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Python</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Tensorflow</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Sklearn</li>
                                
                        </ul>
                    }

                    link={
                        'https://github.com/Rayan-Ali1083/Crop-Doc'
                    }

                    />

                )}

                {props.selectedOption === 'iot' && (

                    <ProjectContentMain section={'IOT Cyber Attack Classification'} overview={`The Edge-IIoT dataset has achieved recognition as a top 1% document in Web of Science. The project's objective is to develop a model for predicting attack types using 63 specific features such as packet length, protocol, and time. Achieved 96% accuracy using Random Forest and Hyperparameter Tuning.`}
                    
                    usecases={
                        <ul>

                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Cyber Attack Classification</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Cyber Attack Identification</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />IoT Device Security</li>

                        </ul>
                    }

                    impact ={
                        'The IoT Cyber Attack Classification model offers a way to identify and classify cyber attacks, improving IoT device security and preventing cyber attacks on IoT devices.'
                    }

                    techs={
                        <ul>
                                
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Python</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Tensorflow</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Sklearn</li>
                                
                        </ul>
                    }

                    link={
                        'https://github.com/Rayan-Ali1083/Layer7Defend'
                    }

                    />

                )}

                {props.selectedOption === 'dis' && (

                    <ProjectContentMain section={'Disaster Relief Management System'} overview={'The Disaster Relief Management System is a web application designed to improve the efficiency and effectiveness of disaster response operations and promote collaboration between government bodies and relief organizations. The system is based on a relational database that supports relief work management functionalities.'} 
                    
                    usecases={
                        <ul>

                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Disaster Relief Management</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Relief Work Management</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Collaboration of Goverment and NGOS</li>

                        </ul>
                    }

                    impact ={
                        'Motivation for this project is the current situation in Pakistan. The floods in Pakistan have disrupted the economy and lives of the people affected. The goal of this project is to serve as a monitoring and management system for resources. Resources could be food supplies, medicines and other items. It manages resources of NGOS and gov is the admin'
                    }

                    techs={
                        <ul>
                                
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />React.Js</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Node.js</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />SQL</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Bootstrap</li>
                                
                        </ul>
                    }

                    link={
                        'NULL'
                    }

                    />

                )}

                {props.selectedOption === 'BI' && (

                    <ProjectContentMain section={'Power BI Dashboards'} overview={'This section contains link to all Power BI reports. The reports are based on different datasets and are created using Power BI.'}
                    
                    usecases={
                        <ul>

                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Power BI</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Data Visualization</li>
                            <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Data Analysis</li>

                        </ul>
                    }

                    impact ={
                        'Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.'
                    }

                    techs={
                        <ul>
                                
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Power BI</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Data Cleaning</li>
                                <li className='flex items-center gap-2 hover:-translate-y-[2px] duration-100'><SVGComp />Exploratory Data Analysis</li>
                                
                        </ul>
                    }

                    link={
                        'https://github.com/Rayan-Ali1083/Power-BI'
                    }                    
                    />

                )}

            </div>
        </>
    )
}

export default ProjectContent