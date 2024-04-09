//belajar usestate dulu akwokwwok :v

import { useState } from 'react'
import './App'

function Count (){
    const [Count, setCount] = useState(0);
    const [Text, setText] = useState('Hello');
    const HandleText = () => {
        setText(Text === 'Hello' ? 'World':'Hello');
    }

    return(
        <div>
            <h1>counter = {Count}</h1>
            <button onClick={() => setCount(Count+1)}>Tambah</button>
            <h1>{Text}</h1>
            <button onClick={HandleText}>Change Text</button>
        </div>
    )
}

export default Count