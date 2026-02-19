let student_data = [
    {id : 1, name : 'john', course : 'JFS'},
    {id : 2, name : 'king', course : 'PFS'},
    {id : 3, name : 'Miller', course : 'Devops'}
]
const Table = () => {
  return (
    <table border={2} cellPadding={2}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
            </tr>
        </thead>
        <tbody>
            {
                student_data.map(({id,name,course})=>{
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{course}</td>
                        </tr>
                    )
                })
            }
                
        </tbody>
    </table>
  )
}

export default Table
