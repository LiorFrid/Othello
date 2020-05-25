import React from 'react';

import Pawn from './Pawn/Pawn'
const getMatrixAndCreateBoard = (size) => {
       
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



const Board = (props) => {
    let toRender = null;
    toRender = getMatrixAndCreateBoard(props.size);
    return (
        <React.Fragment>
             {toRender}
                
        </React.Fragment>
           
    )
}


export default Board;