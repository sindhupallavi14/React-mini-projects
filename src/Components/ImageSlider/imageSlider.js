import { useEffect } from "react";
import { useState } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import "./slider.css"
export function ImageSlider()
{
  
    const [images,setImages] = useState([]);
    const [currentSlide,setcurrentSlide] = useState(0);
    const [Loading,setloading] = useState(false);
    const [error,seterror] = useState(null);
    function handlecrntSlide(id){
        setcurrentSlide(id);
    }
    function handleNext(){
        setcurrentSlide(currentSlide === images.length-1?0:currentSlide+1);
    }
    function handlePrev(){
        setcurrentSlide(currentSlide === 0?images.length-1:currentSlide-1);
    }  
   
    useEffect(()=>{
      async function fetchImages(geturl){
          try{
              setloading(true);
              const response = await fetch(`${geturl}?page=${1}&limit=${5}`);
              if(!response.ok){
                  throw new Error
              }
              const data = await response.json();
            //  if(data) 
            //   {
                setloading(false);
                  setImages(data);
                // }
              }
              catch(e){
                  seterror(e.message);
              }
          }
        //   fetchImages("https://picsum.photos/v2/list?page=1&limit%20=5");
        fetchImages("https://picsum.photos/v2/list?page=1&limit%20=5")
      },[])

      if(Loading){
        return<h1>Loading........!</h1>
      }
      if(error!== null){
          return <h1>{error}</h1>
      }

   return(
   <div className="con">
      <div className="img-container">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrev}/>
            {images.map((item,idx)=>{
                    return(<img key={idx} alt ={item.author} src={item.download_url} 
                    className={currentSlide === idx?"current-image":"hidden-current-image"}
                />)
            })}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
      <span className="circle-indicator">
          {images.map((_,idx)=>(
              <button key={idx} className={currentSlide === idx
                  ?"current-indicator":
                  "current-indicator inactive-indicator"}
                  onClick={()=>handlecrntSlide(idx)}></button>
          ))}

      </span>
    </div>
   </div>
   )
}