import React, { useState } from 'react'
import FormInput from './FormInput'
import './ob.css'
function StudentForm() {
  const[inputTract,setInputTrack]=useState({
  username:" ",
  password:"",
  confirmPassword:"",
  })
  const InputUser=[
    {
      id:1,
      name:"username",
      placeholder:"Enter your name",
      lable:"Full Name",
      type:"text",
      errormsg:"Name shouldnot include spacial character",
      required:true
    },
     {
      id:2,
      name:"Password",
      placeholder:"Enter your password",
      lable:"Password",
      type:"password",
      errormsg:"password should contain atleast one letter one number and one special key",
      required:true,    },
     {
      id:3,
      name:"Confirm Password",
      placeholder:"Confirm Password",
      lable:"Confirm Password",
      type:"password",
      errormsg:"password dorsnot match",
     required:true
    },
  ]
  function onChange(e){
setInputTrack({...inputTract , [e.target.name]:[e.target.value] })
console.log(e);

  }
  function submithandle(e){
    e.perventDefault();
  }
  return (
   <>
   <div id="mainContainer">
   <form action="" onSubmit={submithandle}>
   { InputUser.map((input)=>(
      <FormInput key={input.id} {...input} value={inputTract[InputUser.name]} onChange={onChange}/>
   
       

   ))
   

  }
  <button>submit</button>
   </form>
   </div>
   
   
   
   </>
  )
}

export default StudentForm