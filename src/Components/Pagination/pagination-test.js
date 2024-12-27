import React, { useState } from 'react'
import Pagination from './pagination'
import "./pagination.css"

export default function Paginationtest() {
    const dummyData=Array.from({length:100},(_,idx)=>({
        id:idx+1,
        name:`product ${idx+1}`
    }))
    console.log(dummyData);

    const itemsPerPage=10;
    const [crntPage,setCrntPage]=useState(1);
    const lastindex = crntPage*itemsPerPage;
    const firstindex = lastindex-itemsPerPage;
    const currentdata = dummyData.slice(firstindex,lastindex);
    console.log(currentdata,firstindex,lastindex);
     
    function onPageChange(num){
        setCrntPage(num);
    }

  return (
    <div className='page-con'>
        <h1>Pagination</h1>
        <ul className='list-items'>
            {
                currentdata.map((item,idx)=>
                (
                    <li key={idx} className='page-item'>{item.name}</li>
                ))
            }
        </ul>
        <Pagination onPageChange={onPageChange} crntPage={crntPage} totPages={Math.ceil(dummyData.length/itemsPerPage)}/>
    </div>
  )
}
