import React, { useState } from 'react'
import Board from '../Components/Board/Board'
import InitGame from '../Components/InitGame/InitGame'
const Game = (props) => {
    const [mattGame, setMattGame] = useState([]);
    const [isInit, setIsInit] = useState(false);
    const [boardSize, setBoardSize] = useState(null);
    const initGameHandeler = (size) => {
        let matt = []
        for (let i = 0; i < size; i++) {
            matt[i] = new Array(size);
            for (let j = 0; j < size; j++) {
                if (i % 2) {
                    matt[i][j] = null;
                } else {
                    matt[i][j] = null;
                }

            }
        }
        matt[Math.ceil(size / 2)][Math.ceil(size / 2)] = 'X'
        matt[Math.ceil(size / 2)][Math.ceil(size / 2) - 1] = 'O'
        matt[Math.ceil(size / 2) - 1][Math.ceil(size / 2) - 1] = 'X'
        matt[Math.ceil(size / 2) - 1][Math.ceil(size / 2)] = 'O'
        setBoardSize(size);
        setIsInit(true);
        setMattGame(matt)
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