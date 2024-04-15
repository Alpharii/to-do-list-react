import { useState } from "react";
import './App.css'

function UpdateObject(){
    const [car, setCar] = useState({year: 2024, make: 'ford', model: 'mustang'});

    const handleYearChange = (e) => {
        setCar(c => ({...c, year:e.target.value}))
    }
    const handleMakeChange = (e) => {
        setCar(c => ({...c, make:e.target.value}))
    } 
    const handleModelChange = (e) => {
        setCar(c => ({...c, model:e.target.value}))
    } 

    return(
        <div>
            <h2>My car is {car.year} {car.make} {car.model}</h2>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    )
}

export default UpdateObject