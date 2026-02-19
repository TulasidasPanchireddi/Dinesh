import React, { useEffect, useState } from 'react'
import Spinner from '../Conditional_Rendering/Spinner';

const EffectEg1 = () => {
    let [load , setLoad] = useState(true)
    let [state , setState] = useState([]);
    let fetchApi = async ()=>{
        try{
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            // console.log(data);
            setState(data);
            setLoad(false)
            
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
        load? <Spinner /> : state.length===0 ? <p>No Data found</p>: 
      <div className='cardContainer'>
        {
            state.map(({id , title , price , description , image})=>{
                return (
                    <div className="card" key={id}>
                        <img src={image} alt="err" />
                        <h3>{title.slice(0,10)}</h3>
                        <b>${price}</b>
                        <p>{description.slice(0,100)}</p>
                    </div>
                )
            })
        }
      
    </div>
    }
    </>
   
  )
}

export default EffectEg1
