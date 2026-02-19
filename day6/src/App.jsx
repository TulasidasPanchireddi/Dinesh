import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Inline from './components/Inline'
import Internal from './components/Internal'
import GlobalCssEg1 from './components/GlobalCssEg1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Inline />
     <hr />
     <Internal />
     <hr />
     <GlobalCssEg1 />
    </>
  )
}

export default App
