import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    let {pathname} = useLocation()
    if(pathname.startsWith('/products/')){
        return null
    }
  return (
    <div>
        <div className='border p-4 flex justify-around h-15 items-center '>
            <NavLink to='/'><img src="df" alt="logo" /></NavLink>
            <NavLink to='/mens'>Mens</NavLink>
            <NavLink to='/womens'>Women</NavLink>
            <NavLink to='/electronics'>Electronics</NavLink>
            <NavLink to='/jewellery'>Jewellery</NavLink>
        </div>
    </div>
  )
}

export default Navbar
