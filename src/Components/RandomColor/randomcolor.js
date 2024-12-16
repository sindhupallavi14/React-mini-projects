import { useEffect, useState } from "react";
import "./randomcolor.css";
export function RandomColor()
{

    const [typeOfColor,setTypeOfColor]=useState('hex');
    const [color,setColor]=useState("black");

    function randomColorUtility(length)
    {
       return Math.floor(Math.random()*length);
    }

    function handleCreateHexColor()
    {
        let hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] ;
        let hexColor="#";
        for(let i=0;i<6;i++)
        {
            hexColor+=hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor)
    }

    function handleCreateRgbColor()
    {
        const r=randomColorUtility(256);
        const g=randomColorUtility(256);
        const b=randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
      if(typeOfColor==='rgb') handleCreateRgbColor()
      else handleCreateHexColor()
    },[typeOfColor])
    
   return(
        <div className="container" style={{
            background:color
        }} >
            <button onClick={()=>setTypeOfColor('hex')}>Generate Hex Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor==='hex'?handleCreateHexColor : handleCreateRgbColor}>Generate Random Color</button>
            <h2>{typeOfColor==='rgb'?"RGB Color":'HEX Color'}</h2>
            <h1>{color}</h1>
        </div>
   )
}