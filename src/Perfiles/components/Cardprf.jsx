import React from 'react'
import "../styles/Cardprf.css"

function Cardprf({cargo, name}) {
    return (
        <div className='cards-prf'>
            <div className='informacion-prf'>
                <span>{cargo} </span>
                <hr/>
                <span>{name} </span>
            </div>
        </div>
    )
}

export {Cardprf}