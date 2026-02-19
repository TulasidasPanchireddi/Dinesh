import { useState } from "react"

const StateEg6 = () => {
    let [state , setState] = useState(false);
    let handleClick = ()=>{
        setState(!state)
    }
  return (
    <div>
      <button onClick={handleClick}>{state ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default StateEg6


