import React, { useContext } from 'react'
import { CardContext } from './CartContextData'

function Item(props) {
     const cart=useContext(CardContext)
     console.log("Cart",cart);
   
  return (
   
  <>
  <div>
  <h4>item name{props.name}</h4>
  <p>price: {props.price}</p>
   <button onClick={()=> cart.setItem([...cart.item,{name:props.name,price:props.price},])}>Add to cart</button>  
   </div>
  </>
  )
}

export default Item