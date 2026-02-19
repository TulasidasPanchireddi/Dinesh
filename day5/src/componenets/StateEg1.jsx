import React, { useState } from 'react'

const StateEg1 = () => {
    let [state , setState] = useState(0)
    let handleInc = ()=>{
        setState(prev=>prev+1)
    }
    let handleDec = ()=>{
        setState(prev=>{
            if(prev>0){
                return prev-1
            }
            else{
                return prev
            }
        })
    }
    
    let handleDouble = ()=>{
        setState(prev=>prev*2)
    }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
      <button onClick={handleDouble}>Double</button>
    </div>
  )
}

export default StateEg1
