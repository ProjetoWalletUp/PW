import './NaoEncontrado.css'
import React from "react"
import foto from "./assets/image4.svg"

const NaoEncontrado = props => (
    <div className="Container">
        <img src={foto} alt="foto" className="foto"/>
        <h1 className="Text">Oops...Ainda estamos trabalhando nisso.</h1>
    </div>
)

export default NaoEncontrado
