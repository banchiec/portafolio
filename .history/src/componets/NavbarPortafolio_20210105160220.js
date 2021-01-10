import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'

export default function NavbarPortafolio() {
    return (


        <nav id="navbar1" class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div class="container">
            
            <span class="navbar-brand">Brand-Name</span>

            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text">
            <i class="fa fa-bars fa-1x"></i></span>
            </button>
            
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" id="active1" href="#Home">Home</a></li>
                <li class="nav-item"><a class="nav-link" id="active2" href="#Portfolio">About</a></li>
                <li class="nav-item"><a class="nav-link" id="active3" href="#Contact">Contact</a></li>
            </ul>
            </div>

            </div>
        </nav>
            // <Navbar bg="transparent" variant="dark">
        //     <Navbar.Brand>Ivan Espinoza</Navbar.Brand>
        // </Navbar>
    )
}
