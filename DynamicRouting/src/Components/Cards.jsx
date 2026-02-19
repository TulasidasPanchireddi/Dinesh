import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'
import {Link} from 'react-router-dom'

const Cards = () => {
    let products = useContext(MyContext);
    console.log(products);

    
  return (
    <div className='flex justify-around m-4'>
      {
       products.map(({id,title,image})=>{
        return(
           
                <Link to={`/product/${id}`}>
                    <div className='border p-3 flex flex-col items-center' key={id}>
                        <img src={image} alt="err" className='h-50 w-50 rounded-xl' />
                        <p>title</p>
                    </div>
                </Link>
        )
       })
      }
    </div>
  )
}

export default Cards
