import React,{ useState } from 'react'
import './buttonthem.css'

export default function Buttontheme() {

    let dark = 'far fa-moon'
    let ligth = 'fas fa-sun'
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        var theme = document.getElementsByClassName("App")
        // theme.style.backgroundColor='#fffff'
        console.log(theme)
        setClick(!click) 
     }

    return (
            <div class="btn-menu" >
                <div className="btn-hamburguer" onClick={handleClick}>
                    <i className={click ? dark : ligth}/>
                </div>
            </div>
        )
}