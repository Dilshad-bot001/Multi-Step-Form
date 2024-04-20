import React, { useEffect, useState } from 'react'
import SelectionBox from '../SelectionBox'
import Student from '../../assets/icons/student.png'
import Employer from '../../assets/icons/employer.png'
import Parent from '../../assets/icons/parents.png'
import Other from '../../assets/icons/guy.png'
import Old from '../../assets/icons/old.png'
import Teacher from '../../assets/icons/teacher.png'

const FirstStep = ({ setSelected }) => {

  const [optionOne, setOptionOne] = useState(false)
  const [optionSecond, setOptionSecond] = useState(false)
  const [optionThird, setOptionThird] = useState(false)
  const [optionFourth, setOptionFourth] = useState(false)
  const [optionFifth, setOptionFifth] = useState(false)
  const [optionSixth, setOptionSixth] = useState(false)

  
  useEffect(() => {
    if(optionOne || optionSecond || optionThird || optionFourth || optionFifth || optionSixth){
      setSelected(true)
    }
    console.log('in');
  }, [
    optionOne,
    optionSecond,
    optionThird,
    optionFourth,
    optionFifth,
    optionSixth
  ])
  
  
  return (
    <div className='mt-8 flex items-center justify-center flex-col sm:mt-16'>
      <h2 className='text-2xl font-bold sm:text-5xl'>Which describes you best?</h2>
      <h4 className='text-xs mt-2 text-gray-500 sm:mt-10 sm:text-2xl'>This will help us personalize your experience.</h4>
      <div className='mt-10 flex flex-col gap-5 sm:mt-20'>
        <SelectionBox icon={Student} title={"Student"} subtext={"or soon to be enrolled"} selected={optionOne} setSelected={setOptionOne} />
        <SelectionBox icon={Employer} title={"Professional"} subtext={"pursuing a career"} selected={optionSecond} setSelected={setOptionSecond} />
        <SelectionBox icon={Parent} title={"Parent"} subtext={"of a school-age chile"} selected={optionThird} setSelected={setOptionThird} />
        <SelectionBox icon={Old} title={"Lifelong learner"} selected={optionFourth} setSelected={setOptionFourth} />
        <SelectionBox icon={Teacher} title={"Teacher"} selected={optionFifth} setSelected={setOptionFifth} />
        <SelectionBox icon={Other} title={"Other"} selected={optionSixth} setSelected={setOptionSixth} />
      </div>      
    </div>
  )
}

export default FirstStep