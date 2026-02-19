import { RouterProvider } from "react-router-dom"
import { router } from "./Componenets/Routing/Router"
import ToDo from "./Componenets/Pages/ToDo"
// import Task from "./Componenets/collection/Task"




function App() {
  

  return (
    <>
     <RouterProvider router={router}/>
     {/* <Task/> */}
     <ToDo/>
    </>
  )
}

export default App
