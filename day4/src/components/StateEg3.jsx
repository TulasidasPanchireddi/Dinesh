import {useState} from 'react'

const StateEg3 = () => {
    let [count , setCount] = useState(0)
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>count is {count}</button>
    </div>
  )
}

export default StateEg3
