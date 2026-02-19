import { useState } from "react";



const StateEg8 = () => {
    let frontend = ['Html','Css','JS','ReactJS'];
    let backend = ['java','python','.Net'];
    let database = ['sql','Mongodb'];
    let [state,setState] = useState(frontend)
  return (
    <>
    <button onClick={()=>{setState(frontend)}}>Frontend</button>
    <button onClick={()=>{setState(backend)}}>Backend</button>
    <button onClick={()=>{setState(database)}}>Database</button>
    <ul>
        {
            state.map((ele)=>{
                return <li>{ele}</li>
            })
        }
    </ul>
    </>
  )
}

export default StateEg8
