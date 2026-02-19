import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './components/List.jsx'
import Cards from './components/Cards.jsx'
import Table from './Table.jsx'
import Accordions from './components/Accordians/Accordions.jsx'
import Acc from './components/Accordians/Acc.jsx'
import UseStateEx1 from './components/useStateEx1.jsx'
import UseEffectEx1 from './components/UseEffectEx1.jsx'

export let myContext = createContext()
function App() {
let [mode,setMode] = useState(false)
  return (
    <myContext.Provider value={{mode,setMode}}>
      <List />
      <hr></hr>
      <Cards />
      <hr></hr>
      <Table/>
      <hr></hr>
      <Accordions />
      <hr />
      <Acc />
      <hr />
      <UseStateEx1/>
      <hr />
      <UseEffectEx1/>
    </myContext.Provider>
  )
}

export default App
