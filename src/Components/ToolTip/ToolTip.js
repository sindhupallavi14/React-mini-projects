import React, { useState } from 'react'
import "./ToolTip.css"

export default function ToolTip() {
  const [isVisible,setIsVisible]=useState(false);
  return (
    <div className='tooltip-con'>
      <h3>Tool-Tip</h3>
       <div className='tool-tip' onMouseEnter={()=>{setIsVisible(true)}} onMouseLeave={()=>setIsVisible(false)}>
        <p>Hover me</p>
        {isVisible ? <h4 className='tooltip'>Hello World..!!</h4> :null}
       </div>
    </div>
  )
}
