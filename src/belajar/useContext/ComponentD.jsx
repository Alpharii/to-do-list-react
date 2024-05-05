import React, {useContext} from 'react'
import './box.css'
import { UserContext } from './ComponentA'

export const ComponentD = () => {
  const user = useContext(UserContext)

  return (
    <div className='box'>
      <h1>Component D</h1>
      <p>{`Bye ${user}`}</p>
    </div>
  )
}

export default ComponentD