import React, { useReducer } from 'react'
const  initialvalue = 0
const reducer = (state,action)=>{
    switch(action.type){
    case "INC": return state+action.payload
    case "DEC": if(state>0){
        return state-action.payload
    }
    else{
        return initialvalue
    }
    case "RESET": return initialvalue

}
}

const UseReducerEg1 = () => {
    let [state,dispatch] = useReducer(reducer, initialvalue)
    
  return (
    <div>
      <h1>value:{state}</h1>
      <button  className='bg-emerald-500 rounded-2xl p-2 ml-2 w-20' onClick={()=>{dispatch({type:"INC",payload:5})}}>+</button>
      <button className='bg-emerald-500 rounded-2xl p-2 ml-2 w-20'  onClick={()=>{dispatch({type:"DEC",payload:5})}}>-</button>
      <button  className='bg-emerald-500 rounded-2xl p-2 ml-2 w-20 ' onClick={()=>{dispatch({type:"RESET"})}}>RESET</button>
    </div>
  )
}

export default UseReducerEg1
