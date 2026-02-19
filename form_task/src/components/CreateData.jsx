import React, { useState } from 'react'
import axios from 'axios'

const CreateData = () => {
  
    let [state,setState] = useState({username:'',email:''})
    let fetchApi = async(e)=>{
          e.preventDefault();
        try{
            let x = await axios.post("http://localhost:3000/posts",state)
            console.log(x);
            
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
      <form onSubmit={fetchApi} action="">
        <input onChange={handleChange}  type="text" name='username' value={state.username} placeholder='username' />
        <input onChange={handleChange} type="email" name='email' value={state.email} placeholder='email'/>
        <button >submit</button>
      </form>
    </div>
  )
}

export default CreateData
