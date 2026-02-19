import React, { useContext } from 'react'
import {y} from '../App'
const CompC = () => {
    let value = useContext(y)
  return (
    <div>
      <h1>Component c</h1>
      <h1>{value}</h1>
    </div>
  )
}

export default CompC
