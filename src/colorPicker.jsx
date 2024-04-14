import { useState } from "react";
import './App.css'

function ColorPicker (){
    const [color, setColor] = useState('#ffffff');
    const handleColorChange = (event) => {
        setColor(event.target.value)
    }
    return (
        <div>
            <h1>Color Pickers</h1>
            <div className="color-container" style={{backgroundColor: color}}></div>
            <p>selected color is : {color}</p>
            <p>Select a color :   <input type="color" value={color} onChange={handleColorChange} /></p>
        </div>
    )
}

export default ColorPicker