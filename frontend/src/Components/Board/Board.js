import React from 'react';

import Pawn from './Pawn/Pawn'
import './Board.css'
const getMatrixAndCreateBoard = (size, matt) => {
    let boardContent = matt.map((line, lineInd) => {
        let eachLine = line.map((el, colInd) => {
            return <Pawn width={100 / size} content={el ? el : " "} key={lineInd + colInd} />
        })
        return (
            <div className='Line' key={lineInd}>
                {eachLine}
            </div>
        )
    })
    return boardContent;
}



const Board = (props) => {
    let toRender = null;
    toRender = getMatrixAndCreateBoard(props.size, props.matt);
    return (
        <div style={{ width: '50%', marginLeft: '25%' }}>
            {toRender}

        </div>

    )
}


export default Board;