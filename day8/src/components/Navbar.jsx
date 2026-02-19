import { useContext } from "react"
import {x} from '../App'

const Navbar = () => {
  let {theme,setTheme,cart,setCart} = useContext(x)
  return (
    <div className={theme? "bg-black text-white flex justify-around p-4 border-2 ":"bg-white text-black flex justify-around border-2 p-4"}>

      <img src="solo" alt="logo" />
      <button onClick={()=>setTheme(!theme)}>{theme?"Light":"Dark"}</button>
      <p>cart<sup>{cart.length}</sup></p>
    </div>
  )
}

export default Navbar
