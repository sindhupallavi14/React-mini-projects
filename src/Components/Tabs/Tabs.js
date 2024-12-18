import { useState } from "react";
import "./Tabs.css"
export function Tabs({tabscontent,onChange})
{
    const [crnttabidx,setCrnttabidx]=useState(0);
 
    function handleOnclick(getCrntidx)
    {
       setCrnttabidx(getCrntidx);
       onChange(getCrntidx);
    }
   return(
    <div className="wrapper">
        <div className="heading">
           {tabscontent.map((tabItem,idx)=>
                (
                    <div onClick={()=>handleOnclick(idx)} key={tabItem.label}>
                       <span className={crnttabidx === idx ? "active" : "label"}>{tabItem.label}</span>
                    </div>
                ))
           }
        </div>
        <div className="content">
            {tabscontent[crnttabidx] && tabscontent[crnttabidx].content}
        </div>
    </div>
   )
} 