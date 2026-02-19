const PropsEg9 = ({id,name,technologies,address,bool}) => {
  return (
    <div id="container">
      <h1>My name is {name}</h1>
      <ul>
        <h4>My skills include</h4>
        {
          
          technologies.map((ele)=>{
          return (
            
           <li> {ele}</li>
          )
        })
        }
      </ul>
      <p>Address is {address.area}<br></br>Pincode :{address.pincode}<br></br>landmark:{address.landmark}</p>
       
       <h4> Fresher/Experience - {bool ? 'Fresher':'Experience'}</h4>
      
    </div>
  )
}

export default PropsEg9
