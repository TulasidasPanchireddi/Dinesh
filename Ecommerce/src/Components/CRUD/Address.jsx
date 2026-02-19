import React, { useContext, useEffect, useState } from 'react'
import AxiosInstance1 from '../Api/AxiosInstance1'
import { Link, NavLink } from 'react-router-dom'
import { MyContext } from '../../App'

const Address = () => {
    let {load,setLoad} = useContext(MyContext)
  const [state, setState] = useState([])

  const fetchApi = async () => {
    const { data } = await AxiosInstance1.get('/addresses')
    setState(data)
  }

  useEffect(() => {
    fetchApi()
  }, [load])

  let handleDelete = async (id)=>{
    
       
             try{
             await AxiosInstance1.delete(`/addresses/${id}`)
             setLoad(!load)
            alert('Deleted successfully')
          
            }
        catch(err){
            console.log(err);
            
        }  
    }


  return (
    <div className="min-h-screen bg-gray-100">

      
      <div className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white text-xl">
        <Link to="/" className="font-bold">LOGO</Link>
        <p className="text-2xl font-semibold">Address</p>
        <div />
      </div>

     
      <div className="max-w-3xl mx-auto mt-6 space-y-4">
        {state.map(({ id, name, email, mobile, area, landmark, pincode }) => (
          <div
            key={id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-lg font-semibold text-gray-800">{name}</p>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-600">{mobile}</p>

            <div className="mt-2 text-sm text-gray-500">
              <p>{area}, {landmark}</p>
              <p>Pincode: {pincode}</p>
              <button onClick={()=>{handleDelete(id)}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
       <NavLink to='/create'><div className='flex justify-center items-center mt-7'><button className='border p-4 bg-emerald-600 '>ADD NEW ADDRESS</button></div></NavLink>
    </div>
  )
}

export default Address
