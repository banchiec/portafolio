import { formatMs } from '@material-ui/core'
import React from 'react'
import './cardPresentation.css'

export default function CardPresentation() {
    return (
        <div className="card-container">
          <div className="card-title-container">
            <h1 id="card-title">Ivan Espinoza</h1>  
            <p id="card-tagline"> iDeveloped web</p>
            <p id="card-text">
               Developed  Web
            </p>
          </div>
        </div>
    )
}