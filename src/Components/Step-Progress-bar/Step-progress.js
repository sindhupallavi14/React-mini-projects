import React, { useState } from "react";
import "./step-progress.css"
export default function StepProgress({ totbars ,crntbar,setCrntBar}) {

  function generateNoOfBars() {
    const bars = [];
    for (let i = 1; i <= totbars; i++) {
      bars.push(i);
    }
    return bars;
  }

  function handleNextBar()
  {
     if(crntbar<totbars)
     {
      setCrntBar(crntbar+1)
     }
  }
  function handlePrevBar()
  {
    if(crntbar>1)
      {
       setCrntBar(crntbar-1)
      }
  }
  return (
    <div>
      {generateNoOfBars().map((bar, idx) => (
        <button  className={`step-btn ${idx < crntbar ? 'step-btn-active' : ''}`}key={idx}>{`Step${bar}`}</button>
      ))}
      <div className="nav-btns">
        <button className="prev-btn" onClick={()=>handlePrevBar()} disabled={crntbar === 1}>Prev Step</button>
        <button className="next-btn" onClick={()=>handleNextBar()} disabled={crntbar === totbars}>Next Step</button>
      </div>
    </div>
  );
}
