import React, { useState } from 'react'
import './App.css'
import './todolist.css'

export const Todolist = () => {
    const [task, setTask] = useState([])

    const handleAddTaskButton = () => {
        const newTask = document.getElementById('newTask').value
        if(newTask.length > 0){
            document.getElementById('newTask').value = '';
            setTask(task => [...task, newTask])
        }
    }
    const handleRemoveTask = (index) => {
        setTask(task.filter((_,i) => i !== index))
    }
    const handleUpTask = (index) => {
        if (index > 0) {
            const updatedTask = [...task];
            const temp = updatedTask[index];
            updatedTask[index] = updatedTask[index - 1];
            updatedTask[index - 1] = temp;
            setTask(updatedTask);
        }
    }
    const handleDownTask = (index) => {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            const temp = updatedTask[index];
            updatedTask[index] = updatedTask[index + 1];
            updatedTask[index + 1] = temp;
            setTask(updatedTask);
        }
    }

  return (
    <div>
        <h1>Todo List App</h1>
        <input type="text" id='newTask' placeholder='Add a task' />
        <button onClick={handleAddTaskButton}>Add Task</button>
        <ul className='task-list'>
            {task.map((task,index) => 
            <li key={index}>{task}
                <div>
                    <button onClick={() => handleRemoveTask(index)}>Remove task</button>
                    <button onClick={() => handleUpTask(index)}>👆</button>
                    <button onClick={() => handleDownTask(index)}>👇</button>
                </div>
            </li>
            )}
        </ul>
    </div>
  )
}

export default Todolist
