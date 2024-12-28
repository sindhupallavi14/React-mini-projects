import React, { useState } from 'react'
import StepProgress from './Step-progress'

export default function StepProgressTest() {
   const [crntbar,setCrntBar]=useState(1)
  return (
    <div className='step-progress-con'>
        <h2>Step Progress Bar</h2>
        <StepProgress totbars={5} crntbar={crntbar} setCrntBar={setCrntBar}/>
    </div>
  )
}
