import { createContext, useContext, useEffect, useState } from "react";
import { featureFlagsDataServiceCall } from "../data";

export const Featureflagcontext = createContext();

export default function Customfeatureflag({children}){
    const [loading,Setloading] = useState(false);   
    const [enableComponents,setEnableComponents] = useState({});
    async function fetchcomponent(){
        try{
            Setloading(true);
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            
            setEnableComponents(response);
            Setloading(false);
        }
       catch(err)
       {
         throw new Error(err)
       }
    }

    useEffect(()=>{
        // const response = await fetchcomponentdataserver();
        fetchcomponent();
    },[])

    return(
        <>
         <Featureflagcontext.Provider value={{loading,enableComponents}}>
            {children}
         </Featureflagcontext.Provider>
        </>
    )
}