import React, { useState } from 'react'

const StateEg10 = () => {

  const student = [
    { id: 101, name: 'John', subject: 'Python' },
    { id: 102, name: 'King', subject: 'Java' },
    { id: 103, name: 'Miller', subject: 'React' }
  ]

  const trainer = [
    { id: 201, name: "Smith", subject: "Python" },
    { id: 202, name: "Anderson", subject: "Java" },
    { id: 203, name: "Williams", subject: "React" }
  ]

  const [state, setState] = useState(student)

  return (
    <>
      <button onClick={() => setState(student)}>Students</button>
      <button onClick={() => setState(trainer)}>Trainers</button>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody>
          {
            state.map(({ id, name, subject }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{subject}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default StateEg10
