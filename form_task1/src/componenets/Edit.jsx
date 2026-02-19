import axios from "axios"
import { useState } from "react"

const Edit = ({ item}) => {
  const [editData, setEditData] = useState(item)
  const [show, setShow] = useState(false)
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditData({ ...editData, [name]: value })
  }

  const updateData = async () => {
    try {
      await axios.put(`http://localhost:3000/posts/${item.id}`, editData)
      setShow(false)
    } 
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button onClick={() => setShow(true)}>Edit</button>

        {show && (
        <form style={{ border: "1px solid black", padding: "10px" }}>
          <input name="username" value={editData.username} onChange={handleChange} />
          <input name="email" value={editData.email} onChange={handleChange} />
          <input name="password" value={editData.password} onChange={handleChange} />
          <input name="mobile" value={editData.mobile} onChange={handleChange} />
          <button onClick={updateData}>Update</button>
        </form>
      )}
    </>
  )
}

export default Edit
