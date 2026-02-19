import axios from 'axios'
import React from 'react'

const DeleteData = () => {
    let fetchApi = async ()=>{
        try{
            let x = await axios.delete(`http://localhost:3000/posts/${id}`)
            let {id} = x
            console.log(x);
            if(id=="500"){
                alert("delete successfully")
            }
            
        }
        catch(err){
            console.log(err);
            
        }
    }
  return (
    <div>
      <button onClick={fetchApi}>Delete 3 data</button>
    </div>
  )
}

export default DeleteData
