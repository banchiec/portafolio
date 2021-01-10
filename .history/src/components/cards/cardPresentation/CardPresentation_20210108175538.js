import { formatMs } from '@material-ui/core'
import React from 'react'
import './cardPresentation.css'

export default function CardPresentation() {
    return (
        <div className="card-container">
          <div className="card-title-container">
            <h1 id="card-title">Ivan Espinoza</h1>  
            <p id="card-tagline">Developed web</p>
            <p id="card-text">
              App developed focused on improving the user<br/> experience
               and performance of your web application.
            </p>
          </div>
          <div>
            <p>App Developed</p>
          </div>
        </div>
    )
}
