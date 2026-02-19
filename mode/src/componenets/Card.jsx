import React from 'react'

const Card = ({cart , setCart,state,setState}) => {
  let handleDel = (id) =>{
    let arr = cart.filter((object)=>object.id != id);
    setState(state - 1) 
    setCart(arr)
  }
  return (
    <div style={{display:"flex",alignItems:"center"}}>
     
      {
        cart.map(({id,title,price},index)=>{
            return (
                <div className='cartProduct' key={index} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <button onClick={()=>{handleDel(id)}}>Remove</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Card
