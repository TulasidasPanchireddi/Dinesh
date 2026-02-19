import axios from 'axios'
import { useState,useEffect } from 'react'


const Read = () => {
    let [state,setState] = useState([])
    let fetchApi = async ()=>{
        try{
            let {data} = await axios.get("http://localhost:3000/posts")
            setState(data)
        }
        catch (err){
            console.log(err);
            
        }
    }
    useEffect(()=>{
        fetchApi()
    },[])
  return (
    <div>
     
      <table border={2} cellPadding={3}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
              state.map(({id, username, email })=>{
            return(
                <tr>
                    <td>{username}</td>
                    <td>{email}</td>
                </tr>
            )
        })  
            }
        </tbody>
      </table>
    </div>
  )
}

export default Read
