import { useState } from "react"

const StateEg1 = () => {
    let [state , setState] = useState(0);
    let handleInc = ()=>{
        console.log("handle fun is executed");
        if(state<10){
            setState(state+1)
        }
        else{
            alert('cannot add more than 10');
        }
        
    };
    let handleDec = ()=>{
        if(state>0){
            setState(state-1)
        }
        else{
            alert("cannot dec less than 0")
        }
    }
  return (
    <div>
        <h2>state - {state}</h2>
      <button onClick={handleInc}>Inc state</button>
      <button onClick={handleDec}>Dec state</button>
    </div>
  )
}

export default StateEg1
