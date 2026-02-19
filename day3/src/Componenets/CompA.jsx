import React from 'react'
import CompB from './CompB'

const CompA = ({x}) => {
  return (
    <div>
      CompA
      <CompB x={x}/>
    </div>
  )
}

export default CompA
