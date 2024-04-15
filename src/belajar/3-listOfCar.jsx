import React, { useState } from 'react'
import '../App.css'

export const ListOfCar = () => {
  const [car, setCar] = useState ([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState();
  const [carModel, setCarModel] = useState('');

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    }
    setCar(car => ([...car, newCar]))
    setCarYear(new Date().getFullYear())
    setCarMake('')
    setCarModel('')
  }
  const handleRemoveCar = (index) => {
    setCar(car.filter((_,i) => i !== index))
  }
  const handleYearChange = (event) => {
    setCarYear(event.target.value)
  }
  const handleMakeChange = (event) => {
    setCarMake(event.target.value)
  }
  const handleModelChange = (event) => {
    setCarModel(event.target.value)
  }


  return (
    <div>
        <h1>List of Car</h1>
        <ul>
          {car.map((element,index) =>
          <li key={index} onClick={() => handleRemoveCar(index)}>{element.year} {element.make} {element.model}</li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/><br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter Car Make'/><br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter Car Model'/><br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default ListOfCar