import axios from "axios";
import React, { useState } from "react";

const UpdateData = () => {
  const [state, setState] = useState({username: "",email: "",id: ""});
  const [form, setForm] = useState(false);

  const fetchApi = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`http://localhost:3000/posts/${state.id}`);
      setState(data);
      setForm(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const updateApi = async (e) => {
    e.preventDefault();
    try {
      let x = await axios.put(`http://localhost:3000/posts/${state.id}`,
        {
          id : state.id,
          username: state.username,
          email: state.email
         
        }
      );
      setState({username: "",email: "",id: ""})
       setForm(false)
      alert(x.statusText);
     
      
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
        <form onSubmit={fetchApi}>
            <input type="text" name="id" value={state.id} onChange={handleChange} placeholder="Enter the id"/>
            <button type="submit">Submit</button>
        </form>

     
       {form && (
        <form onSubmit={updateApi}>
          <input type="text" name="username" value={state.username} onChange={handleChange} placeholder="Username"/>
          <input type="text" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateData;
