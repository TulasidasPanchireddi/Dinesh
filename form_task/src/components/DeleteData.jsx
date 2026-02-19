import axios from 'axios'
import React, { useState } from 'react'

const DeleteData = () => {
   let [id,setId] = useState('')
   
    let fetchApi = async ()=>{
       
             try{
            let x = await axios.delete(`http://localhost:3000/posts/${id}`)
            
            alert(x.statusText)
            
            
            }
        catch(err){
            console.log(err);
            
        }  
    }
    let handleChange = (e)=>{
        setId(e.target.value)
    }
  return (
    <div>
        <input type="text" name='id' value={id} onChange={handleChange} placeholder='Enter Id' />
      <button onClick={fetchApi}>Delete</button>
    </div>
  )
}

export default DeleteData
