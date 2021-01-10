import React from 'react'
import './NavbarPortafolio.css'
import { Navbar, Nav} from 'react-bootstrap'

export default function NavbarPortafolio() {
    return (

        <nav id="navbar1" class="navbar navbar-expand-md navbar-dark ">
            <div className="container-fluid"> 
            
                <span class="navbar-brand">
                    <ul className="lista-logo">
                        <div className="contenedor-menor menor-mayor">
                            <span className="menor-mayor">&lt;</span>
                        </div>
                        <span className="first-text-logo">Ivan</span>
                        <span className="text-logo"><span>ecO</span></span>
                        <span className="barra-inclinada">/</span>
                        <span className="menor-mayor">&gt;</span>
                    </ul>
                </span>

               
                <div class="collapse navbar-collapse noActive" id="navbarSupportedContent1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" id="active1" href="#Home">Ivan Espinoza</a></li>
                        <li class="nav-item"><a class="nav-link" id="active2" href="#Portfolio">About</a></li>
                        <li class="nav-item"><a class="nav-link" id="active3" href="#Contact">Contact</a></li>
                    </ul>
                </div>
                {/* <button class="navbar toggler-example" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" 
                        aria-expanded="false" aria-label="Toggle navigation">
                </button> */}
                <a  className="icon-button" href="#">
                    <i class="fa fa-bars"></i>
                </a>
 
            </div>
        </nav>
    )
}
