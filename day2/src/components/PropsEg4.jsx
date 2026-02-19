const PropsEg4 = ({address}) => {
    let {area,pincode,landmark} = address
  return (
    <div>
      <h1>
        area : {area}
      </h1>
      <h1>
        pincode : {pincode}
      </h1>
      <h1>
        landmark : {landmark}
      </h1>
    </div>
  )
}

export default PropsEg4
