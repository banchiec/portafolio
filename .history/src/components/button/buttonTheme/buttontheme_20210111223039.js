import React,{ useState } from 'react'
import './buttonthem.css'
export default function buttontheme() {
    const [click, setClick] = useState(false)

    return (
        <div class="btn-menu" >
            <a className="btn-hamburguer" href="/">
                <div class="btn-patty"></div>
                <i className="fas fa-sun"></i>
                {/* <i className="far fa-moon"></i> */}
                {/* <div class="btn-patty"></div> */}
            </a>
        </div>
        )
}
