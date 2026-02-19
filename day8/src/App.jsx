import { createContext, useContext, useState } from "react"
import CompA from "./components/CompA"
import CompC from "./components/CompC"
import CompB from "./components/CompB"
import Navbar from "./components/Navbar"
import Cards from './components/Cards'
import Cart from './components/Cart'
import Footer from './components/Footer'


export let x = createContext()
export let y = createContext()
function App() {
  
 let [theme,setTheme] = useState(false)
 let [cart,setCart] = useState([])

 

  return (
    <>
     <x.Provider value={{theme,setTheme,cart,setCart}}>
      <Navbar />
       <Cards />
       <Cart />
       <Footer />
     </x.Provider>
     <y.Provider value= "Welcome">
      <CompA />
      <CompB />
      <CompC />
     </y.Provider>


    </>
  )
}

export default App
