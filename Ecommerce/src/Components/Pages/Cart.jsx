import React, { useContext, useState } from 'react'
import { MyContext } from '../../App'
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Cart = () => {
    
    let {cartProducts,setCartProducts} = useContext(MyContext)
    let handleDelete = (id)=>{
        let x = cartProducts.filter(obj=>obj.id!==id)
        setCartProducts(x)
    }
    const handleIncrement = (id) => {
      setCartProducts(cartProducts.map(ele =>
          ele.id === id? { ...ele, quantity: ele.quantity + 1 }: ele)
    )}

     const handleDecrement = (id) => {
      setCartProducts(cartProducts.map(ele =>
        ele.id === id && ele.quantity>1? { ...ele, quantity: ele.quantity -1}: ele)
    )}
    
    let total = cartProducts.reduce((prev,item)=>{
         return prev+item.price*item.quantity
    },0)
   
  return (
   <>
    <div  className='w-[99vw] m-auto'>
      {
        cartProducts.map(({id,image,price,title,quantity})=>{
            return(
                <div key={id} className='flex justify-around p-3 border items-center text-xl m-2'>
                    <img src={image} alt="" className='h-30 w-30'/>
                    <p>{title.slice(0,25)}</p>
                    <div className="flex items-center border rounded-lg">
                      <button onClick={()=>handleDecrement(id)} className="px-3 py-1 hover:bg-gray-200">−</button>
                      <span className="px-4">{quantity}</span>
                      <button   onClick={()=>handleIncrement(id)} className="px-3 py-1 hover:bg-gray-200">+</button>
                      </div>
                    <p className='font-bold w-[10%]'>${price}</p>
                    <button className="text-red-500 hover:text-red-700" onClick={()=>handleDelete(id)}><MdDelete size={22}/></button>
                </div>
            )
        })
      }
      
    </div>
    <div className='ml-250 w-[20%] mt-2'>
      <hr /><br />
      <p className='border text-center text-xl font-bold'>Total : <span>{Math.floor(total)}</span></p>
    </div>
    <div className='text-center'>
      <NavLink to='/address'><button className='bg-amber-500 p2 rounded-xl font-bold text-white'>PROCEED</button></NavLink>
    </div>
   </>
    
  )
  
}

export default Cart


