import React from 'react';
import './Pawn.css'
const pawn = (props) => {
    return (
        <div className="PawnStyle">
            {props.content}
        </div>
    )
}

export default pawn;