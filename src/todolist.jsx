import React, { useState } from 'react'
import './App.css'

export const Todolist = () => {
    const [task, setTask] = useState([])

    const handleAddTaskButton = () => {
        const newTask = document.getElementById('newTask').value
        document.getElementById('newTask').value = '';
        setTask(task => [...task, newTask])
    }
    const handleRemoveTask = (index) => {
        setTask(task.filter((_,i) => i !== index))
    }

  return (
    <div>
        <h1>Todo List App</h1>
        <input type="text" id='newTask' placeholder='Add a task' />
        <button onClick={handleAddTaskButton}>Add Task</button>
        <ul>
            {task.map((task,index) => 
            <div>
                <li key={index}>{task}</li>
                <button onClick={() => handleRemoveTask(index)}>Remove task</button>
            </div>
            )}
        </ul>
    </div>
  )
}

export default Todolist
