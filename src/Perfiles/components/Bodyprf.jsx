import React from 'react'
import "../styles/Bodyprf.css"
import { Cardprf } from './Cardprf'

const cards = [
    {
        id:"1",
        cargo: "Promotor 1",
        name: "ALI NOGALES CESAR ANTONIO"
    },
    {
        id:"2",
        cargo: "Promotor 2",
        name: "CARDOZO MORALES IGNACIO JAVIER"
    },
    {
        id:"3",
        cargo: "Promotor 3",
        name: "HUASCO"
    },
    {
        id:"4",
        cargo: "Promotor 4",
        name: "LAIME"
    },
    {
        id:"5",
        cargo: "Promotor 5",
        name: "PAREDES"
    },
    {
        id:"6",
        cargo: "Promotor 6",
        name: "REYES GUILLEN ALEJANDRO JAVIER"
    },
    {
        id:"7",
        cargo: "Promotor 7",
        name: "SUGENO"
    },
    {
        id:"8",
        cargo: "Promotor 8",
        name: "TIÑINI"
    },
    {
        id:"9",
        cargo: "Promotor 9",
        name: "INCOGNITO"
    }
]

function Bodyprf(props) {
    return (
        <div className='cont-total-prf'> 
            {
                cards.map(card => (
                    <Cardprf cargo={card.cargo} name={card.name} />
                ))
            }
        </div>
    )
}

export {Bodyprf}