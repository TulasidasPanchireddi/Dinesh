import React, { useMemo, useState } from 'react'

const UseMemoEg = () => {
    let [state1,setState1] = useState(false)
    let [state2,setState2] = useState(0)
    let double = ()=>{console.log("double is executing");
     return state2*2}
    let x = useMemo(double,[state2])
    console.log(x);
    
  return (
    <div>
      <h1>usememo</h1>
      <button onClick={()=>{setState1(!state1)}}>{state1?'ON':'OFF'}</button>
      <h1>{state2}</h1>
      <button onClick={()=>{setState2(state2+1)}}>Inc state2</button>
      <h1>Double val : {x}</h1>
    </div>

  )
}

export default UseMemoEg
