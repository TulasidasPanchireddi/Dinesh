import React, { useState } from 'react'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const StateEg12 = () => {
    let [state,setState] = useState(false)
  return (
    <div>
      <button onClick={()=>setState(!state)}>
    {state ? <>Dark Mode <CiDark /></> : <>Light Mode  <CiLight /></>}
        </button>
      {/* <div style={{backgroundColor: state ? "black" : "white", color: state ? "white" : "black", height: "100vh", padding: "10px"}}>
        <h1>{state ? "Dark Mode Enabled" : "Light Mode Enabled"}</h1>
        <p>This is an example of toggling between light and dark mode using React state.</p>
      </div> */}
      <div style={{backgroundColor: state?"black":"white", color:state?"white":"black",border:"2px solid red",height:"100vh"}}>
        <h1>{state?"dark mode":"light mode"}</h1>
        <p>This is an example of toggling between light and dark mode using React state.</p>
      </div>
      
    </div>
  )
}

export default StateEg12
