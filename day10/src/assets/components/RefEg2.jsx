import React, { useState } from 'react'
import { useRef } from 'react'

const RefEg2 = () => {
let [state,setState] = useState(false)
let x = useRef(0);
console.log(x);
let handleNum = ()=>{
    x.current+=1
    console.log(x.current);
    
}

  return (
    <div>
      <h2>{x.current}</h2>
      <button onClick={handleNum}>Inc ref</button>
      <button onClick={()=>setState(!state)}>{state?'on':'off'}</button>
    </div>
  )
}

export default RefEg2
