import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
    let [state,setState] = useState({id:"",title:"",description:"",price:"",image:"shj"})
    let params = useParams()
  
    
    let fetchApi = async()=>{
        try{
            let {data} = await axios.get(`https://fakestoreapi.com/products/${params.identity}`)
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
     <h1>{state.title}</h1>
     <img src={state.image} alt="" />
    </div>
  )
}

export default Products
