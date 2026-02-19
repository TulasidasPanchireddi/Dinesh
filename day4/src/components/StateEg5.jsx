import { useState } from "react"

const StateEg5 = () => {
    let [state , setState] = useState("ON")
    let handleClick =()=>{
        if(state === 'ON'){
            setState('OFF')
        }
        else{
            setState('ON')
        }
    }
  return (
    <div>
      <button onClick={handleClick}>{state}</button>
    </div>
  )
}

export default StateEg5
