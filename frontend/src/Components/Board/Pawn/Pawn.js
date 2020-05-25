import React, { useState } from 'react';
import './Pawn.css'
const Pawn = (props) => {
    const [content, setContent]=useState(props.content);
    return (
        <button className="PawnStyle" style={{width:props.width + "%"}} onClick={() => setContent("L")}>
            {content}
        </button>
    )
}

export default Pawn;