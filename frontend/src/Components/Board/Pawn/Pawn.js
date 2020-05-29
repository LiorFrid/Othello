import React from 'react';
import './Pawn.css'
const Pawn = (props) => {
    let style = props.disable ? "PawnDisabled" : "PawnStyle";
    return (
        <button className={style}
            disabled={props.disable}
            style={{ width: props.width + "%" }}
            onClick={props.setMove}>
            {props.content}
        </button>
    )
}

export default Pawn;