import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ToDoList from './todolist.jsx'
import Count from './count.jsx'
import ColorPicker from './colorPicker.jsx'
import UpdateObject from './updateObject.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UpdateObject/>
  </React.StrictMode>,
)
