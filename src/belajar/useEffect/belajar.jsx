import React, { useEffect, useState } from 'react'
import '../../App.css'

export const Belajar = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    useEffect(() => {
        document.title = `Count = ${count}`;
    }, [count])

    function togleTambah(){
        setCount(c => c + 1);
    }
    function togleKurang(){
        setCount(c => c - 1);
    }
    function togleChangeColor(){
        setColor(c => c === 'green' ? 'red' : 'green')
    }

  return (
    <div>
        <h1 style={{color : color}}>Count = {count}</h1>
        <button onClick={togleTambah}>Tambah</button>
        <button onClick={togleKurang}>Kurang</button><br />
        <button onClick={togleChangeColor}>change color</button>
    </div>
  )
}

export default Belajar
