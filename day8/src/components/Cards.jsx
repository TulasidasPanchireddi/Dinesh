import React, { useContext } from 'react'
import {x} from '../App'

const Cards = () => {
    let data = [
    {
        id : 1,
        title : "Dress",
        price : 10000
    },
    {
        id : 2,
        title : "Belt",
        price : 20000
    },
    {
        id : 3,
        title : "Jeans",
        price : 30000
    },
]

let {theme,cart,setCart} = useContext(x)
let handleClick = (object)=>{
    cart.some(item=>item.id === object.id)
    if(bool === false){
        setCart(cart,...object)
        
    }
    else{
        alert("already exists")
    }
}


  return (
    <div className='flex justify-around border-2 m-2 p-4'>
     {
        data.map((object)=>{
            let {id,title,price} = object
            return (
                <div key={id} className={theme?'bg-black text-white flex flex-col justify-around border w-[150] gap-2 p-4 h-30':'bg-white flex flex-col justify-around border gap-2 w-[150] p-4 h-30'}>
                  <h1>{title}</h1> 
                  <p>${price}</p> 
                  <button className='bg-amber-400' onClick={()=>handleClick(object)}>Add</button>
                </div>
            )
        })
     }
    </div>
  )
}

export default Cards
