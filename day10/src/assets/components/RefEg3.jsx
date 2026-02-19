import React from 'react'
import { useRef } from 'react';

const RefEg3 = () => {
    let x = useRef();
    let handlClick = ()=>{
        console.log(x);
        x.current.focus();
        console.log(x.current.value);
        
        
    }
  return (
    <div>
      <div>
        <input type="text" ref={x} />
        <button onClick={handlClick}>focus the input</button>
      </div>
    </div>
  )
}

export default RefEg3
