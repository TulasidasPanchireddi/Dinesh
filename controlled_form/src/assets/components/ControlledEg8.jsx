import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

const ControlledEg8 = () => {
    let [state,setState] = useState(false)
    let [form,setForm] = useState('')
    let [load,setLoad] = useState(false)
   
    let fetchApi = async(e)=>{
        e.preventDefault();
       
       
    try{
            let {data} = await axios.get(`https://www.omdbapi.com/?t=${form}&apikey=1f5b53f6`)
           
              setState(data)
        }
        catch(err){
            console.log(err);
            
        }
    }
    let handleChange = (e)=>{
       
        setForm(e.target.value)
    }
  return (
   <>
    <div className='flex border-4 p-4' >
       
         {load==true?<Spinner />:state===true?"No data found":
   <div className='border-4 border-amber-400 m-auto p-4 flex flex-col justify-center items-center gap-3 w-auto'>
            <img src={state.Poster} alt="" className='h-100' />
            <h6 className='font-bold text-3xl'>{state.Title}</h6>
            <p>{state.Released}</p>
            <p>{state.Runtime}</p>
            <p>{state.Genre}</p>
            <p>{state.Director}</p>
            <p>{state.Language}</p>
            <p>{state.Country}</p>
        </div>
}
    </div>
   <form onSubmit={fetchApi} action="">
        <input  className='border mr-2 p-2 rounded-sm' type="text" name='msg' value={form} onChange={handleChange} placeholder='movie' />
        <button className='border p-2 rounded-xl' >submit</button>
    </form>
   </>
  )
}

export default ControlledEg8
