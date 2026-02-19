import { useState } from "react"

const StateEg4 = () => {
    let [state , setState] = useState("JavaScript")
    let handleClick = ()=>{
        setState("ReactJS")
    }
  return (
    <div>
      <h2>technology - {state}</h2>
      <button onClick={handleClick}>update Technology</button>
    </div>
  )
}

export default StateEg4
