import React from 'react'

const Navbar = ({state,mode,setMode}) => {
  return (
    <header className={mode ? 'dark' : 'light'}>
        <img src="Tulasi" alt="logo" />
        <button onClick={()=>{setMode(!mode)}}>{mode ? "light" : "dark"}</button>
        <button>cart<sup>{state}</sup></button>

    </header>
  )
}

export default Navbar
