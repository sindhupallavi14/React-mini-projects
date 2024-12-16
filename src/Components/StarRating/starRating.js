import { FaStar } from "react-icons/fa";
import "./starRating.css"
import { useState } from "react";

export  function StarRating({noOfStars=5})
{
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    function handleClick(getcrntidx)
    {
         setRating(getcrntidx);
         
    }

    function handleMouseMove(getcrntidx)
    {
        setHover(getcrntidx);
    }

    function handleMouseLeave()
    {
       setHover(rating);
    }

   return(
    <div className="star-rating">
           {
             [...Array(noOfStars)].map((_,idx)=>
             {
                 idx+=1
                 return <FaStar
                 key={idx}
                 className={idx<=(hover || rating) ? 'active' :'inactive'}
                 onClick={()=>handleClick(idx)}
                 onMouseMove={()=>handleMouseMove(idx)}
                 onMouseLeave={()=>handleMouseLeave()}
                 size={60}
                 />
             }
            )
           }
    </div>
   )
}