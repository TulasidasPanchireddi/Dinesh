import { useState } from "react"
import Create from "./componenets/Create"

import Display from "./componenets/Display"


function App() {
  let [load,setLoad]= useState(false)

  return (
    <>
      <Create load={load} setLoad={setLoad} />
      <Display load={load} setLoad={setLoad}  />
     
    </>
  )
}

export default App
