import { useRef } from "react"

const UncontrolledEg1 = () => {
    let usernameRef = useRef();
    let passwordRef = useRef();
    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(usernameRef.current.value,passwordRef.current.value);
        
    }
    let x = useRef()
    let handleClick = ()=>{
      if(x.current.innerText=="hello world"){
        x.current.innerText="welcome to react"
      }
      else{
        x.current.innerText="hello world"
      }
    }
  return (
    <div>
      <form  className='flex flex-col w-80' action="">
        <input className="border" type="text" name='username' placeholder="uername" ref={usernameRef}/>
        <input className="border" type="password" name='password' placeholder="password" ref={passwordRef} />
        <button className="border" onClick={handleSubmit}>submit</button>
      </form>
      <div>
        <h1 ref={x}>hello world</h1>
        <button onClick={handleClick}>click</button>
        
      </div>
    </div>
  )
}

export default UncontrolledEg1
