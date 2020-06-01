import React from 'react'
import './InitGame.css'

const InitGame = (props) => {

    return (
        <div className="Container">
            <button onClick={() => props.intialiazeFunc(4)}>4X4</button>
            <button onClick={() => props.intialiazeFunc(6)}>6X6</button>
            <button onClick={() => props.intialiazeFunc(8)}>8X8</button>
            <button onClick={() => props.intialiazeFunc(10)}>10X10</button>
        </div>
    )
}

export default InitGame;