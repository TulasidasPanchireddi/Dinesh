import { useState } from "react"
import { CgMathPlus } from "react-icons/cg";
import { ImCross } from "react-icons/im";

let data = [
    {
    id : 1,
    question : "What is Netflix?",
    answer : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
    },
    {
    id : 2,
    question : "How much does Netflix cost?",
    answer : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month."
    }
]
const Accordions = () => {
  let [state , setstate] = useState(null)
  return (
    <div>
      {
        data.map(({id,question,answer})=>{
            return (
              <>
               <div onClick={()=>setstate(state===id?null:id)} style={{border : "2px solid red", display:"flex", justifyContent : "space-between",alignItems:"center", padding:"0px 80px", backgroundColor:"black",color:"white"} } key={id}>
                 <h2>{question} </h2>
                <button onClick={()=>setstate(state===id?null:id)}>{state==id?<ImCross />:<CgMathPlus /> }</button>
                </div>
                {state === id && (
                <div style={{ border: "2px solid red" }}>
                <p>{answer}</p>
                </div>
)}
              </>
            )
        })
      }
    </div>
  )
}

export default Accordions



