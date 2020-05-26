import React, { useState } from 'react';
import './Pawn.css'
const Pawn = (props) => {
    const [content, setContent]=useState(props.content);
    let style = props.disable? "PawnDisabled": "PawnStyle";
    return (
        <button className={style} disabled={props.disable} style={{width:props.width + "%"}} onClick={() => setContent("L")}>
            {content}
        </button>
    )
}

export default Pawn;