import React from 'react'

const SelectionBox = ({ icon, title, subtext = '', selected, setSelected }) => {

  const handleClick = () => {
    setSelected(!selected)
  }
  
  return (
    <div className={`w-[300px] h-[25px] flex items-center border-[1px] rounded-lg p-8 hover:border-yellow-400 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:w-[1000px] sm:h-[100px] ${selected ? 'border-yellow-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)' : 'border-gray-200'}`} onClick={handleClick}>
      <img src={icon} alt="student" className='w-10 h-10 sm:w-16 sm:h-16' />
      <h4 className='text-sm ml-6 text-gray-500 sm:ml-12 sm:text-2xl'><span className='text-black'>{title}</span> {subtext}</h4>
    </div>
  )
}

export default SelectionBox