import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './Main.css'

import Menu from '../../Components/Menu';
import Game from '../GameManager/GameManager'

const Main = () => {
    return (

        <Router>
            <div className='Main'>
                <header>
                    <Menu />
                </header>

                <Switch>
                    <Route exact path="/" render={() =>
                        <p >
                            Game Play
                            Othello is a strategy board game played between 2 players. One player plays black and the other white.

                            Each player gets 32 discs and black always starts the game.


                            Then the game alternates between white and black until:

                            one player can not make a valid move to outflank the opponent.
                            both players have no valid moves.
                            When a player has no valid moves, he pass his turn and the opponent continues.

                            A player can not voluntarily forfeit his turn.

                            When both players can not make a valid move the gane ends.


                            Valid Moves
                            Black always moves first.

                            A move is made by placing a disc of the player's color on the board in a position that "out-flanks" one or more of the opponent's discs.

                            A disc or row of discs is outflanked when it is surrounded at the ends by discs of the opposite color.

                            A disc may outflank any number of discs in one or more rows in any direction (horizontal, vertical, diagonal).

                            For example: a white piece is being placed on the board that creates a straight line made up of a white piece at either end and only black pieces in between.


                            White places in the illustration a disc on E3.

                            The black discs on E4, E5 and E6 are now outflanked by the white disc on E3 and the white disc on E7.

                            The black discs will be flipped to white.


                            All the discs which are outflanked will be flipped, even if it is to the player's advantage not to flip them.

                            Discs may only be outflanked as a direct result of a move and must fall in the direct line of the disc being played.

                            If you can't outflank and flip at least one opposing disc, you must pass your turn. However, if a move is available to you, you can't forfeit your turn.

                            Once a disc has been placed on a square, it can never be moved to another square later in the game.

                            When a player runs out of discs, but still has opportunities to outflank an opposing disc, then the opponent must give the player a disc to use.


                            End of the Game
                            When it is no longer possible for either player to move, the game is over.

                            The discs are now counted and the player with the majority of his or her color discs on the board is the winner.

                            A tie is possible.
                        </p>
                    } />
                    <Route path="/Game" component={Game} />
                    <Route path="/Scores" render={() => <div>SCORES</div>} />
                </Switch>
            </div>

        </Router>
    )
}

export default Main;