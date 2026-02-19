import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../App"; 

const Products = () => {
  const { cartProducts, setCartProducts } = useContext(MyContext);

  const [state, setState] = useState({id: "",title: "",price: "",description: "",category: "",image: "fg",rating: { rate: 0 }});

  const { identity } = useParams();


  let fetchApi=async()=>{
    try{
      let {data}=await axios.get('https://fakestoreapi.com/products');
      console.log(data);
      let x=data.filter(obj=>obj.id===Number(identity));
      console.log(x[0]);
      
      setState(x[0]); 
    }
    catch(err){console.log(err);}
  }
  useEffect(()=>{
    fetchApi()
  },[])

  const bool = cartProducts.some(obj => obj.id === state.id);

  const handleToCart = () => {
    if (bool === false) {
      setCartProducts([...cartProducts, {...state,quantity : 1}]);
    }
  };

  return (
    <>
      <div className="flex justify-around p-3 bg-blue-500 text-white text-xl font-bold">
        <Link to="/">Home</Link>
        <Link to="/cart">CART <sup>{cartProducts.length}</sup></Link>
      </div>

      <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-xl transition duration-300">
        <img src={state.image} alt="err" className="h-48 w-full object-contain mb-3"/>

        <div className="w-[40%] flex flex-col gap-6">
          <h3 className="font-semibold text-gray-800 text-sm">{state.title}</h3>
          <p>{state.description}</p>
          <p className="text-lg font-bold text-green-600 mt-2">${state.price}</p>
          <p>Rating: {state.rating.rate}</p>

          {
            (bool === false) ? 
              <button onClick={handleToCart} className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                Add to Cart
              </button>
             : 
              <button className="bg-gray-400 p-3 text-white rounded-xl text-xl cursor-not-allowed">
                Added
              </button>
            
          }
        </div>
      </div>
    </>
  );
};

export default Products;
