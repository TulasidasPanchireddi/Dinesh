  import { useState} from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import Navbar from './componenets/Navbar'
  import Cards from './componenets/Cards'
  import Footer from './componenets/Footer'
  import Card from './componenets/Card'


  function App() {
    let [state,setState] = useState(0)
    let [mode,setMode] = useState(false)
    let [cart,setCart] = useState([])

    return (
      <>
      <Navbar  mode={mode} setMode = {setMode} state = {state} setState = {setState} />
        <Cards mode = {mode} state = {state} setState = {setState} cart= {cart} setCart ={setCart}/>
        <Footer mode={mode}/>
        <Card cart = {cart} setCart = {setCart} state={state} setState={setState}/>
      </>
    )
  }

  export default App
