import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Cards = () => {
    let [state,setState] = useState([])
    let fetchApi = async()=>{
        try{
            let {data} = await axios.get("https://fakestoreapi.com/products")
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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10'>
       
    {
        state.map(({id,title,price,image})=>{
            return(
                <div key={id} className='border rounded-xl p-4 flex flex-col items-center gap-4 shadow-md bg-amber-100'>
                    <img src={image} alt="" className='h-[200px] w-[200px]'  />
                    <h1>{title.slice(0,20)}</h1>
                    <p>${price}</p>
                   <NavLink to={`/products/${id}`} className='bg-blue-500 text-white px-4 py-2 rounded-md'>View Details</NavLink>
                </div>
            )
    })
    }
    </div>
  )
}

export default Cards
