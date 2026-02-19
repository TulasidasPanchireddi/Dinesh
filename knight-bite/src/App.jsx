import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import EnjoyLife from './pages/EnjoyLife'
import Menu from './pages/menu/menu'
import Fotter from './pages/menu/Fotter'
import About from './pages/about/About'
import About1 from './pages/about/About1'
import Franchise1 from './pages/franchise/Franchise1'
import Franchise2 from './pages/franchise/Franchise2'
import Franchise3 from './pages/franchise/Franchise3'
import Franchise4 from './pages/franchise/Franchise4'
import { BrowserRouter, Routes , Route } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={< Menu/>} />
      <Route path='/franchise' element={<Franchise1/>} />
     </Routes>
    // <Home />
    // <Features />
    // <EnjoyLife />
    // <Menu />
    // <Fotter />
    // <hr></hr>
    // <About />
    // <About1 />
    // <Franchise1 />
    //   <hr className='hr'></hr>
    // <Franchise2 />
    //  <hr className='hr'></hr>
    // <Franchise3 />
    // <hr className='hr'></hr>
    // <Franchise4 />
    </BrowserRouter>
   

    </>
  )
}

export default App
