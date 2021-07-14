import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import "./cursor.scss"

const Cursor = () => {
    const cursorRef=useRef(null)
    // const secondaryCursor =useRef(null);
    // const positionRef =useRef({
    //     mouseX: 0,
    //     mouseY: 0,
    //     destinationX: 0,
    //     destinationY: 0,
    //     distanceX: 0,
    //     distanceY: 0,
    //     key: -1,
    //   });
    useEffect(()=>{
    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const mouseX = clientX - cursorRef.current.clientWidth /2;
        const mouseY = clientY- cursorRef.current.clientWidth /2;
        // positionRef.current.mouseX =
        // mouseX - secondaryCursor.current.clientWidth / 2;
        // positionRef.current.mouseY =
        // mouseY - secondaryCursor.current.clientHeight / 2;
        cursorRef.current.style.transform=`translate3d(${mouseX}px ,${mouseY}px,0)`
    })
    },[])
    
    return (
        <>
        <div className="app-cursor" ref={cursorRef}/>
        {/* <div className="secondart-cursor" ref={secondaryCursor}/> */}
        </>
    )
}

export default Cursor
