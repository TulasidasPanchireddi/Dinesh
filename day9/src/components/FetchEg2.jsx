import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

const FetchEg2 = () => {
    let [state,setState] = useState([])
    let fetchApi = async()=>{
        try{
             let {data} = await axios.get("https://fakestoreapi.com/products")
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
        state.map(({id,title,price,description})=>{
            return(
                <div key={id}>
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

export default FetchEg2
