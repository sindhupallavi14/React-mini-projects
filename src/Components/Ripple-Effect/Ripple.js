import React, { useEffect, useState } from 'react'
import "./Ripple.css"

export default function Ripple() {
    const [isRipple,setIsRipple]=useState(false);
    const [coordinates,setCoordinates]=useState({x:-1,y:-1})

    function handleRippleEffect(e)
    {
        // console.log(e.target.getBoundingClientRect(),e.clientX,e.clientY);
        const rect=e.target.getBoundingClientRect();
        setCoordinates({
            x:e.clientX-rect.left,
            y:e.clientY-rect.top
        })
    }

    useEffect(()=>{
        if(coordinates.x!==-1 && coordinates.y!==-1 )
        {
            setIsRipple(true)
            setTimeout(()=>setIsRipple(false),400);
        }
        else{
            setIsRipple(false);
        }
    },[coordinates])

    useEffect(()=>{
          if(!isRipple)
          {
            setCoordinates({x:-1,y:-1})
          }
    },[isRipple])

    console.log(coordinates,isRipple);
  return (
    <div className='ripple-con'>
        <h2>Ripple Effect</h2>
        <button onClick={(e)=>handleRippleEffect(e)} className='ripple-btn'>
            {isRipple ? 
            <span className='inner-span' style={{left:coordinates.x,top:coordinates.y}}></span>
            :null}
            Click here to see Ripple Effect</button>
    </div>
  )
}
