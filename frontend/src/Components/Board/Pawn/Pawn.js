import React, { useState } from 'react';
import './Pawn.css'
const Pawn = (props) => {
    const [content, setContent]=useState(props.content);
    return (
        <div className="PawnStyle" style={{width:props.width + "%"}} onClick={() => setContent("L")}>
            {content}
        </div>
    )
}

export default Pawn;