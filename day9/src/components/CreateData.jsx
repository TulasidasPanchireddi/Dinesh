import axios from 'axios'
import React from 'react'

const CreateData = () => {
    let fetchApi = async ()=>{
        let data = await axios.post("http://localhost:3000/posts",{
            "id" : "500",
            "title" : "RajaSab",
            "views" : "40000",
            "description" : "Diansour"
        })
    }
  return (
    <div>
      <button onClick={fetchApi}>Create Data</button>
    </div>
  )
}

export default CreateData
