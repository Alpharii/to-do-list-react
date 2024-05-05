import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'
import './box.css'

export const UserContext = createContext()

export const ComponentA = () => {
  const [user, setUser] = useState('Bintang')
  return (
    <div className='box'>
      <h1>Component A</h1>
      <p>{`Hello ${user}`}</p>
      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA