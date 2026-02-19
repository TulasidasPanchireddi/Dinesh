import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.email === "tulasi@gmail.com" && state.password === "1234") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-[250px] m-auto">
          <input className="border p-2" type="email" placeholder="email" name="email" value={state.email} onChange={handleChange} />
          <input className="border p-2" type="password" placeholder="password" name="password" value={state.password} onChange={handleChange} />
          <button type="submit" className="border p-2 w-40 m-auto">Login</button>
        </form>
    </div>
  );
};

export default Login;
