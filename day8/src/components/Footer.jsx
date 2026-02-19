import { useContext } from 'react'
import {x} from '../App'

const Footer = () => {
  let {theme} = useContext(x)
  return (
    <div className={theme?'bg-black text-white  border-2 p-4':'bg-white text-black  border-2 p-4'}>
      <ol type='none' className='flex justify-around'>
       <li>@cpy</li>
      <li>contact</li>
      <li>email</li>
      <li>address</li>
      </ol>
    </div>
  )
}

export default Footer
