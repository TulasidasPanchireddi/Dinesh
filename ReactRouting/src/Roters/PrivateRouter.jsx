import React from 'react'
import { isAuthenticated } from '../Components/Authenticated'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    
  return (
    <div>
      {isAuthenticated()?children:<Navigate to='/login'/>}
    </div>
  )
}

export default PrivateRouter
