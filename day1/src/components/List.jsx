const List = () => {
    let fruits = ['mango','apple','banana','kiwi','orange']
  return (
    <ul>
        {
            fruits.map((item,ind)=>{
                return (
                    <li key={ind}>{item}</li>
                )
            })
        }
    </ul>
  )
}

export default List
