import React, { useState } from 'react';

import Pawn from './Pawn/Pawn'
const getMatrixAndCreateBoard = () => {
    let size = 8
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
            return <Pawn width={100/size}content={el} key={lineInd + colInd}  />
        })
        return (
            <div style={{width:'50%', margin: '0 25%'}} key={lineInd}>
                {eachLine}
            </div>
        )
    })
    return boardContent;
}



const Board = () => {
    let toRender = null;
    toRender = getMatrixAndCreateBoard();
    const [isInit, setIsInit] = useState(true);
    return (
        <React.Fragment>
             {isInit ? toRender :
                <button onClick={() => setIsInit(true)}>Init</button>}
                <div>
                    <table>
                        <tr>
                            
                        </tr>
                    </table>
                </div>
        </React.Fragment>
           
    )
}


export default Board;