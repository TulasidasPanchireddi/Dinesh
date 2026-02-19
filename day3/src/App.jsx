import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrintName from './Componenets/PrintName';
import PrintAge from './Componenets/PrintAge';
import Demo from './Componenets/Demo';
import CompA from './Componenets/CompA';
import CompB from './Componenets/CompB';
import CompC from './Componenets/CompC';
import Navbar from './Componenets/Navbar';


function App() {
 let x = 20;

  return (
    <>
      <PrintName username = 'john'/>
      <PrintAge age={x} />
      <Demo username='john' age={20}/>
      <Demo />
      <CompA x={x}/>
      <hr></hr>
    <Navbar />
    
    </>
  )
}

export default App
