import React,{ useState } from 'react'
import './buttonthem.css'

export default function Buttontheme() {

    let luna = 'far fa-moon'
    let sol = 'fas fa-sun'
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        var theme = document.getElementsByClassName("btn-menu")
        // theme.style.backgroundColor='#fffff'
        console.log("click")
        setClick(!click) 
     }

    return (
            <div class="btn-menu" >
                <div className="btn-hamburguer" onClick={handleClick}>
                    <i className={click ? 'far fa-moon':'fas fa-sun'}/>
                </div>
            </div>
        )
}