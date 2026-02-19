import React, { useState } from 'react'

const ControlledEg2 = () => {
    let [state,setState] = useState({username : '',password : '',textarea : ''});
    let handleChange = (e)=>{
        let {name,value} = e.target;
        // console.log(state);
        setState({...state,[name] : value})
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(state);
        setState({username : '',password : '',textarea : ''})
       
        
        
    }
  return (
    <div>
      <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
        <input type="text" name='username' value={state.username} onChange={e=>{handleChange(e)}} placeholder='Enter name' />
         <input type="password" name='password' value={state.password} onChange={e=>{handleChange(e)}} placeholder='Enter password'/>
         <textarea name="textarea" id="" value={state.textarea} onChange={e=>{handleChange(e)}} placeholder='feedback'></textarea>
         <button>submit</button>
      </form>
    </div>
  )
}

export default ControlledEg2
