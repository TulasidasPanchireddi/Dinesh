import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Cheif from "./Components/Cheif"
import Products from "./Components/Products"
import { createContext } from "react"
import Navbar from "./Components/Navbar"

export const MyContext = createContext()

function App() {

  const products = [
    {
      id: "1",
      title: "Bottle",
      price: 2000,
      rating: 4.5,
      image: "https://cdn.pixabay.com/photo/2015/08/21/00/18/water-bottle-898332_1280.jpg"
    },
    {
      id: "2",
      title: "Watch",
      price: 10000,
      rating: 4.1,
      image: "https://cdn.pixabay.com/photo/2016/09/10/21/54/watch-1660232_1280.jpg"
    },
    {
      id: "3",
      title: "Sneakers",
      price: 100000,
      rating: 4.9,
      image: "https://cdn.pixabay.com/photo/2020/10/11/05/36/nike-5644799_1280.jpg"
    }
  ]

  return (
    <MyContext.Provider value={products}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Cheif />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:identity" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App
