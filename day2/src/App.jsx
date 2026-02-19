import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PropsEg1 from './components/PropsEg1';
import PropsEg2 from './components/PropsEg2';
import PropsEg3 from './components/PropsEg3';
import PropsEg4 from './components/PropsEg4';
import PropsEg5 from './PropsEg5';
import PropsEg6 from './PropsEg6';
import PropsEg7 from './components/PropsEg7';
import PropsEg8 from './components/PropsEg8';
import PropsEg9 from './components/PropsEg9';
import PropsEg10 from './components/PropsEg10';




function App() {
  let name = 'John';
  let num = 10000;
  let technologies = ['Java','Sql','Spring','React'];
  let address = {area : 'Punjagutta',pincode : 532001, landmark : "JSPIDERS"}
  let bool = true;
  let und = undefined;
  let nullValue = null;
  let sayHi = ()=>console.log("hello");
  
  let students = [
   
  {
    id: 1,
    name: "John",
    technologies: ['java','spring','react','sql'],
    address: { area: "JH", pincode: 532001, landmark: 'PySpiders' },
    bool: false
  },
  {
    id: 2,
    name: "Miller",
    technologies: ['python','Django','react','sql'],
    address: { area: "Punjagutta", pincode: 500020, landmark: 'QSpiders' },
    bool: true
  },
  {
    id: 3,
    name: "Alice",
    technologies: ['javascript','node','mongo'],
    address: { area: "Ameerpet", pincode: 500016, landmark: 'JSpiders' },
    bool: false
  },
  {
    id: 4,
    name: "Robert",
    technologies: ['java','springboot','mysql'],
    address: { area: "Madhapur", pincode: 500081, landmark: 'Cyber Towers' },
    bool: true
  },
  {
    id: 5,
    name: "Sophia",
    technologies: ['python','flask','sql'],
    address: { area: "Gachibowli", pincode: 500032, landmark: 'DLF' },
    bool: false
  },
  {
    id: 6,
    name: "David",
    technologies: ['react','redux','typescript'],
    address: { area: "Kukatpally", pincode: 500072, landmark: 'Forum Mall' },
    bool: true
  },
  {
    id: 7,
    name: "Emma",
    technologies: ['angular','java','spring'],
    address: { area: "Begumpet", pincode: 500016, landmark: 'Lifestyle' },
    bool: false
  },
  {
    id: 8,
    name: "Daniel",
    technologies: ['node','express','mongo'],
    address: { area: "HiTech City", pincode: 500081, landmark: 'Mindspace' },
    bool: true
  },
  {
    id: 9,
    name: "Olivia",
    technologies: ['python','pandas','ml'],
    address: { area: "SR Nagar", pincode: 500038, landmark: 'Metro Station' },
    bool: false
  },
  {
    id: 10,
    name: "James",
    technologies: ['c++','data structures','algorithms'],
    address: { area: "Mehdipatnam", pincode: 500028, landmark: 'PVNR Expressway' },
    bool: true
  }
]


  return (
    <>
   <PropsEg1 name = {name} />
   <PropsEg2  num = {num}/>
   <PropsEg3 technologies={technologies}/>
   <PropsEg4 address = {address}/>
   <PropsEg5 bool ={bool} />
   <PropsEg6 und={und}/>
   <PropsEg7 nullVaue = {nullValue}/>
   <PropsEg8 name = {name} num = {num} technologies = {technologies} address={address} bool={bool}/>
   {
    students.map(({id,name,technologies,address,bool})=>{
      return (
        <PropsEg9 key={id} name={name} technologies={technologies} address={address} bool={bool}/>
      )
    })
   }
   <PropsEg10 sayHi = {sayHi}/>
    </>
  )
}

export default App
