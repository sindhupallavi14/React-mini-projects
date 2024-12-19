import { act, useEffect, useState } from "react";

export default function useLocalStorage({key,defaultMode})
{
    // getting from local storage
    const [val,setVal]=useState(()=>
    {
        let temp;
        try{
            temp=JSON.parse(localStorage.getItem(key) || String(defaultMode));
        }
        catch(err)
        {
            console.log(err);
            temp=defaultMode;
        }
        return temp;
    })

    // setting the local storage
    useEffect(()=>{
       
        localStorage.setItem(key,JSON.stringify(val));
    },[key,val])

    return [val,setVal]
}