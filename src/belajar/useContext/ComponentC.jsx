import React, { useContext } from 'react'
import ComponentD from './ComponentD'
import { UserContext } from './ComponentA'
import './box.css'

export const ComponentC = () => {
  const user = useContext(UserContext)

  return (
    <div className='box'>
      <h1>Component A</h1>
      <p>{`hi ${user}`}</p>
      <ComponentD/>
    </div>
  )
}

export default ComponentC