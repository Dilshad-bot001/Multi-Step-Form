import React from 'react'

import Math from '../assets/images/Math.png'

const Box = ({ title }) => {
  return (
    <div className='w-[350px] h-[180px] flex items-center border-[1px] border-gray-200 rounded-lg p-4 sm:p-8 sm:w-[650px] sm:h-[300px]'>
      <h3 className='text-sm text-black sm:text-2xl'><span className='font-semibold'>{title}</span> Build your foundational skills in algebra, geometry, and probability</h3>
      <img src={Math} alt="math" className='w-[150px] h-[150] sm:w-[250px] sm:h-[250]' />
    </div>
  )
}

const Home = () => {
  return (
    <div className='mt-32 flex items-center justify-center flex-col sm:mt-60'>
      <h2 className='text-2xl text-center font-bold sm:text-5xl'>Learning paths based on your answers</h2>
      <h4 className='text-sm mt-2 text-gray-500 sm:mt-10 sm:text-2xl'>Choose one to get startde. You can switch anytime.</h4>
      <div className='mt-20 flex flex-col gap-5 sm:flex-row'>
        <Box title={'Foundational Math'} />
        {/* <div className='w-24 h-8 left-[150px] text-[8px] top-[285px] flex justify-center items-center rounded-full bg-yellow-500 text-black font-bold absolute sm:w-44 sm:h-12 sm:text-lg sm:left-[860px] sm:top-[380px]'>MOST POPULAR</div> */}
        <Box title={'Mathematical Thinking'} />
      </div>
    </div>
  )
}

export default Home