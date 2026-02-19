import CreateData from "./components/CreateData"
import DeleteData from "./components/DeleteData"
import FetchEg1 from "./components/FetchEg1"
import FetchEg2 from "./components/FetchEg2"
import Read from "./components/Read"
import UpdateData from "./components/UpdateData"




function App() {
  return (
    <>
     {/* <FetchEg1 />
     <hr />
     <FetchEg2 /> */}

     <Read />
     <DeleteData />
     <UpdateData />
     <CreateData />
    </>
  )
}

export default App
