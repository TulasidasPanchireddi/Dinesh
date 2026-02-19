import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around border p-4 bg-black text-white'>
        <img src="fd" alt="logo" />
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar
