import React from 'react'

const PrintAge = ({age}) => {
  return (
    <div>
      Age - {age || 0}
      {/* <h1>age - {age && 0}</h1> */}
    </div>
  )
}

export default PrintAge
