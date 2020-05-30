import React from 'react';

import Pawn from './Pawn/Pawn'
import './Board.css'

const CreateBoard = (size, matt, dispatchMove) => {
    let boardContent = matt.map((line, lineInd) => {
        let eachLine = line.map((el, colInd) => {
            return <Pawn width={100 / size}
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
        <div style={{ width: '50%', marginLeft: '25%' }}>
            {toRender}
        </div>
    )
}

export default Board;