import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Read = () => {
    let [state,setState] = useState([]);
    let fetchApi = async ()=>{
        try{
            let {data} = await axios.get("http://localhost:3000/posts")
            setState(data)
        }
        catch (err){
          console.log(err);
          
        }
    }
    useEffect(()=>{
      fetchApi()
    },[])
  return (
    <div>
      {
        state.map(({id,title,views})=>{
          return(
            <div key={id}>
          <h1>{title}</h1>
          <p>{views}</p>

          </div> 
          )
        
        })
      }
    </div>
  )
}

export default Read
