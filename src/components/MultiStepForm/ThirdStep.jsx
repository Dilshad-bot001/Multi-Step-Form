import React from 'react'
import Scale from '../../assets/images/ThirdStep.png'

const ThirdStep = () => {
  return (
    <div className='mt-10 flex flex-col items-center justify-between sm:mt-20 sm:flex-row'>
      <img src={Scale} alt="scale" className='w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] xl:w-[600px] xl:h-[600px]' />
      <div className='mt-10 sm:ml-20 xl:ml-36 sm:w-[800px]'>
        <h2 className='text-2xl text-center font-bold sm:text-3xl sm:text-left xl:text-5xl'>You're in the right place</h2>
        <h4 className='mt-5 text-sm text-justify text-gray-700 sm:text-2xl sm:mt-8 sm:leading-10'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</h4>
      </div>
    </div>
  )
}

export default ThirdStep