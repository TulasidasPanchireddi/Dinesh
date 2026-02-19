import { RouterProvider } from "react-router-dom"
import { routing } from "./Roters/BrowserRouting"



function App() {
 

  return (
    <>
     <RouterProvider router={routing}></RouterProvider>
     
    </>
  )
}

export default App
