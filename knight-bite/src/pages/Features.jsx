let data = [
    {
        path : "https://www.knight-bite.com/res/index/feature-1.svg",
        title : "Late Night Delivery Till 4 am"
    },
    {
        path : "https://www.knight-bite.com/res/index/feature-2.svg",
        title : "Order on App Or Call 080-4710607"
    },
    {
        path : "https://www.knight-bite.com/res/index/feature-3.svg",
        title : "Delivery within 40 mins"
    },
    {
        path : "https://www.knight-bite.com/res/index/feature-4.svg",
        title : "Food for every kind of hunger"
    },
    {
        path : "https://www.knight-bite.com/res/index/feature-5.svg",
        title : "Place Bulk orders through App"
    }
    

]
const Features = () => {
  return (
   <div className="features">
   <h1>Features</h1>
    <div className="features_container">
        
        {
            data.map(({path,title},ind)=>{
                return (
                   <div className="features_cards" key={ind}>
                     <img src={path} height={200} width={200}/>
                    <p>{title}</p>
                   </div>
                )
            })
        }

    </div>

   </div>
  )
}

export default Features
