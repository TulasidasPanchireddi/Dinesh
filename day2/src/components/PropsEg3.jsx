const PropsEg3 = ({technologies}) => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {
            technologies.map((tech)=>{
                return <li>{tech}</li>
            })
        }
      </ul>
    </div>
  )
}

export default PropsEg3
