import React, { useState } from 'react'

const ControlledEx5 = () => {
    let [state,setState] = useState({username : '',password : ''})
    let handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name]:value})

    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        if(state.username.trim()==='' && state.password.trim()==''){
            alert("enter the credientials then submit")
        }
        else{
              console.log(state.username);
              console.log(state.password);
              setState({username:'',password:''})

        }
    }
  return (
    <div className='border p-4'> 
     <form onSubmit={handleSubmit} className='flex flex-col w-96 gap-3 m-auto '>
        <input onChange={handleChange} className='border'  name='username' value={state.username} type="text" placeholder='username' />
        <input onChange={handleChange} className='border' name='password' value={state.password} type="password" placeholder='password' />
        {state.username!=''&& state.password!=''?<button className='border'>submit</button>:''}
      
     </form>
    </div>
  )
}

export default ControlledEx5
