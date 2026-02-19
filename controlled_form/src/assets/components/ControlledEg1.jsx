import React, { useState } from 'react'

const ControlledEg1 = () => {
     let [name,setName] = useState('')
  let [pwd,setPwd] = useState('')
  let handleSubmit = (e)=>{
      e.preventDefault();
    if(name.trim() === ''){
    alert('Empty data cannot be submitted')
    }
    else{
         console.log(name);
         console.log(pwd);
         
    setName('')
    setPwd('')
    }
   
   
    
    
  }
  return (
    <div>
     <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
      <input className='border p-3' type="text" name='name' value={name} placeholder='enter the name'
      onChange={(e)=>{setName(e.target.value)}} />
      <input className="border p-4 round " type="password" name='password' value={pwd} placeholder='enter the password' 
      onChange={(e)=>{setPwd(e.target.value)}}  />
      <button className='ml-2 border'>submit</button>
     </form>
    </div>
  )
}

export default ControlledEg1
