import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Edit from './Edit';

const Display = ({load,setLoad}) => {
    let [state,setState] = useState([])
    let fetchApi = async ()=>{
        try{
            let {data} = await axios.get("http://localhost:3000/posts")
            setState(data)
        }
        catch(err){
            console.log(err);
            
        }
    }
     let handleDelete = async (id)=>{
       
             try{
            let x = await axios.delete(`http://localhost:3000/posts/${id}`)
            setLoad(!load)
            alert("Deleted successfully")
            }
        catch(err){
            console.log(err);
            
        }  
    }
    useEffect(()=>{
        fetchApi()
    },[load])
  return (
    <div>
      <table border={2} cellPadding={10}>
        <thead>
            <tr>
                <td>ID</td>
                <td>Username</td>
                <td>Email</td>
                <td>Password</td>
                <td>Mobile</td>
                <td>Delete</td>
                <td>Edit</td>
            </tr>
        </thead>
        <tbody>
            {
                state.map((item)=>{
                     let {id,username,email,password,mobile} = item
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                            <td>{mobile}</td>
                            <td><button onClick={()=>{handleDelete(id)}}>Delete</button></td>
                            <td><Edit item={item}  /></td>
                        </tr>
                    )
                })

            }
        </tbody>
      </table>
    </div>
  )
}

export default Display
