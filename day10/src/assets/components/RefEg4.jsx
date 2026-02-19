import React from 'react'
import { useRef } from 'react'

const RefEg4 = () => {
    let x = useRef();
    let handleClick = ()=>{
        x.current.style.color = "red";
        // document.getElementsByTagName("h2")[0].style.color = "red";
    }
  return (
    <div>
      <h2 ref={x}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, a?</h2>
      <button onClick={handleClick}>style</button>
    </div>
  )
}

export default RefEg4
