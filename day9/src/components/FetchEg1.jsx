import React, { useEffect } from 'react'
import { useState } from "react";

const FetchEg1 = () => {
     let [state,setState] = useState([])
  let fetchApi = async()=>{
  try{
      let response = await fetch("https://fakestoreapi.com/products")
      let data = await response.json();
      console.log(data);
      setState(data)
  }
  catch(err){
    console.log(err);
    
  }
    
  }

  useEffect(()=>{
     fetchApi()
  },[])
  return (
    <div>
      {
        state.map(({title,price,description})=>{
            return(
                <div>
                    <h1>{title}</h1>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>

            )
        })
      }
    </div>
  )
}

export default FetchEg1
