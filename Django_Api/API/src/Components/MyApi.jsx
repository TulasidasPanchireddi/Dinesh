import axios from "axios";
import { useEffect, useState } from "react";

const MyApi = () => {
  const [state, setState] = useState([]);

  const fetchApi = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/");
      setState(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {state.map(({ id,name,images,source,destination }) => (
        <div key={id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <img src={images} style={{height:"100px",width:"100px"}} alt="" />
          <p>{id}</p>
          <p>{name}</p>
          <p>{source}</p>
          <p>{destination}</p>
        </div>
      ))}
    </div>
  );
};

export default MyApi;
