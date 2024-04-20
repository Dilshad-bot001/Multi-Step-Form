import React from 'react'
import Cheer from '../../assets/images/cheer.png'
import Star from '../../assets/icons/star.png'

const StarImage = () => {
  return (
    <img src={Star} alt="star" className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] xl:w-[50px] xl:h-[50px]' />
  )
}

const FifthStep = () => {
  return (
    <div className='mt-10 flex flex-col items-center justify-between sm:mt-20 sm:flex-row'>
      <img src={Cheer} alt="scale" className='w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] xl:w-[600px] xl:h-[600px]' />
      <div className='mt-10 sm:ml-36 sm:w-[800px]'>
        <h2 className='text-2xl text-center font-bold sm:text-3xl sm:text-left xl:text-5xl'>You're on your way</h2>
        <div className='mt-8 flex gap-3 sm:mt-10 xl:mt-16'>
          <StarImage />
          <StarImage />
          <StarImage />
          <StarImage />
          <StarImage />
        </div>
        <h4 className='mt-3 text-sm text-justify text-gray-700 sm:text-lg sm:mt-4 xl:leading-10 xl:text-2xl xl:mt-8'>"Through its engaging and well-structured cources, Brilliant has taught me mathematical concepts that I prviously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</h4>
        <h3 className='mt-5 text-xl text-left text-gray-700 italic sm:mt-8 sm:text-3xl xl:mt-16'>- Jacob S.</h3>
      </div>
    </div>
  )
}

export default FifthStep