import { createContext } from "react"
import SearchEg from "./Components/SearchEg"
import Task from "./Components/Task"

export let myContext = createContext()
let name = 'tualsi'

function App() {
 

  return (
    <myContext.Provider value={name}>
    <SearchEg/>
    <Task/>
    </ myContext.Provider>
  )
}

export default App




