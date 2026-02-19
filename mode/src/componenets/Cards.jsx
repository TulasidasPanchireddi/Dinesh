import React from 'react'

const Cards = ({mode,setMode,state,setState,cart,setCart}) => {
    let cards_data = [
        {id : 1,title : "Dress",price : "1000"},
        {id : 2,title : "Belt",price : "2000"},
        {id : 3,title : "Pant",price : "3000"},
    ]
    let handeleClick = (obj)=>{
       
        let bool = cart.some((object)=>object.id === obj.id)
        if(bool ===false){
            setCart([...cart,obj])
             setState(state + 1)
        }
        else{
            alert("Already present in cart")
        }
    }

    
  return (
    <div className="cards">
        {
            cards_data.map((obj)=>{
                let {id,title,price} = obj
                return (
                 
            <div className={`card ${mode ? 'dark' : 'light'}`} key={id}>
                <h3>{title}</h3>
                <p>${price}</p>
                    <button onClick={() => handeleClick(obj)}>ADD</button>
            </div>

                )
            })
        }
    </div>
  )
}

export default Cards
