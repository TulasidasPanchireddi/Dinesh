import React, { useState } from 'react'

const ControlledEg7 = () => {
    let [state,setState] = useState({username:'',password:''})
    let [submit,setSubmit] = useState(false)

    let handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name]:value})
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
            if(state.username !== '' && state.password !== ''){
                setSubmit(true)
            }
            else{
                alert("enter cheyu")
            }
        
       
        
    }
  return (
    <div>
     <form className='p-10 flex flex-col w-80 m-auto justify-center gap-3' action="" onSubmit={handleSubmit}>
        <input  className='border' type="text"  name='username' value={state.username} onChange={handleChange} placeholder='uername'/>
        <input  className='border' type="password" name='password' value={state.password} onChange={handleChange} placeholder='password' />
        <button className='border' >submit</button>
    
     </form>
     {
        submit &&<div> username:{state.username} <br />password:{state.password}</div>
     }
    </div>
  )
}

export default ControlledEg7
