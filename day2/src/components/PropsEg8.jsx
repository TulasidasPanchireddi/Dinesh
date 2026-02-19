

const PropsEg8 = ({name,num,technologies,address,bool}) => {
  return (
    <div>
      <h2>
        My name is {name}.
        My sal is {num}.
        I know the skils.
      </h2>
      <ul>
        {
            technologies.map((tech)=>{
                return <li>{tech}</li>
            })
        }
      </ul>
      <h2>My area - {address.area}
          My pincode - {address.pincode}
          My landmark - {address.landmark}
          bool - {bool ? 'Fresher':'Experience'}
      </h2>
      
    </div>
  )
}

export default PropsEg8
