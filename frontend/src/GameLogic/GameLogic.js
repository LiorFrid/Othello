
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

const checkForPossibleMovesByDirecton = (matrix, boardLength, position, direction, currentPawn) => {
    let isEnable = true;
    let arrivalPawn = currentPawn === 'X' ? 'O' : 'X';
    let posOfPawnIsNextTO = {
        row: position.row + direction.row,
        col: position.col + direction.col
    }

    let isNextInBorders = (posOfPawnIsNextTO.col >= 0 && posOfPawnIsNextTO.col < boardLength) &&
        (posOfPawnIsNextTO.row >= 0 && posOfPawnIsNextTO.row < boardLength);
    let isNextToIsTheArrivalPawn = false;
    if (isNextInBorders) {
        isNextToIsTheArrivalPawn = matrix[posOfPawnIsNextTO.row][posOfPawnIsNextTO.col].pawn === arrivalPawn;
    }

    if (!isNextToIsTheArrivalPawn) {
        isEnable = false;
    }

    if (isEnable) {
        let isToContinue = true;
        let posToCheck = {
            row: posOfPawnIsNextTO.row + direction.row,
            col: posOfPawnIsNextTO.col + direction.col
        }
        while (isToContinue) {
            if (!((posToCheck.col >= 0 && posToCheck.col < boardLength) &&
                (posToCheck.row >= 0 && posToCheck.row < boardLength))) {
                isToContinue = false;
                isEnable = false;
            }
            else if (matrix[posToCheck.row][posToCheck.col].pawn === null) {
                isToContinue = false;
                isEnable = false;
            }
            else if (matrix[posToCheck.row][posToCheck.col].pawn === currentPawn) {
                isToContinue = false;
                isEnable = true;
            }

            posToCheck.row += direction.row;
            posToCheck.col += direction.col;
        }
    }

    return isEnable;
}

export const setMove = (matrix, coords, currentPawn) => {
    let position = {
        row: coords.lineInd,
        col: coords.colInd
    }
    let boardLength = matrix.length;
    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: -1, col: -1 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: -1, col: -1 }, currentPawn)
    }

    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: -1, col: 0 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: -1, col: 0 }, currentPawn)
    }

    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: -1, col: 1 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: -1, col: 1 }, currentPawn)
    }

    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: 0, col: 1 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: 0, col: 1 }, currentPawn)
    }

    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: 0, col: -1 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: 0, col: -1 }, currentPawn)
    }

    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: 1, col: -1 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: 1, col: -1 }, currentPawn)
    }

    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: 1, col: 0 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: 1, col: 0 }, currentPawn)
    }

    if (checkForPossibleMovesByDirecton(matrix, boardLength, position, { row: 1, col: 1 }, currentPawn)) {
        eatArrivalPawns(matrix, boardLength, position, { row: 1, col: 1 }, currentPawn)
    }

    return matrix
}

const eatArrivalPawns = (matrix, boardLength, position, direction, currentPawn) => {

    let posToEat = {
        row: position.row + direction.row,
        col: position.col + direction.col
    }
    let arrivalPawn = currentPawn === 'X' ? 'O' : 'X'
    while (matrix[posToEat.row][posToEat.col].pawn === arrivalPawn) {
        matrix[posToEat.row][posToEat.col].pawn = currentPawn;
        posToEat.row += direction.row;
        posToEat.col += direction.col;
    }
}

export const countPawns = (matrix) => {
    let conuntPawnO = 0;
    let conuntPawnX = 0;
    let boardLength = matrix.length;
    for (let i = 0; i < boardLength; i++) {
        for (let j = 0; j < boardLength; j++) {
            if (matrix[i][j].pawn === 'X') {
                conuntPawnX++;
            }
            else if (matrix[i][j].pawn === 'O') {
                conuntPawnO++;
            }
        }
    }

    return {
        O: conuntPawnO,
        X: conuntPawnX
    }
}