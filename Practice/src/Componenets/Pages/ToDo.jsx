import React, { useState } from 'react'

const ToDo = () => {

    let [task, setTask] = useState("")
    let [list, setList] = useState([])
    let [editIndex, setEditIndex] = useState(null)   // ✅ added

    let handleChange = (e) => {
        setTask(e.target.value)
    }

    let addTask = () => {
        if (task === "") return

        if (editIndex !== null) {
            // ✅ update
            let newList = list.map((ele, ind) => {
                return ind === editIndex ? task : ele
            })
            setList(newList)
            setEditIndex(null)
        } else {
            // ✅ add
            setList([...list, task])
        }

        setTask("")
    }

    let deleteTask = (index) => {
        let newList = list.filter((ele, ind) => ind !== index)
        setList(newList)
    }

    let updateTask = (index) => {
        setTask(list[index])  
        setEditIndex(index)    // ✅ store index
    }

    return (
        <div>
            <input
                type="text"
                value={task}
                placeholder="enter the task"
                onChange={handleChange}
            />

            <button onClick={addTask}>
                {editIndex !== null ? "Update" : "Add"}
            </button>

            <ul>
                {
                    list.map((ele, index) => {
                        return (
                            <li key={index}>
                                {ele}
                                <button onClick={() => deleteTask(index)}>delete</button>
                                <button onClick={() => updateTask(index)}>edit</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDo
