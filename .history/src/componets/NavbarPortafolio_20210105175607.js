import React from 'react'
import './NavbarPortafolio.css'
import { Navbar, Nav} from 'react-bootstrap'

export default function NavbarPortafolio() {
    return (

        <nav id="navbar1" class="navbar navbar-expand-md navbar-dark ">
            <div class="container">
            
            <span   class="navbar-brand"> Ivan Espinoza</span>

            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="dark-blue-text">
                                <i class="fas fa-bars"></i>
                        </span>
            </button>
            
        <div class="collapse navbar-collapse noActive" id="navbarSupportedContent1">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" id="active1" href="#Home">Ivan Espinoza</a></li>
                <li class="nav-item"><a class="nav-link" id="active2" href="#Portfolio">About</a></li>
                <li class="nav-item"><a class="nav-link" id="active3" href="#Contact">Contact</a></li>
            </ul>
            </div>

            </div>
            <i class="fas fa-chevron-circle-down"></i>
               <i class="fas fa-bars"></i>
            <i class="fa fa-bars fa-2x"></i>
        </nav>
    )
}
