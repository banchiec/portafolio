import { formatMs } from '@material-ui/core'
import React from 'react'
import './cardPresentation.css'

export default function CardPresentation() {
    return (
        <div className="card-container">
          <div className="card-title-container">
            <h1 id="card-title">Ivan Espinoza</h1>  
            <p>Developed web</p>
            <p id="card-tagline">
               Developed  Web
            </p>
          </div>
        </div>
    )
}
