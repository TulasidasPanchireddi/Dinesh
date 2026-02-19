import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Menu from "./Components/Menu"
import Login from "./Components/Login"


function App() {


  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

    </BrowserRouter>
 
    </>
  )
}

export default App
