import React from 'react';
import './Pawn.css'
const Pawn = (props) => {
    const classes = [];
    classes.push("PawnStyle")
    props.disable ? classes.push("PawnStyleDisable") : classes.push("PawnStyleEnable");
    return (
        <button className={classes.join(" ")}
            disabled={props.disable}
            style={{ width: props.width + "%", height: props.height + 'px' }}
            onClick={props.setMove}>
            {props.content}
        </button>
    )
}

export default Pawn;