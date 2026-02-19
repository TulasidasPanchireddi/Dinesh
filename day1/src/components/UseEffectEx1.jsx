import React, { useEffect, useState } from 'react'

const UseEffectEx1 = () => {
    let [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("count Changed",count);
        
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Inc</button>
    </div>
  )
}

export default UseEffectEx1
