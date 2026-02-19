import React, { useContext } from 'react'
import {y} from '../App'
const CompB = () => {
    let value = useContext(y)
  return (
    <div>
        <h1>Component B</h1>
      <h1>{value}</h1>
    </div>
  )
}

export default CompB
