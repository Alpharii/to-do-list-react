import React, { useState } from 'react'
import '../App.css'

export const UpdateArray = () => {
    const [food, setFood] = useState(['Apple', 'Orange', 'Banana'])

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setFood(f => [...f, newFood])
    }
    const handleRemoveFood = (index) =>{
        setFood(food.filter((_, i) => i !== index))
    }

  return (
    <div>
        <h1>List of food</h1>
        <ul>
            {food.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder='Enter Food Name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default UpdateArray