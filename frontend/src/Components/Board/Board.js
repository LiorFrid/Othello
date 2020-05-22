import React, { useState } from 'react';

import Pawn from './Pawn/Pawn'
const getMatrixAndCreateBoard = () => {
    let size = 6;
    let matt = [];
    for (let i = 0; i < size; i++) {
        matt[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            if (i % 2) {
                matt[i][j] = "X";
            } else {
                matt[i][j] = "O";
            }

        }
    }
    let boardContent = matt.map((line, lineInd) => {
        let eachLine = line.map((el, colInd) => {
            return <Pawn content={el} key={lineInd + colInd} />
        })
        return (
            <div key={lineInd}>
                {eachLine}
            </div>
        )
    })
    return boardContent;
}



const Board = () => {
    let toRender = null;
    toRender = getMatrixAndCreateBoard();
    const [isInit, setIsInit] = useState(false);
    return (
        <React.Fragment>
            {isInit ? toRender :
                <button onClick={() => setIsInit(true)}>Init</button>}
        </React.Fragment>
    )
}


export default Board;