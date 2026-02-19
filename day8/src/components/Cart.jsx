import React, { useContext, useState } from 'react'
import {x} from '../App'

const Cart = () => {
  let {cart,setCart} = useContext(x)
  let handleDel = (object)=>{
    cart.filter(id=>object.id!=id)
    setCart(cart)
  }
  return (
    <div>
      {
        cart.map(({id,title,price})=>{
          return (
            <div>
               <h1>{title}</h1> 
               <p>${price}</p> 
                <button className='bg-amber-400' onClick={()=>handleDel(object)}>Remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
