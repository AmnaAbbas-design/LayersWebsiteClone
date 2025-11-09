import { createContext, useState } from "react";

export const CardContext=createContext(null)

export const CartProvider=(props)=>{
    const[item,setItem]=useState([])
    return(
    <CardContext.Provider value={{item ,setItem}}>
{props.children} 
    </CardContext.Provider>
)};