import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Link to='' >Dashboard</Link>
      <Link to='profile' >Profile</Link>
      <Link to='settings' >Settings</Link>
      <hr />
      <Outlet/>

    </div>
  )
}

export default DashboardLayout
