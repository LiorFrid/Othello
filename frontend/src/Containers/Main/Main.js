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
                <Route exact path="/" render={() => <div >HOME</div>} />
                <Route path="/Game" component={Game} />
                <Route path="/Scores" render={() => <div>SCORES</div>} />
            </Switch>
            </div>
            
        </Router>
    )
}

export default Main;