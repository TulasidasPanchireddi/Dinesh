import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around p-4 bg-amber-400'>
        <Link to='/'><img src="ll" alt="logo" /></Link>
        <NavLink to="/home" className={(obj) => {
          console.log(obj);
           return obj.isActive ? 'text-blue-500 underline' : ''          
        }}>
  Home
</NavLink>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Navbar
