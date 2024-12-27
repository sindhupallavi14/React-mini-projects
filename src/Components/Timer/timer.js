import React, { useEffect, useRef, useState } from 'react'
import "./timer.css"

export default function Timer({initialTime,onTimeFinish}) {

    const [time,settime]=useState(initialTime);
    const [isRunning,setIsRunning]=useState(false);
    const intervalReference=useRef();

    useEffect(()=>
    {
        if(isRunning)
        {
           //interval
            intervalReference.current=setInterval(()=>
            {
               settime((prevTime)=>{
                    if(prevTime===0)
                    {
                      clearInterval(intervalReference.current);
                      setIsRunning(false)
                        onTimeFinish();
                        return 0;
                    
                    }
                    else{
                        return prevTime-1;
                    }
               })
            },1000)
        }
        else{
            clearInterval(intervalReference.current);
        }

        return ()=>{
            clearInterval(intervalReference.current)
        }
    },[isRunning,onTimeFinish])

    const min=Math.floor(time/60);
    const sec=time % 60;

    function handleReset()
    {
       settime(initialTime)
       setIsRunning(false);
    }

    function handlePauseandPlay()
    {
       setIsRunning((prev)=>(!prev))
    }
    function handleStart()
    {
        settime(initialTime);
        setIsRunning(true);
    }


  return (
    <div className='timer-con'>
        <div className='timer'>
           <p>{String(min).padStart(2,'0')}:{String(sec).padStart(2,'0')}</p>
        </div>
        <div className='timer-btns'>
            <button onClick={()=>handleReset()}>Reset</button>
            <button onClick={handlePauseandPlay}>{isRunning ? "pause" :"play"}</button>
            <button onClick={()=>handleStart()} disabled={time !== initialTime}>Start</button>
        </div>
    </div>
  )
}
