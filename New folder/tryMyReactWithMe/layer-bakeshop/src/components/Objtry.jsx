import React, { useState } from 'react'
import './ob.css'
function Objtry() {
    const[data,setData]=useState([
        {
       name:"chocolate",
       price:2500,
        },
        {
         name:"red velvet",
         price:5000,
        },
    ]);
  return (
    <>
    <h1>playing with objects</h1>
   {
    data.map((ele)=>(
        <h2>{ele.name}</h2>
    ))
   }
    </>
  )
}

export default Objtry