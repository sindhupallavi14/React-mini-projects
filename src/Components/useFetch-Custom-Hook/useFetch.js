import { useEffect, useState } from "react";

export function useFetch({url,options={}})
{
    const [data,setData]=useState([]);
    const [err,setErr]=useState(null);
    const [loading,setLoading]=useState(false);
    

    async function fetchData()
    {
        setLoading(true);
      try{
        const response=await fetch(url,{...options})
        if(!response.ok) throw new Error(response.statusText)
       
        const res=await response.json();
        setData(res)
        setErr(null)
        setLoading(false)
      }
      catch(err)
      {
          setErr(err)
      }
    }

    useEffect(()=>
    {
        fetchData();
    },[url])

    return {data,err,loading};
}