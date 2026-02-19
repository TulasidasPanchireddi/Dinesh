import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Men from '../collection/Men'
import Women from '../collection/Women'
import Electronics from '../collection/Electronics'
import Jewellery from '../collection/Jewellery'
import Home from '../Pages/Home'
import Layout from '../Pages/Layout'
import Products from '../Pages/Products'


export let router = createBrowserRouter(
    [
      
        {
            path:"/",
            element:<Layout/>,
            children:[
            {
                index:true,
                element:<Home/>
            },
                
            {
            path:"/mens",
            element:<Men/>
            },
            {
            path:"/womens",
            element:<Women/>
            },
            {
            path:"/electronics",
            element:<Electronics/>
            },
            {
            path:"/jewellery",
            element:<Jewellery/>
            },
            {
                path:"/products/:identity",
                element:<Products/>
            }
                
            ]
        },
       
    ]
)
const Router = () => {
  return (
    <div>
      
    </div>
  )
}

export default Router
