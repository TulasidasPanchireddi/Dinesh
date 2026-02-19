
let data = [
    {id:1,location:'Bengaluru',time:'Hours: 7:00 pm - 4:00 am'},
    {id:2,location:'Mangalore',time:'Hours: 7:00 pm - 4:00 am'},
    {id:3,location:'Manipal',time:'Hours: 7:00 pm - 4:00 am'},
    
]

let data1 = [
    {id : 1,path : 'https://www.knight-bite.com/res/instagram.svg'},
    {id : 2,path : 'https://www.knight-bite.com/res/facebook.svg'},
    {id : 3,path : 'https://www.knight-bite.com/res/twitter.svg'},
    {id : 4,path : 'https://www.knight-bite.com/res/linkedin.svg'},
    {id : 5,path : 'https://www.knight-bite.com/res/youtube.svg'},
]

const About1 = () => {
  return (
    <div className='about_container'>
            <div className='item'>
                <img src='../images/about2.png' />
            </div>
            <div className='item'>
               Knight Bite started with the idea to serve all the hungry nocturnals who find it really difficult to order late night muchies. KB brought together late night eaters and helped them order delicious meals at their convenience via Knight Bite App and call.
            </div>
            <div className="item">
                <p>Knight Bite is one such concept which was highly successful in adapting to the emerging market.</p><br></br>
                <p>Biters (customers), accepted and loved the KB app that made the ordering process much more easier. In two weeks of the release of the app, it was trending on top food apps and was downloaded by more than 5000 users across Mangalore and Manipal.</p>
            </div>
            <div className="item">
                <img src='../images/about3.png' height={300} width={500} />
            </div>
            <div className="item">
                <img src='../images/about4.png' height={300} width={500}/>
            </div>
            <div className="item">
                Going forward, our aim is to help and bring smiles in many more faces and cover many more cities across India and around the world.
            </div>
            <div className='item'>
                <h1>Location</h1><br />
                {
                    data.map(({id,location,time})=>{
                        return (
                            <p key={id}>
                                <span>{location}</span> 
                                <span>{time}</span>
                            </p>
                        )
                    })
                }
              
            </div>
             
           <div>
             <h1>Follow us</h1><br /><br />
             <div className="icons">
              
                {
                    data1.map(({id,path},ind)=>{
                        return(
                            <img src={path} key={ind} />
                        )
                    })
                }
            </div>
           </div>
        
    </div>
  )
}

export default About1
