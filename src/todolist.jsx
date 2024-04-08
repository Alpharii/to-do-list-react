import { useState } from 'react'
import './App.css'

function ToDoList(){
    const addtask = () => {

    }
    

    return(
    <div>
        <h2>ToDo App</h2>
        <input 
        type="text"
        placeholder='Masukan Kegiatanmu' />
        <button onClick={addTask}><span>add +</span></button>
    </div>
    ) 
}

export default ToDoList