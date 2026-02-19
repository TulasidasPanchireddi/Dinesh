import React, { useState } from 'react'

const StateEg9 = () => {
    let birds = [ "https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_1280.jpg","https://cdn.pixabay.com/photo/2020/06/05/02/56/great-spotted-woodpecker-5261220_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/12/27/14/58/owl-9294302_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/05/03/11/20/bird-7967356_1280.jpg"
    ]
    let flowers = [
  "https://cdn.pixabay.com/photo/2020/05/17/12/58/widow-flower-5181497_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/05/27/22/18/meadow-5229169_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/07/05/19/01/tin-3518967_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/04/02/17/18/purple-flower-7107429_1280.jpg"

]

let cars = [
  "https://cdn.pixabay.com/photo/2013/08/29/04/37/automobile-176989_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/01/07/14/12/man-8493246_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857_1280.jpg"

]

    let [state,setState] = useState(birds)

  return (
    <>
    <button onClick={()=>{setState(birds)}}>Birds</button>
    <button onClick={()=>{setState(flowers)}}>flowers</button>
    <button onClick={()=>{setState(cars)}}>Cars</button>

    <div style={{ display: "flex", justifyContent:"space-around" }}>

        {
            state.map((ele)=>{
                return <img src={ele} alt="" height={200} width={200} />
            })
        }
    </div>
    </>
  )
}


export default StateEg9
