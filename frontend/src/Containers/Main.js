import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from '../Components/Menu';
import Game from './GameManager'

const Main = () => {
    return (
        <Router>
            <header>
                <Menu />
            </header>
            <Switch>
                <Route exact path="/" render={() => <div >HOME</div>} />
                <Route path="/Game" component={Game} />
                <Route path="/Scores" render={() => <div>SCORES</div>} />
            </Switch>
        </Router>
    )
}

export default Main;