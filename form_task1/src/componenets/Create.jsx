import axios from 'axios'
import { useState } from 'react'

const Create = ({load,setLoad}) => {
    let [state,setState] = useState({username:'',email:'',password:'',mobile:''})
    let fetchApi = async (e)=>{
        e.preventDefault();
       
           try{
            let x = await axios.post("http://localhost:3000/posts",state)
            alert(x.statusText)
            setState({ username: '', email: '', password: '', mobile: '' })
            setLoad(!load)

           }
        catch(err){
            console.log(err);
            
        
        } 
    }
    let handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name]:value})
    }
  return (
    <div>
      <form onSubmit={fetchApi} action="" style={{display:"flex", flexDirection:"column",gap:"10px",width:"300px", margin:"auto",border:"2px solid red",padding:"10px",marginBottom:"50px"}}>
        <input style={{padding:"10px"}} type="text"  name='username' value={state.username} placeholder='username' onChange={handleChange}/>
        <input style={{padding:"10px"}} type="email" name='email' value={state.email} placeholder='email' onChange={handleChange} />
        <input style={{padding:"10px"}} type="password"  name='password' value={state.password} placeholder='password' onChange={handleChange}/>
        <input style={{padding:"10px"}} type="tel"  name='mobile' value={state.mobile} placeholder='Mobile' onChange={handleChange}/>
        <button style={{padding:"10px",width:"200px",margin:"auto",backgroundColor:"blue",color:"white"}} >Register</button>
      </form>
    </div>
  )
}

export default Create
