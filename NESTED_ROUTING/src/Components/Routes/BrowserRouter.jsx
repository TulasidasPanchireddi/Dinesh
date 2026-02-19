import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Pages/DashboardLayout'
import Dashboard from '../Pages/Dashboard'
import Settings from '../Pages/Settings'
import Profile from '../Pages/Profile'
import Chief from '../Pages/Chief'


    let router = createBrowserRouter([
        {
            path : "/",
            element : <Chief/>,

        },
        {
            path : "/dashbaord",
            element : <DashboardLayout/>,
            children : [    
                {
                    path : "",
                    element : <Dashboard/>
                },
                {
                    path : "settings",
                    element : <Settings/>
                },
                {
                    path:"profile",
                    element:<Profile/>
                }

            ]   
        }
    ])
 


export default router
