import React,{ useState } from 'react'
import './buttonthem.css'
export default function Buttontheme() {
    const [click, setClick] = useState(false)
    const handleClic = ()=>{
        setClick(!click) 
     }


    return (
        <div class="btn-menu" >
            <div className="btn-hamburguer" onClick={handleClic}>
                <i className={click ? 'far fa-moon':'fas fa-sun'}></i>
                {/* <i className="fas fa-sun"></i> */}
                {/* <i className="far fa-moon"></i> */}
                {/* <div class="btn-patty"></div> */}
            </div>
        </div>
        )
}
