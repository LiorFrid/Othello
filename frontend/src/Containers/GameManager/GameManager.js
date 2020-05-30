import React, { useState } from 'react';

import clone from 'clone'

import Board from '../../Components/Board/Board';
import InitGame from '../../Components/InitGame/InitGame';
import * as GameLogic from '../../GameLogic/GameLogic';

const Game = (props) => {
    const [mattGame, setMattGame] = useState([]);
    const [isInit, setIsInit] = useState(false);
    const [boardSize, setBoardSize] = useState(null);
    const [currentPawn, setCurrentPawn] = useState('X');

    const initGameHandeler = (size) => {
        let InitMatt = GameLogic.getInitBoardGame(size);
        let InitMattWithEnableMoves = GameLogic.getMatrixWithPossibleMoves(InitMatt, currentPawn)
        setBoardSize(size);
        setIsInit(true);
        setMattGame(InitMattWithEnableMoves);
    }

    const setMove = (coords) => {
        let matt = clone(mattGame);
        //matt = GameLogic.setMove(matt, coords, currentPawn);
        let currentLocalPawn = currentPawn === 'X' ? 'O' : 'X'
        //matt = GameLogic.getEnableMoves(matt, currentLocalPawn);
        matt[coords.lineInd][coords.colInd].pawn = currentLocalPawn
        setCurrentPawn(currentLocalPawn);
        setMattGame(matt);
    }

    let toRender = isInit ?
        <div>
            <Board size={boardSize} matt={mattGame} dispatchMove={setMove} />
        </div>
        : <InitGame intialiazeFunc={initGameHandeler} />

    return (
        <React.Fragment>
            {toRender}
        </React.Fragment>
    )
}

export default Game;