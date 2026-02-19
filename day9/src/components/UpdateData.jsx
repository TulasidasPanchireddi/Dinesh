import axios from 'axios'
import React from 'react'

const UpdateData = () => {
    let fetchApi = async ()=>{
        let data = await axios.put("http://localhost:3000/posts/1",{
            id : 1,
            title : "Salar",
            views : 200000


        })
                
    }
  return (
    <div>
      <button onClick={fetchApi}>update 2</button>
    </div>
  )
}

export default UpdateData
