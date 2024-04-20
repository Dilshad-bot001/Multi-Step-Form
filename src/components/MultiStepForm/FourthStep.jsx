import React, { useState } from 'react'
import MathSelectionBox from '../MathSelectionBox'

const FourthStep = () => {

  const [optionOne, setOptionOne] = useState(false)
  const [optionSecond, setOptionSecond] = useState(false)
  const [optionThird, setOptionThird] = useState(false)
  const [optionFourth, setOptionFourth] = useState(false)

  return (
    <div className='mt-8 flex items-center justify-center flex-col sm:mt-16'>
      <h2 className='text-2xl text-center font-bold sm:text-5xl'>What is your math comfort level?</h2>
      <h4 className='text-xs mt-2 text-center text-gray-500 sm:mt-10 sm:text-2xl'>Choose the highest level you feel confident in - you can always adjust later.</h4>
      <div className='mt-10 grid grid-cols-2 gap-2 sm:mt-20 sm:flex-row sm:gap-5'>
        <MathSelectionBox formula={"5 x 1/2 = ?"} title={"Arithmetic"} subtitle={'Introductory'} selected={optionOne} setSelected={setOptionOne} />
        <MathSelectionBox formula={"3x + 5 = 4"} title={"Basic Algebra"} subtitle={'Foundational'} selected={optionSecond} setSelected={setOptionSecond} />
        <MathSelectionBox formula={"x = (-b ± √(b²-4ac))/2a"} title={"Intermediate Algebra"} subtitle={'Intermediate'} selected={optionThird} setSelected={setOptionThird} />
        <MathSelectionBox formula={"∫ 1 dx = x + C"} title={"Calculus"} subtitle={'Advanced'} selected={optionFourth} setSelected={setOptionFourth} />
      </div>
    </div>
  )
}

export default FourthStep