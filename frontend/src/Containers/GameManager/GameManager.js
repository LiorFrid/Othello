import React, { useState } from 'react';

import Board from '../../Components/Board/Board';
import InitGame from '../../Components/InitGame/InitGame';
import * as GameLogic from '../../GameLogic/GameLogic';

const Game = (props) => {
    console.log('[Game] render')
    const [mattGame, setMattGame] = useState([]);
    const [isInit, setIsInit] = useState(false);
    const [boardSize, setBoardSize] = useState(null);
    const initGameHandeler = (size) => {
        let InitMatt = GameLogic.getInitBoardGame(size);
        setBoardSize(size);
        setIsInit(true);
        setMattGame(InitMatt);
    }

    let toRender = isInit ? <Board size={boardSize} matt={mattGame} />
        : <InitGame intialiazeFunc={initGameHandeler} />

    return (
        <React.Fragment>
            {toRender}
        </React.Fragment>
    )
}

export default Game;