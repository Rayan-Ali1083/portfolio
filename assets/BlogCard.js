import React from 'react'
import SingleCard from './SingleCard'
import ObjectDetection from './ObjectDetection.gif'
import CNN from './cnn.gif'
import Genetic from './genetic.gif'
import IntroGenetic from './IntroGenetic.gif'

const ProjectsCard = () => {

  return (
    <>

      <section className='w-11/12'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <a target='blank' href='https://medium.com/@Data_Aficionado_1083/object-detection-sliding-window-r-cnn-fast-r-cnn-faster-r-cnn-f47c7dbe003d' >
            
            <SingleCard blogname="Object Detection" techused="Object detection is a fundamental computer vision technique used to identify and locate objects within images or videos. Early object detection algorithms, such as Sliding Window, R-CNN, Fast R-CNN, and Faster R-CNN, have paved the way for more advanced approaches. " img={ObjectDetection} />
            
            </a>

          <a target='blank' href='https://medium.com/@Data_Aficionado_1083/object-detection-sliding-window-r-cnn-fast-r-cnn-faster-r-cnn-f47c7dbe003d' >
            
            <SingleCard blogname="CNN Working" techused="Convolutional neural networks (CNNs) are a type of deep learning algorithm that are used for image recognition. CNNs work by learning to identify patterns in images." img={CNN} />
          
          </a>

          <a target='blank' href='https://medium.com/@Data_Aficionado_1083/genetic-algorithm-with-python-made-easy-code-easy-explanation-87c3ad6ca152' >
            
            <SingleCard blogname="Genetic Algorithm Example" techused="Solve the equation: 0 = (1*A + 2*B + 3*C + 4*D ) - 30 using genetic algorithm in Python to find the values of A, B, C, and D"img={Genetic} />
          
          </a>


          <a target='blank' href='https://medium.com/@Data_Aficionado_1083/genetic-algorithms-optimizing-success-through-evolutionary-computing-f4e7d452084f' >
            
            <SingleCard blogname="Introduction to Genetic Algorithm" techused="Genetic Algorithm is a 5 step algorithm which simulates the process of evolution to find optimal or near-optimal solutions for complex problems." img={IntroGenetic} /></a>




        </div>

      </section>

    </>
  )
}

export default ProjectsCard