import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
  const [state, setState] = useState({name: "",email: "",password: "",avatar:"https://i.pravatar.cc/150"})

  const fetchApi = async(e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("https://api.escuelajs.co/api/v1/users",state)
      console.log("User Created:", data)
        setState({name: "",email: "",password: "", avatar: "https://i.pravatar.cc/150"})
        navigate("/login")
        
    } 
    catch (error) {
      console.log("Error:", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className='border'>
      <form  className='flex flex-col w-[500px] border m-auto justify-center items-center p-4 gap-3' onSubmit={fetchApi}>
        <input className='border p-2 w-80'  type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name"/>
        <input className='border p-2 w-80'  type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
        <input className='border p-2 w-80'  type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password"/>
        <button className='border p-2 w-50'  type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
