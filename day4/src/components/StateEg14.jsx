import { useState } from "react";

const StateEg14 = ()=>{
    let[mode,setMode]= useState(false); 
    const divStyle = {
        backgroundColor : mode ? 'black' : 'white',
        color : mode ? "white" : "black",
        height : '100vh',
        padding : '20px'
    }   
    return(
    <div>
        <div style={divStyle}>
            <h1>{mode ? 'Dark mode' : 'Light Mode'}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cum.</p>
        </div>
        <button onClick={()=>setMode(!mode)}>{mode ? "Dark":"Light"}</button>
    </div>
    )
}
export default StateEg14;