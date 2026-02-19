let cards_data = [
  { path: "https://cdn.pixabay.com/photo/2023/12/16/19/33/christmas-8453173_1280.jpg", title: "glass", price: 500 },
  { path: "https://cdn.pixabay.com/photo/2025/10/29/12/49/jingle-bells-9924928_1280.jpg", title: "balls", price: 300 },
  { path: "https://cdn.pixabay.com/photo/2025/12/08/11/05/pinecone-10001896_1280.jpg", title: "tree", price: 400 }
]
const Cards = () => {
  return (
    <div className="cards_container">
      {
        cards_data.map(({path,title,price},ind)=>{
            return (
                <div key={ind} className="card">
                    <img src={path} height={200} width={200}></img>
                    <h2>{title}</h2>
                    <p>{price}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Cards

