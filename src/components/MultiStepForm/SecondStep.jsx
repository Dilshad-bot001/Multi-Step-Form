import React, { useState, useEffect } from 'react'
import SelectionBox from '../SelectionBox'
import Earth from '../../assets/icons/earth.png'
import Eyes from '../../assets/icons/eyes.png'
import Target from '../../assets/icons/target.png'
import Maths from '../../assets/icons/maths.png'
import Graph from '../../assets/icons/graph.png'

const SecondStep = ({ setSelected }) => {

  const [optionOne, setOptionOne] = useState(false)
  const [optionSecond, setOptionSecond] = useState(false)
  const [optionThird, setOptionThird] = useState(false)
  const [optionFourth, setOptionFourth] = useState(false)
  const [optionFifth, setOptionFifth] = useState(false)

  useEffect(() => {
    if(optionOne || optionSecond || optionThird || optionFourth || optionFifth){
      setSelected(true)
    }
    console.log('in');
  }, [
    optionOne,
    optionSecond,
    optionThird,
    optionFourth,
    optionFifth
  ])

  return (
    <div className='mt-8 flex items-center justify-center flex-col sm:mt-16'>
      <h2 className='text-2xl text-center font-bold sm:text-5xl'>Which are you most interested in?</h2>
      <h4 className='text-xs mt-2 text-center text-gray-500 sm:mt-10 sm:text-2xl'>Choose just one. This will help us get you started (but won't limit your experience).</h4>
      <div className='mt-10 flex flex-col gap-5 sm:mt-20'>
        <SelectionBox icon={Graph} title={"Learning specific skills to advance my career"} selected={optionOne} setSelected={setOptionOne} />
        <SelectionBox icon={Earth} title={"Exploring new topics I'm interested in"} selected={optionSecond} setSelected={setOptionSecond} />
        <SelectionBox icon={Maths} title={"Refreshing my math foundations"} selected={optionThird} setSelected={setOptionThird} />
        <SelectionBox icon={Target} title={"Exercising my brain to stay sharp"} selected={optionFourth} setSelected={setOptionFourth} />
        <SelectionBox icon={Eyes} title={"Something else"} selected={optionFifth} setSelected={setOptionFifth} />
      </div>
    </div>
  )
}

export default SecondStep