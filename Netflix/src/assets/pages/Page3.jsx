import React from 'react'

let data = [
    {
        id : 1,
       title : "Enjoy on your TV.",
        desc : "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        imgsrc : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    },
    {
        id : 2,
        title : "Download your shows to watch offline.",   
        desc : "Save your favourites easily and always have something to watch.",
        imgsrc : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
    },
    {
        id : 3, 
        title : "Watch everywhere.",
        desc : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
        imgsrc : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
    },
    {
        id : 4,
        title : "Create profiles for kids.",
        desc : "Send kids on adventures with their favourite characters in a space made just for them—free with your membership.",
        imgsrc : "https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
    }
]
const Page3 = () => {
  return (
    <>

      <div className='container2'>
       
      {
        data.map(({id,title,desc,imgsrc})=>{
            return(
                
              <div key={id} className='item2'>
                <h1>{title}</h1>
                <p>{desc}</p>
                <img src={imgsrc} alt="" height={50} width={50}/>
              </div>
                       

            )
        })
      }
   
  </div>
    </>
  )
}

export default Page3
