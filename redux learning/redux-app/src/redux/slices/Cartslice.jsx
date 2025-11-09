import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice(
    {
        name:"Cart",
        intialState:["amna"],
        reducres:{
            additems:(state,action)=>{
              state=[...state,action.payload]   
            }
        }
    }
)
export default Cartslice.reducer;