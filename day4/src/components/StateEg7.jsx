import React, { useState } from 'react'

const StateEg7 = () => {
    let [state , setState] = useState("true")
    let handleClick = ()=>{
        setState(!state)
    }
  return (
    <div>
      <button onClick={handleClick}>{state?'Show':'Hide'}</button>
      {
        state === false  && (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur!</p>
        )
      }
    </div>
  )
}

export default StateEg7
