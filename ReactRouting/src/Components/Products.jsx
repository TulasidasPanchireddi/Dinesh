import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [state, setState] = useState([])

  const fetchApi = async () => {
    const { data } = await axios.get("https://api.escuelajs.co/api/v1/products")
    setState(data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {
        state.map(({ id, title, price, images }) => (
          <div
            key={id}
            className="border rounded-lg shadow p-4 hover:scale-105 transition"
          >
            <img src={images[0]} alt={title}className="h-40 w-full object-cover mb-3 rounded"/>
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="text-green-600 font-bold">${price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Products
