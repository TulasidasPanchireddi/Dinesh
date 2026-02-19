import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home"; 
import Products from "../Components/Products"; 
import Profile from "../Components/Profile"; 
import PrivateRouter from "./PrivateRouter"; 
import Login from "../Components/Login"; 
import Users from "../Components/Users"; 
import SignUp from "../Components/SignUp";

export let routing = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      { path: "home", element: <Home/>},
      { path: "products", element: <Products /> },
      {
        path: "/profile",
        element: 
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        
      },

      {
        path: "/users",
        element: 
          <PrivateRouter>
            <Users />
          </PrivateRouter>
      },
      { 
        path: "/login", 
        element: <Login /> },
      { 
        path: "/signup", 
        element: <SignUp /> 
      }
    ]
  }
]);
