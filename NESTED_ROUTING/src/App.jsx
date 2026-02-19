import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/BrowserRouter.jsx'

function App() {
 

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
