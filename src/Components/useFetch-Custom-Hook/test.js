import { useFetch } from "./useFetch"

export default function CustomUseFetch()
{
    const {data,err,loading}=useFetch({url:"https://dummyjson.com/products?limit=100",options:{}})
    
    if(loading)
    {
        return(<p>loading...............!</p>)
    }
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Use Fetch Hook</h1>
            {
                 data && data.products && data.products.length ?
                 data.products.map((item,idx)=><p>{item.title}</p>)
                 :null
            }
        </div>
    )
}