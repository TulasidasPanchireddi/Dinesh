import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [state, setState] = useState([])

  const fetchingUsers = async () => {
    const { data } = await axios.get("https://api.escuelajs.co/api/v1/users")
    setState(data)
  }

  useEffect(() => {
    fetchingUsers()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border ">
      {
        state.map(({ id, name, email , password, avatar}) => (
          <div key={id} className='border'>
            <img src={avatar} alt="" />
            <h2>Username: {name}</h2>
            <p>Email: {email}</p>
            <p>Password:{password}</p>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default Users
