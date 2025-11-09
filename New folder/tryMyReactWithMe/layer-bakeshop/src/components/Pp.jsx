import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Tryfuction from './Tryfuction';
import './ob.css';
function Pp() {

    
//    let[input,setInput]=useState(" ")
//   let [err,setErr]=useState("")
//     function handlein(e){
     
// setInput(e.target.value)
// if(setInput.length>5){
//     console.log("amna aeeoe aa gya hy congratulaTION");
    
// }
    
      
//   function handlerror(le){
//     console.log(le+"kkkkk");
    
//   if(le.length<3)
//   console.log("amna kia kr rhi ho");
  
//   }
// function handlesubmit(e){
//     e.preventDefault()
//      if(input.length<5)
//      {
//   console.log("amna kia kr rhi ho");
// setErr("amna ap ny error phank diya hy")
//      }
//      else{
//         setErr(" ")
//      }
// }  
// let [first,setfirst] = useState("female ") 
// let[change,setChange]=useState("default")


// let [select,setSeclect]=useState("red")
// function handless(e){
// setSeclect(e.target.value)
// console.log(e.target.value+"i am ");

// function loader(){
// console.log("loading.....");
// }

//  let lo=true;
// useEffect(()=>{
// loader()
// lo=true;
// })
let stylee={
  display:'flex',
  color:'black',
  backgroundColor:'pink',
  alignItems:'centre',
  justifyContent:'centre',
  listStyle:'none',
  height:'100px',
  width:'100%',
}

// }
return(
  <>
   {/* {
   lo ? <h1 style={{width:'100%',height:'100%',color:'red',fontFamily:'sans-serif',fontSize:'90px',backgroundColor:'pink',transitionDelay:'20sec',transform:'revert-layer'}}>loading......</h1>:null
   }
   <h1>i am h1 heading  O&nbsp;</h1> */}

  {/* <select name="" id="" onChange={handless} value={select}>
    <option value="red">red</option>
    <option value="blue">blue</option>
  </select>
  <Tryfuction select={select}/> */}
   {/* <div style={{border:"solid red"}}>
   <h1>name is :{data.name}</h1>
    <h1>Age is :{data.age}</h1>
     <h1>Class is :{data.class}</h1>
     </div> */}

{/* <label htmlFor="female">female</label>
<input type="radio" name="gender" id='female' value='female' onChange={(e)=>{setfirst(e.target.value)}} />
</div>

<label htmlFor="male">male</label>
<input type="radio" name="gender" id='male' value='male' onChange={(e)=>{setfirst(e.target.value)}} />
<h1>you select {first}</h1>
<select name="" id="" onChange={(e)=>setChange(e.target.value)}>
    <option value="amna">amna</option>
     <option value="ayesha">ayesha</option>
      <option value="laraib">laraib</option>
</select>
<h1>your name is {change}</h1> */}
<h1>dss</h1>
<div style={{width:'100%'}}>
  <ul >
   <Link to={"/Pp"} style={{textDecoration:'none',color:'red',backgroundColor:'tomato'}}><li>Home</li></Link>   
   <Link to={"/Product"}><li>Products</li></Link> 
    <Link to={"/Array"}><li>Array</li></Link>   
     <Link to={"/form"}>Form</Link>  
    i maa pp
    <Link to={"/Array"}><h1>Logo</h1></Link>
    
  </ul>
</div>
    </>
  )}
 
export default Pp