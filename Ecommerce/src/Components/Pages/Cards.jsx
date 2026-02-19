import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Cards = () => {
  let [state,setState] = useState([])
  let [loading,setLoading] = useState(false)
  let fetchApi = async()=>{
    try{
      let {data} = await axios.get("https://fakestoreapi.com/products")
      setLoading(true)
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
   <>
   {
    loading === false? 
    <div className='flex justify-around'>
      <div className='w-40'>
      <Skeleton className='h-40'/>
      <Skeleton className='h-40'/>
      <Skeleton />
    </div>
    <div className='w-40'>
      <Skeleton className='h-40'/>
      <Skeleton />
      <Skeleton />
    </div>
    <div className='w-40'>
      <Skeleton className='h-40'/>
      <Skeleton />
      <Skeleton />
    </div>
    </div>
    : 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">

      {
        state.map(({id,image,title})=>{
          return(
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 p-4 flex flex-col"> 
              <img src={image} alt="err" className="h-52 flex items-center justify-center hover:scale-110"/>
              <p>{title.slice(0,30)}</p>
              <Link to={`/products/${id}`}>
              <button className="w-full mt-4 bg-emerald-300 hover:bg-amber-300  text-white py-2 rounded-xl font-semibold  transition"> Know More...</button> 
              </Link>
             
            </div>
          )
        })
      }
    </div>
   }
   </>
  )
}

export default Cards
