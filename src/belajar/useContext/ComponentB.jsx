import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { UserContext } from './ComponentA'
import './box.css'

export const ComponentB = () => {
  const user = useContext(UserContext)
  return (
    <div className='box'>
      <h1>Component B</h1>
      <p>{`hello again ${user}`}</p>
      <ComponentC/>
    </div>
  )
}

export default ComponentB