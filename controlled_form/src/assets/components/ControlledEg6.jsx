import React, { useState } from 'react'

const ControlledEg6 = () => {
    let [state,setState] = useState({username : '',password:'',email:'',phone:''})
    let handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name]:value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state);
        setState({username : '',password:'',email:'',phone:''})
        
    }
  return (
    <div className='border border-b-blue-700 h-full p-40'>
      <form className=' flex flex-col w-72 m-auto gap-3 ' onSubmit={handleSubmit} action="">
       
        <input className='border' onChange={handleChange} type="text" name='username' value={state.username} placeholder='username'/>
         {
          state.username!='' ?<input className='border' onChange={handleChange} type="password" name='password' value={state.password} placeholder='password'/>:''
        }
         {
          state.password!=''&& <input className='border' onChange={handleChange} type="email" name='email' value={state.email} placeholder='email'/>
        }
        {
          state.email==''? '':<input className='border' onChange={handleChange} type="phone" name='phone' value={state.phone} placeholder='mobile'/>
        }
        
        {
          state.phone!=''&&  <button className='border'>submit</button>
        }
       
      </form>
    </div>
  )
}

export default ControlledEg6
