


const Franchise3 = () => {
  return (
   <>
    <h1 style={{ textAlign: "center", color:"rgb(72, 71, 71)" }}>Apply Here</h1>
    <p style={{textAlign : "center",paddingTop : "20px"}}>Request for initial meeting</p>

    <div id="fra3">
    
      <img src="../images/fra.png" height={520}  width={800}/>
      <form action="" id = "form1">
        <input type="text" placeholder="First Name*"/>
        <input type="text" placeholder="Second Name*"/>
        <input type="tel" placeholder="Contact Number" />
        <input type="email" placeholder="Email*" />
        <input type="text" placeholder="Target Market(Indian State/City)*" />
        <input type="text" placeholder="No. of outlets planned*" />
        <input type="text" placeholder="Message" />
        <button id="btn1">SEND REQUEST</button>
      </form>
      
    </div>
   </>
  );
};

export default Franchise3;
