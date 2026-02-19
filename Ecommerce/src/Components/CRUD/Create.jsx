import React, { useState } from 'react'
import AxiosInstance1 from '../Api/AxiosInstance1';
import {  NavLink, useNavigate } from 'react-router-dom';

const Create = () => {
    let [state,setState] = useState({name:'',email:'',mobile:'',area:'',landmark:'',pincode:''})
    const navigate = useNavigate()
       let fetchApi = async(e)=>{
          e.preventDefault();
        try{
            let x = await AxiosInstance1.post("/addresses",state)
           navigate('/address')
            console.log(x);
            setState({name:'',email:'',mobile:'',area:'',landmark:'',pincode:''})
            
        }
        catch(err){
            console.log(err);
            
        }
    }
    let handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name]:value})
}
  return (
    <div>
      <form className='border flex flex-col w-[300px] gap-2 p-4 m-auto' onSubmit={fetchApi} action="">
        <input className='border' type="text" name='name' value={state.name} onChange={handleChange}  placeholder='name' />
        <input className='border' type="email"name='email' value={state.email} onChange={handleChange}  placeholder='email' />
        <input className='border' type="tel" name='mobile' value={state.mobile} onChange={handleChange}  placeholder='mobile'/>
        <input className='border' type="text" name='area' value={state.area} onChange={handleChange}  placeholder='area'/>
        <input className='border' type="text" name='landmark' value={state.landmark} onChange={handleChange} placeholder='landmark' />
        <input className='border' type="number" name='pincode' value={state.pincode} onChange={handleChange}  placeholder='pincode'/>
       <button className='border' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Create
