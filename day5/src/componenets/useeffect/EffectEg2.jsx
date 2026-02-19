import React, { useState,useEffect } from 'react'

const EffectEg2 = () => {
    let [state,setState] = useState(0);
    let fun1 = ()=>{
         setTimeout(()=>{
            console.log("hello");
         },2000)
    }
         
      useEffect(()=>{
        fun1()
      },[])  
    
           
  return (
    <div>
      <h2>state -{state}</h2>
      <button onClick={()=>{setState(prev=>prev+1)}}>Inc</button>
    </div>
  )
}

export default EffectEg2
