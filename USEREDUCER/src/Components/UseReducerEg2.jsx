import React, { useReducer } from 'react'
let initialvalue = {
    username:"",
    email:"",
    password :""
}
const reducer = (state,action)=>{
    switch(action.type){
        case "CHANGE": return{...state,[action.name]:action.value}
        case "SUBMIT": 
        console.log(state);
        return initialvalue
        default: return state
        
    }

}

const UseReducerEg2 = () => {
    let [state,dispatch]  = useReducer(reducer,initialvalue)
  return (
    <div>
      <form  className='flex flex-col w-50 gap-4 justify-center items-center m-auto border p-4 w-[300px]' action="" onSubmit={(e)=>{e.preventDefault();dispatch({type:"SUBMIT"})}}>
        <input className='bg-black text-white p-2 rounded-2xl'  type="text" value={state.username} placeholder='username' onChange={(e)=>{dispatch({type:"CHANGE",name:"username",value:e.target.value})}} />
        <input className='bg-black text-white p-2 rounded-2xl'  type="email" value={state.email} placeholder='email'  onChange={(e)=>{dispatch({type:"CHANGE",name:"email",value:e.target.value})}}/>
        <input  className='bg-black text-white p-2 rounded-2xl' type="password" value={state.password} placeholder='password'  onChange={(e)=>{dispatch({type:"CHANGE",name:"password",value:e.target.value})}}/>
        <button  className='bg-black text-white p-2 rounded-2xl' type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default UseReducerEg2
