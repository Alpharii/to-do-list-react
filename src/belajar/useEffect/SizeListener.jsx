import React, { useEffect, useState } from 'react'

export const SizeListener = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() =>{
        window.addEventListener("resize", handleSize)
        console.log('Event Added')
        return () => {
            window.removeEventListener("resize", handleSize)
            console.log('Event Removed')
        }
    },[])

    useEffect(() =>{
        document.title = `Size = ${height} x ${width}`
    }, [width,height])

    function handleSize (){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
  
    return (
    <div>
        <p>window width = {width}px</p>
        <p>window height = {height}px</p>
    </div>
  )
}

export default SizeListener  