let data = [
    {id : 1,path : "https://www.knight-bite.com/res/franchise/footer-1.svg",title : 'Franchise Brochure'},
    {id : 1,path : "https://www.knight-bite.com/res/franchise/footer-3.svg", title :'08047192034'},
    {id : 1,path : "https://www.knight-bite.com/res/franchise/footer-2.svg",title : 'franchise@knight-bite.com'}
]

const Franchise4 = () => {

  return (
    <>
    <h1 style={{textAlign : 'center'}}>Franchise Queries</h1>
    <div id="fra4">
      
      {
        data.map(({id,path,title})=>{
            return (
                <div id="fra4_item">
                    <img src={path} />
                    <h3>{title}</h3>             
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Franchise4
