import React, { useContext, useRef, useState } from 'react'
import { myContext } from '../App'
const UseStateEx1 = () => {
    let [state,setState] = useState(false)
    let {mode,setMode} = useContext(myContext)
    let [count,setCount] = useState(0)
    let x = useRef(null)
    let handleClick = ()=>{
        setCount(count+1)
        x.current+=1
        console.log("count",count);
        console.log("ref",x.current);
        
        
    }
    
  return (
    <div>
      {
        state==false?<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illo.</p>:""
      }
      <button onClick={()=>{setState(!state)}}>{state?"Show":"Hide"}</button>
      <div>

        <h1 style={{backgroundColor:mode?"black":"white",color:mode?"white":"black"}}>hello world</h1>
        <button onClick={()=>{setMode(!mode)}}>{mode?"Light":"Dark"}</button>
      </div>
      <div>
        <h1>count:{count}</h1>
        <h1>ref:{x.current}</h1>
        <button onClick={handleClick}>Increment</button>
      </div>
     
    </div>
  )
}

export default UseStateEx1
