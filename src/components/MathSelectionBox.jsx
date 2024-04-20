import React from 'react'

const MathSelectionBox = ({ formula, title, subtitle, selected, setSelected }) => {

  const handleClick = () => {
    setSelected(!selected)
  }

  return (
    <div className={`w-[160px] h-[200px] flex flex-col items-center justify-between border-[1px] border-gray-200 rounded-lg p-8 hover:border-yellow-400 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:w-[400px] sm:h-[300px] ${selected ? 'border-yellow-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)' : 'border-gray-200'}`} onClick={handleClick}>
      <h4 className='text-xl text-center text-gray-800 italic font-light sm:text-5xl'>{formula}</h4>
      <div>
        <h4 className='text-sm text-center text-gray-800 sm:text-2xl sm:mt-10'>{title}</h4>
        <h2 className='text-gray-400 text-xl font-normal sm:text-3xl sm:mt-1'>{subtitle}</h2>
      </div>
    </div>
  )
}

export default MathSelectionBox