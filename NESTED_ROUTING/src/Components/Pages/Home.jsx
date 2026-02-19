import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    let [isLoggedIn,setLoggedIn] = useState(false)
    if(isLoggedIn){
        return(
            <div>
                <h1>Welocme to Dashboard</h1>
                <p>Welcome Back User</p>
                <button onClick={()=>setLoggedIn(false)}>Logout</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Welcome to Home</h1>
                <p>Please Login to continue</p>
                <button onClick={()=>setLoggedIn(true)}>Login</button>
            </div>
        )
    }
  return (
    <div>
      <h1>My Home</h1>
    </div>
  )
}

export default Home
