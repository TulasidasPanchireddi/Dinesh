let data = [
    {id : 1,path : 'https://www.knight-bite.com/res/franchise/1.svg',title : 'LOW INVESTMENT',description : 'No need of prime roadside location, interior decor. A office desk and any well hygenic kitchen space is enough.'},
    {id : 2,path : 'https://www.knight-bite.com/res/franchise/2.svg',title : 'LOW MAINTAINANCE',description : 'The hygiene, rent, staff and storage is the only maintenance the franchise would have to focus on.'},
    {id : 3,path : 'https://www.knight-bite.com/res/franchise/3.svg',title : 'BASIC SKILLSET',description : 'Anyone with basic training can step into the shoes of the staff. No serious training is required. Materials are sent.'},
    {id : 4,path : 'https://www.knight-bite.com/res/franchise/4.svg',title : 'IN-HOUSE POS',description : 'POS will be provided to manage and track orders with ease. All the applications are interconnected to the POS. Moreover call centre customer support will also be provided.'},
    {id : 5,path : 'https://www.knight-bite.com/res/franchise/5.svg',title : 'GOOD PROFIT MARGIN',description : 'Establishment running cost is much lesser than traditional restaurant. You are in for a good profit margin.'},
]

const Franchise2 = () => {
  return (
    <div>
        <h1 id="heading">Key Benefits Of Knight Bite Franchise</h1><br /><br />
      <div className="franchise_container">
        {
            data.map(({id,path,title,description})=>{
                return (
                    <div id="fra_item">
                    <img src={path} height={100} width={100} />
                    <h4>{title}</h4>
                    <p>{description}</p>
                    </div>

                )
            })
        }

      </div>
    </div>
  )
}

export default Franchise2
