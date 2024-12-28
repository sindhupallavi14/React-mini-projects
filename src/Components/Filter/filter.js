import React, { useEffect, useState } from 'react'
import './filter.css'

export default function Filter(){

    const [loading,setLoading]=useState(false);
    const [products,setProducts]=useState([]);
    const [crntSelectedCategory,setCrntSelectedCategory]=useState("");
    const [filterItems,setFilterItems]=useState([])

    async function fetchData()
    {
        setLoading(true);
        try{
            const response=await fetch('https://dummyjson.com/products',{method:'GET'});
            const result=await response.json();

            if(result && result.products && result.products.length)
            {
                setLoading(false)
                setProducts(result.products)
            }
        }
        catch(e)
        {
            setLoading(false)
            console.log(e);   
        }
    }


    useEffect(()=>{
       fetchData()
    },[])

    useEffect(()=>{
        filteritems();
    },[crntSelectedCategory,products])
    
    
    if(loading)
        {
            return(<h1>Fetching data Please Wait.......!!!</h1>)
        }

    const filtercategories = products.length?[...new Set(products.map((item)=>item.category))]:[];
    // console.log(filtercategories);

    function handleCategory(getname)
    {
        setCrntSelectedCategory(crntSelectedCategory===getname ?"":getname)
    }

    function filteritems(){
        if(products.length){
            const temp = [...products];
            if(crntSelectedCategory === ""){
                setFilterItems(temp);
            }
            else{
                setFilterItems(temp.filter((item,idx)=>item.category.toLowerCase() === crntSelectedCategory.toLowerCase()));
            }
        }
    }

    
  return (
    <div className='filter-con'>
        <h1>Filter Products by category</h1>
        <div className='categories'>
           {filtercategories && filtercategories.length ?
           filtercategories.map((item,idx)=>(<>
            <button  onClick={()=>handleCategory(item)}>{item}</button>
           </>)):null}
        </div>
       <ul className="list-of-products ">
           
            {filterItems.length?
                filterItems.map((item,idx)=>{
                    return(
                        <li key={idx} className="item-list">
                            <p>{item.title}</p>
                            <button>{item.category}</button>
                        </li>
                    )
                }):
            null}
        </ul>
    </div>
  )
}
