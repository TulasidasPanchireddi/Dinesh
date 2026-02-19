import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

import Chief from "./Components/Pages/Chief";
import Men from "./Components/Collection/Men";
import Women from "./Components/Collection/Women";
import Jewellery from "./Components/Collection/Jewellery";
import Electronics from "./Components/Collection/Electronics";
import Products from "./Components/Pages/Products";
import Cart from "./Components/Pages/Cart";
import NavBar from './Components/Pages/NavBar';
import Address from "./Components/CRUD/Address";
import Create from "./Components/CRUD/Create";
import Footer from "./Components/Pages/Footer";
import TermsAndConditions from "./Components/Pages/TermsAndConditions";


export const MyContext = createContext(); 

function App() {
  let [load,setLoad] = useState(false)
  const [cartProducts, setCartProducts] = useState([]); 

  return (
    <MyContext.Provider value={{ cartProducts, setCartProducts,load,setLoad }}>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Chief />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/products/:identity" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/terms' element={<TermsAndConditions />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </MyContext.Provider>
  
  );
}

export default App;
