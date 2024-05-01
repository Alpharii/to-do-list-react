import React, { useEffect, useState } from 'react'

export const CountUseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });

  return (
    <div>
        <h1>count {count} times</h1>
    </div>
  )
}

export default CountUseEffect
