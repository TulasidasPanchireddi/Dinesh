import React from 'react'

const Internal = () => {
    let pstyle = {
        color : "red",
        fontSize : "20px",
        fontWeight : "bold",
        padding : "10px",
        backgroounColor : "gold"
    }
  return (
    <div>
        <p style={pstyle}>Internal Css</p>
        <p id='user2'>username : smith</p>
    </div>
  )
}

export default Internal
