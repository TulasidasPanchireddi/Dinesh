import React, { useState } from 'react'


const StateEg11 = () => {
    let [state,setState] = useState(false)
    const handle = ()=>{
        setState(!state)
    }
  return (
    <>
    <button onClick={handle}>{state?"Hide":"Show"}</button>
    {state && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis?</p>}
    {/* <p>{state?"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis?":""}</p> */}
    </>
  )
}

export default StateEg11
