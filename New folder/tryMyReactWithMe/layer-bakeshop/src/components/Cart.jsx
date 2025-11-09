import React, { useContext } from 'react'
import { CardContext } from './CartContextData'

function Cart() {
   
    const cart=useContext(CardContext)
    let Total=cart.item.reduce((a,b)=>
        a+b.price,0
    )
  return (
     <>
    <div>
        <h2>CarT Items</h2>
        {cart &&  cart.item.map((item)=>(
        <li>the names are {item.name} - price is {item.price}</li>
        
        )) }
        <h3>Total price:{Total} </h3>

    </div>
    </>
  )
}

export default Cart