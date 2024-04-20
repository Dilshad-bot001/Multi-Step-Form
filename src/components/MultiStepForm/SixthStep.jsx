import React from 'react';
import CircularProgressBar from '../CircularProgressBar';

const SixthStep = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-20'>
      <CircularProgressBar />
      <h2 className='text-xl font-bold text-center sm:text-5xl'>Finding learning path recommendations for you based on <br className='hidden sm:block'/> your responses</h2>
    </div>
  )
}

export default SixthStep