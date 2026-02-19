import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({email: "",password: ""});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const fetchApi = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://api.escuelajs.co/api/v1/login",state);
      localStorage.setItem("token",data.token)
      navigate("/products");
    } 
    catch (err) {
      console.log(err); 
    }
  };

  return (
    <div className="border h-screen flex justify-center items-center w-full">
      <form className="flex flex-col w-90 border justify-center items-center p-4 gap-5 bg-neutral-500" onSubmit={fetchApi}>
      <input className="border p-2 w-70" type="email" name="email" value={state.email}onChange={handleChange} placeholder="Email"/>
      <input className="border p-2 w-70" type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password"/>
      <button className="border p-2 w-50" type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
