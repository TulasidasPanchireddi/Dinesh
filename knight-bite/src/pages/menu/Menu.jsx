
let data = [
  {
    id : 1,
    path:"../images/bite1.png",
    title : "BURGER"
  },
  {
    id : 2,
    path:"../images/bite2.png",
    title : "FRIES/STARTERS"
  },
  {
    id : 3,
    path:"../images/bite3.png",
    title : "MAIN COURSE"
  },
  {
    id : 4,
    path:"../images/bite4.png",
    title : "DRINKS"
  },
  {
    id : 5,
    path:"../images/bite5.png",
    title : "WRAPS"
  },
  {
    id : 6,
    path:"../images/bite6.png",
    title : "DESSERTS"
  },

]

const Menu = () => {
  return (
    <div className="menu1">

      {
        data.map(({id,path,title})=>{
          return  (
            <div key={id} className="menu2">
              <img src={path} />
              <h1>{title}</h1>
              <button>+</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Menu
