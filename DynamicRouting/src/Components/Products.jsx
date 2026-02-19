import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'
import { useParams } from 'react-router-dom'

const Products = () => {
    let x = useParams()
    console.log(x);
    console.log(typeof x.identity);
    
    
    let products = useContext(MyContext)
    let product = products.filter(obj=>obj.id==x.identity)
    console.log(product);
   

  return (
    <div className='flex justify-around m-4'>
      {/* <h1>userId:{id}</h1> */}
      <img src={product[0].image} alt="" className='h-70 w-70' />
    <div className='w-[50%]'>
         <p>{product[0].title}</p>
        <p>{product[0].price}</p>
         <p>{product[0].rating}</p>
    </div>
      
    </div>
  )
}

export default Products
