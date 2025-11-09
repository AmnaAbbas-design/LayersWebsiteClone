import React, { useEffect, useState } from 'react'
import Array from './array';
import Pp from './Pp';
function Tryfuction({select}) {
  
    //const userarray=[
        // {
        //    name:"amna",
        //    class:"second compl",
        //    age:20,
        //    id:1,
        // },
        //  {
        //    name:"laraib",
        //    class:"10",
        //    age:3,
        //     id:2,
        // },
        //  {
        //    name:"ayersha",
        //    class:"four compl",
        //    age:21,
        //     id:3,
        // },
    //]
//     let[time,setTime]=useState(0)
//   useEffect(()=>{
// setInterval(()=>{
// setTime(new Date().toLocaleTimeString())
//     }, 1000);
//},[])

  return (
    <>

<h1 style={{color:select,backgroundColor:'white',border:'solid red'}} >{time}</h1>

  {/* {
    userarray.map((items)=>(
     <div key={items.id}>
  <Pp data={items}/>
   </div>
    ))
  } */}

      

   
{/*     
 <Array arr={arr}/>
<Pp {...name}/> */}
{/* <Pp>

    <h1>i am h1 how do you do.....there once was the ship that put to sea the name of the shil was a billy of tea </h1>
</Pp> */}




    </>
  )
}

export default Tryfuction