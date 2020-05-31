import React from 'react';

const Player = props => (
    <div>
        <p><strong>Name:</strong>{props.name}</p>
        <p><strong>Pawn:</strong>{props.pawn}</p>
        <p><strong>Score:</strong>{props.score}</p>
    </div>
)

export default Player;