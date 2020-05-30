import React from 'react'

const Home = () => {
    return (
        <div style={{textAlign:'center'}}>
            <p >
                <h1>Game Play</h1>
                Othello is a strategy board game played between 2 players. One player plays black and the other white.
<br />
                Each player gets 32 discs and black always starts the game.

                <br />
                Then the game alternates between white and black until:
                <br />
                one player can not make a valid move to outflank the opponent.<br />
                both players have no valid moves.<br />
                When a player has no valid moves, he pass his turn and the opponent continues.<br />
                
                A player can not voluntarily forfeit his turn.
                <br />
                When both players can not make a valid move the gane ends.<br />

            </p>
            <p>
                <h2>Valid Moves  </h2>
                Black always moves first.<br />

                A move is made by placing a disc of the player's color on the board in a position that "out-flanks" one or more of the opponent's discs.<br />
                A disc or row of discs is outflanked when it is surrounded at the ends by discs of the opposite color.<br />

                A disc may outflank any number of discs in one or more rows in any direction (horizontal, vertical, diagonal).
                <br />
                For example: a white piece is being placed on the board that creates a straight line made up of a white piece at either end and only black pieces in between.<br />


                White places in the illustration a disc on E3.<br />

                The black discs on E4, E5 and E6 are now outflanked by the white disc on E3 and the white disc on E7.<br />

                The black discs will be flipped to white.<br />


                All the discs which are outflanked will be flipped, even if it is to the player's advantage not to flip them.<br />

                Discs may only be outflanked as a direct result of a move and must fall in the direct line of the disc being played.<br />

                If you can't outflank and flip at least one opposing disc, you must pass your turn. However, if a move is available to you, you can't forfeit your turn.<br />

                Once a disc has been placed on a square, it can never be moved to another square later in the game.<br />

                When a player runs out of discs, but still has opportunities to outflank an opposing disc, then the opponent must give the player a disc to use.<br />
            </p>
            <p>
                <h3> End of the Game  </h3>
                When it is no longer possible for either player to move, the game is over.<br />

                The discs are now counted and the player with the majority of his or her color discs on the board is the winner.<br />

                A tie is possible.<br />
            </p>
        </div>
    )
}

export default Home;

