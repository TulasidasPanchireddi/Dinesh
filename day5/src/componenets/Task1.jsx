import React, { use, useState } from 'react'
import Spinner from './Conditional_Rendering/Spinner'

const Task1 = () => {
   
   let data = "Hello World"
    let [cart,setCart] = useState([])
    setTimeout(()=>{setCart([{id : 101, title : "Mobile", price : 10000}])})
    return (
        <div>
         <Spinner/>
        </div>

    )
  }
 

export default Task1
