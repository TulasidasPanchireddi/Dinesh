import React from 'react'
import CompC from './CompC'

const CompB = ({x}) => {
  return (
    <div>
      CompB
      <CompC x={x}/>
    </div>
  )
}

export default CompB
