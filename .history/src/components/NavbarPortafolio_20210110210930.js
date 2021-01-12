import React,{useEffect} from 'react'
import './NavbarPortafolio.css'
import './MenuDesplegable.css'
import { Navbar, Nav} from 'react-bootstrap'

export default function NavbarPortafolio() {
    const menuLateral = ()=>{
        console.log("hola")
    }

    useEffect(()=>{
        var btn = document.getElementById("material-btn");
        var hamburguer = document.querySelector(".material-hamburguer");
        var content = document.querySelector(".material-content");
        var lis = document.querySelectorAll("nav li");
        if(btn){
            console.log("entramos")
            // var btn = document.querySelector(".material-btn");
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            hamburguer.classList.toggle('material-close');
            content.classList.toggle('active');
            Array.prototype.forEach.call(lis, function(el, i){
                el.classList.toggle('active');
            });
        },true);
        }
    })
    const moveLeft= (()=> {
        console.log("izquierda")

    })

    return (
        <>
        <nav id="navbar1" class="navbar navbar-expand-md navbar-dark ">
            <div className="container-fluid"> 
            
                <span class="navbar-brand">
                    <div className="lista-logo">
                        <div className="contenedor-menor menor-mayor">
                            <span className="menor-mayor">&lt;</span>
                        </div>
                        <span className="first-text-logo">Ivan</span>
                        <span className="text-logo"><span>ec16</span></span>
                        <span className="barra-inclinada">/</span>
                        <span className="contenedor-mayor menor-mayor">&gt;</span>
                    </div>
                </span>
            </div>
        </nav>

        <div class="menu-wrapper">
            <div class="material-menu">
                <div id="material-btn">

                <div class="material-hamburguer" onClick={moveLeft}>
                    <div class="material-patty"></div>
                    <div class="material-patty"></div>
                    <div class="material-patty"></div>
                </div>

                </div>
                <div class="material-content">
                <nav>
                    <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Sobre_mi</a></li>
                    <li><a href="/">Habilidades</a></li>
                    <li><a href="/">Portafolio</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>

        {/* <div className="navbar-menu">
            <ul className="navbar-list">
                <li>About me</li>
                <li>Skills</li>
                <li>Proyectos</li>
            </ul>  
        </div> */}
        </>
    )
}
