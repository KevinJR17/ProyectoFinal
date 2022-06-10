import React from 'react'
import "../styles/Bodydic.css"
import dic from "../images/ubisuchas.jpeg"

function Bodydic() {
    return (
        <div className='cont-direc'>
            <span>Calle Chichas esquina Capitan Ravelo</span>
            <span>A dos cuadras de la Plaza Isabela Catolica, ex "Katanas" #169</span>
            <img src={dic} alt="Ubicacion tienda" />
        </div>
    )
}

export {Bodydic}