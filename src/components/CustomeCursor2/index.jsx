import React,{useEffect, useRef} from 'react'
import "./style2.scss"

const CustomCursor2 = () => {
    const cursor =useRef(null)
    useEffect(()=>{
        console.log(cursor.current);

        document.addEventListener("mousemove",e=>{
            const mouseX = e.pageX;
            const mouseY = e.pageY;
            // cursor.current.setAttribute("style","top: "+ (e.pageY-10)+"px; left: "+(e.pageX-10)+"px")
            cursor.current.style.transform = `translate3d(${mouseX -cursor.current.clientWidth / 2}px, ${mouseY-cursor.current.clientHeight / 2}px, 0)`;

        })
        document.addEventListener('click', () => {
            cursor.current.classList.add("expand");

            // setTimeout(() => {
            //     cursor.classList.remove("expand");
            // }, 500)
        })
    },[])
    return (

        <div className="cursor" ref={cursor}></div>
    )
}

export default CustomCursor2
