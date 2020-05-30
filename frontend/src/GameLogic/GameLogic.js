
export const getInitBoardGame = (size) => {
    let matt = []

    for (let i = 0; i < size; i++) {
        matt[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            matt[i][j] = {
                disable: false,
                pawn: null
            }
        }
    }

    let boardCenter = Math.ceil(size / 2)
    matt[boardCenter][boardCenter].pawn = 'X'
    matt[boardCenter][boardCenter - 1].pawn = 'O'
    matt[boardCenter - 1][boardCenter - 1].pawn = 'X'
    matt[boardCenter - 1][boardCenter].pawn = 'O'

    return matt;
}

export const getMatrixWithPossibleMoves = (matrix, currentPlayerPawn) => {
    const boardLength = matrix.length;
    let isEnable;
    let isCurrentPlayerHasMoves = false;
    for (let i = 0; i < boardLength; i++) {
        for (let j = 0; j < boardLength; j++) {
            isEnable = false;
            if (!matrix[i][j].pawn) {
                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: -1, col: -1 }, currentPlayerPawn);
                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: -1, col: 0 }, currentPlayerPawn);
                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: -1, col: 1 }, currentPlayerPawn);

                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: 0, col: 1 }, currentPlayerPawn);
                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: 0, col: -1 }, currentPlayerPawn);

                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: 1, col: -1 }, currentPlayerPawn);
                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: 1, col: 0 }, currentPlayerPawn);
                isEnable |= checkForPossibleMovesByDirecton(matrix, boardLength, { row: i, col: j }, { row: 1, col: 1 }, currentPlayerPawn);
            }

            isCurrentPlayerHasMoves |= isEnable;
            matrix[i][j].disable = !isEnable;
        }
    }

    return {
        matrix,
        isCurrentPlayerHasMoves
    }
}

const checkForPossibleMovesByDirecton = (boardLength, position, direction, currentPawn) => {
    return true

}

export const setMove = (matt, coords, currentPawn) => {

}