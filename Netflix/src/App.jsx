import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page1 from './assets/pages/Page1'
import Page3 from './assets/pages/Page3'
import Page4 from './assets/pages/Page4'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Page1 />
     <Page3 />
     <Page4 />
    </>
  )
}

export default App
