import { useEffect, useState } from "react"
import { Usercard } from "./github-usercard";
import "./github-finder.css"

export function GithubProfileFinder()
{
    const [userName,setUserName]=useState("sindhupallavi14");
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(true);

    function handleSubmit()
    {
        fetchGithubProfile()
    }

    async function fetchGithubProfile()
    {
        setLoading(true)
        const res=await fetch(`https://api.github.com/users/${userName}`)

        const data=await res.json();
        console.log(data);
        if(data)
        {
            setUserData(data)
           setLoading(false)
           setUserName("")
        }
    }

    useEffect(()=>
    {
      fetchGithubProfile();
    },[]);

    if(loading)
    {
        return <h1>Loading...........</h1>
    }

    return(
        <div className="github-profile-con">
            <div className="input-con">
                <input name="github-username" type="text" 
                placeholder="Enter Github Username"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />
                <button onClick={()=>handleSubmit()}>Get User Details</button>
            </div>
            {
                userData !==null ?<Usercard user={userData}/>:null
            }
        </div>
    )
}