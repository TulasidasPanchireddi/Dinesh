import React, { useContext } from 'react'
import {y} from '../App'
const CompA = () => {
    let value  = useContext(y)
  return (
    <div>
        <h1>Component A</h1>
      <h1>{value}</h1>
    </div>
  )
}

export default CompA
