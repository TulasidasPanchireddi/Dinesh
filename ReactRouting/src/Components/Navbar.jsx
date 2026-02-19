import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-300 h-16 flex items-center justify-between px-6">
        <Link to="/" className="font-bold text-lg">Logo</Link>

        <div className="flex gap-6">
          <Link to="home">Home</Link>
          <Link to="products">Products</Link>
          <Link to="/profile">Profile</Link>
          <Link to='/users'>Users</Link>
          <Link to ='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Navbar
