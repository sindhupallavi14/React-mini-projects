import React, { useEffect, useState } from 'react'
import "./quote.css"

export default function Quote() {

    const [loading,setLoading]=useState(false);
    const [quote,setQuote]=useState([]);

    async function fetchData() {
        setLoading(true)
        try{
          const response =await fetch("https://dummyjson.com/quotes/random?",{
                method:"GET",
            })
          const result=await response.json();

          if(result && result.quote)
          {
            setLoading(false)
            setQuote(result)
          }
          
        }
        catch(e)
        {
            setLoading(false)
            console.log(e);          
        }
    }

    useEffect(()=>{
       fetchData();
    },[])

    if(loading)
        {
            return(<h1>loading.........!!!!</h1>)
        }
       
        
    
  return (
    <div className='quote-gen-con'>
        <h1>Random Quote Generator</h1>
        <div className='quote-con'>   
            <p>{quote.quote}</p>
            <p>-{quote.author}</p>
        </div>
        <button onClick={fetchData}>Generate</button>
    </div>
  )
}
