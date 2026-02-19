import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'

const NavBar = () => {
  let {pathname}= useLocation()
  
  if(pathname=='/cart' || pathname.startsWith('/products/') || pathname=='/address'|| pathname=='/create'){
    return null
  }
  
  return (
    <div className="flex flex-around bg-blue-500 p-4 justify-around text-white text-xl">
    <NavLink to='/'> <img src="s" alt="logo"  /> </NavLink>
     <NavLink className={({isActive,isTransitioning})=>isActive?'text-red-500 underline decoration-2':''} to='/jewellery'>Jewellery</NavLink>
     <NavLink className={({isActive})=>isActive?'text-red-500 underline decoration-2':''} to = '/men'>Men</NavLink>
     <NavLink className={({isActive})=>isActive?'text-red-500 underline decoration-2':''} to = '/women'>Women</NavLink>
     <NavLink className={({isActive})=>isActive?'text-red-500 underline decoration-2':''} to = 'electronics'>Electronics</NavLink>

    </div>
  )
}

export default NavBar
