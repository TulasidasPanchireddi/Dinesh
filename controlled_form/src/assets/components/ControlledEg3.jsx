import React, { useState } from 'react'

const ControlledEg3 = () => {
  let [msg,setMsg] = useState('')
  let handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div>
     <form action="" onSubmit={handleSubmit}>
       <textarea className='border' name="feedback" value={msg} id="" onChange={(e)=>{setMsg(e.target.value)}} ></textarea>
      <p>{msg.length}/10</p>
      <button className='border' type='submit'>submit</button>
     </form>
     
    
    </div>
  )
}

export default ControlledEg3
