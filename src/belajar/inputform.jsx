import { useState } from "react";
import './App.css'

function InputForm (){
    const [inputValue, setInputValue] = useState ('')
    const [show, setShow] = useState (false)

    const inputFormHandler = (event) => {
        setInputValue(event.target.value)
    }
    const inputFormClickHandler = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>Kalkulator Tinggi Badan</h1>
            <input type="text" value={inputValue} placeholder="Masukan Tinggi Anda" onChange={inputFormHandler}/>
            <button onClick={inputFormClickHandler}>Enter</button>
            {show && <h1>Hello World</h1>}
        </div>
    )
}

export default InputForm