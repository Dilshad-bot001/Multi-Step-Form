import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { nextPage, prevPage } from '../../actions'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import FifthStep from './FifthStep'
import SixthStep from './SixthStep'
import Left from '../../assets/icons/left.png'

const Form = () => {

  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state)

  const PageDisplay = () => {
    if (page === 1) {
      return <FirstStep setSelected={setSelected} />;
    } else if (page === 2) {
      return <SecondStep setSelected={setSelected} />;
    } else if (page === 3) {
      return <ThirdStep />;
    } else if (page === 4) {
      return <FourthStep />;
    } else if (page === 5) {
      return <FifthStep />;
    } else {
      return <SixthStep />;
    }
  };

  const handleClick = () => {
    if(selected){
      dispatch(nextPage())
      if(page === 1){
        setSelected(false)
      }
    }
  }

  useEffect(() => {
    setPage(pageNumber)
  }, [pageNumber])

  return (
    <div className='mx-5 mt-10 flex flex-col items-center sm:mx-80 sm:mt-20'>
      <div className='min-w-full flex items-center' >
        <div onClick={() => dispatch(prevPage())} className={`${page === 1 ? 'hidden' : page === 6 ? 'hidden' : ''}`}>
          <img src={Left} alt="left" className='w-6 h-6 sm:w-[36px] sm:h-[36px] cursor-pointer' />
        </div>
        <div className={`w-full h-[6px] bg-gray-200 rounded-lg sm:h-2 ${page === 6 ? 'hidden' : 'block'}`}>
          <div style={{ width: page === 1 ? "20%" : page === 2 ? "40%" : page === 3 ? "60%" : page === 4 ? "80%" : "100%" }} className='h-[6px] bg-blue-700 rounded-lg sm:h-2' />
        </div>
      </div>
      {PageDisplay()}
      <button className={`text-sm w-32 h-10 mt-8 flex justify-center items-center rounded-xl bg-black text-white sm:text-2xl sm:w-56 sm:h-16 sm:mt-20 ${selected ? 'bg-black' : 'bg-gray-400'} ${page === 6 ? 'hidden' : 'block'}`} disabled={!selected} onClick={handleClick}>Continue</button>
    </div>
  )
}

export default Form