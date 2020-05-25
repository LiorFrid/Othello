import React, { useState } from 'react'
import Board from '../Components/Board/Board'
import InitGame from '../Components/InitGame/InitGame'
const Game = (props) => {
    const [isInit, setIsInit] = useState(false);
    const [boardSize, setBoardSize] = useState(null);
    const initGameHandeler = (size) => {
        setBoardSize(size);
        setIsInit(true);
    }
    let toRender = null;
    if (isInit) {
        toRender = <Board size={boardSize} />
    }
    else {
        toRender = <InitGame intialiazeFunc={initGameHandeler} />
    }
    return (
        <React.Fragment>
            {toRender}
        </React.Fragment>

    )
}

export default Game;