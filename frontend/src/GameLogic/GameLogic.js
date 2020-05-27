
export const getInitBoardGame = (size) => {
    let matt = []

    for (let i = 0; i < size; i++) {
        matt[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            matt[i][j] = {
                disable: true,
                pawn: null
            }
            if (j % 2) {
                matt[i][j].disable = false;
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

export const getEnableMoves = (matrix, currentPlayerPawn) => {

}