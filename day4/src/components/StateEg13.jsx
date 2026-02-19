import { useState } from "react"
import { CgMathPlus } from "react-icons/cg";
import { ImCross } from "react-icons/im";

let acc_data = [
    {
    id : 1,
    question : "What is Netflix?",
    answer : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
    },
    {
    id : 2,
    question : "How much does Netflix cost?",
    answer : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month."
    },
    {
    id : 3,
    question : "Where can I watch?",
    answer : "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
    id : 4,
    question : "How do I cancel?", 
    answer : "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },

]
const StateEg13 = () => {
  let [mode , setMode] = useState(false)
  return (
   <>
   <div className="accordian">
    {
        acc_data.map(({id,question,answer})=>{
            return <Acc mode = {mode} key={id} id={id} question={question} answer={answer}/>
        })
    }
   </div>
   <button onClick={()=>{setMode(!mode)}}>{mode?'Light Mode':"Dark Mode"}</button>
   </>
  )
}

export default StateEg13

const Acc = ({id,question,answer,mode})=>{
    let [state,setState] = useState(false)
    return (
    
         <>
          <div className="acc">
            <h3 className={mode ? 'dark' : 'light'} onClick={()=>{setState(!state)}}>{question}  
                <span>{id}.{question}</span>
                <span>{state ? <ImCross /> : <CgMathPlus />}</span>
                </h3>
           
          </div>
          <div>
            <p>{state ? answer : ''}</p>
          </div>
         </>
        
    )
}



