import React from 'react';

import Pawn from './Pawn/Pawn'
import './Board.css'

const CreateBoard = (size, matt, dispatchMove) => {
    let boardContent = matt.map((line, lineInd) => {
        let eachLine = line.map((el, colInd) => {
            return <Pawn
                width={100 / size}
                height={650 / size}
                disable={el.disable}
                content={el.pawn ? el.pawn : " "}
                key={lineInd + colInd}
                setMove={() => dispatchMove({ lineInd, colInd })} />
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
    toRender = CreateBoard(props.size, props.matt, props.dispatchMove);
    return (
        <div style={{ height: '50%', width: '50%'}}>
            {toRender}
        </div>
    )
}

export default Board;