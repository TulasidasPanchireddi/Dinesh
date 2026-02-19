import React, { useState } from 'react'

const RefEg1 = () => {
    let [state,setState] = useState(false);
    let num = 0;
    let handleNum = ()=>{
        num+=1;
        console.log(num);
        
    }
  return (
    <>
    <h2>{num}</h2>
    <button onClick={handleNum}>Inc Num</button>
    <button onClick={()=>setState(!state)}>{state?'on':'off'}</button>
    </>
  )
}

export default RefEg1
