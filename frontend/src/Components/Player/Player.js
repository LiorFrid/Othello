import React from 'react';

import './Player.css'
const Player = props => (
    <div className="Player">
            <strong>Name:</strong>{" " + props.name}<br />
            <strong>Pawn:</strong>{" " + props.pawn}<br />
            <strong>Score:</strong>{" " + props.score}
        </div>

)

export default Player;