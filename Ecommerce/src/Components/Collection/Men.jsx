import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const Men = () => {

  const [state, setState] = useState([])

  const fetchapi = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products/category/mens-shirts")
      setState(data.products)
    } 
    catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchapi()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {
        state.map(({ id, images, title,price,rating }) => (
          <div key={id} className="border p-3">
          <img src={images[0]} alt={title} className="h-48 w-full object-cover" />
          <p className="mt-2 font-bold">{title}</p>
          <Link to={`/men/${id}`} key={id}></Link>
          </div>
        ))
      }
    </div>
  )
}

export default Men
