import React, { useState } from 'react'
import { CgMathPlus } from "react-icons/cg";
import { ImCross } from "react-icons/im";

const Acc = () => {
    let acc_data = [
        {
            id : 1,
            question : "What is HTML?",
            answer : "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and web applications."
        },
        {
            id : 2, 
            question : "What is CSS?",
            answer : "CSS stands for Cascading Style Sheets. It is used to style and layout web pages, including the design, colors, and fonts."
        },  
        {
            id : 3,
            question : "What is JavaScript?",
            answer : "JavaScript is a programming language that allows you to implement complex features on web pages, such as interactive content, animations, and dynamic updates."
        },
        {
            id : 4,
            question : "What is React?",
            answer : "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently."
        }
    ]

  return (
    <div>
        {
            acc_data.map(({id,question,answer})=>{
                return <Accordian id = {id} question = {question} answer  = {answer} key={id} />
            })
        }
    </div>
  )
}

export default Acc

const Accordian = ({id,question,answer})=>{
        let [state,setState] = useState(false)
    return (
        <div>
            <h1 onClick={()=>{setState(!state)}}>
                {id}.{question}
            <span>{state ? <ImCross /> : <CgMathPlus />}</span>
            <p>{state?answer:''}</p>
            </h1>
        </div>
    )
}
