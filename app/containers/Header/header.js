import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './header.scss';

import {startGame, playSequence} from '../../actions';

import Score from '../../components/Score/score.js';
import Goal from '../../components/Goal/goal.js';
import Level from '../../components/Level/level.js';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.startTheGame();
    }

    startTheGame() {
        this.props.dispatch(startGame(this.props.tiles.nbTiles));
    }

    render() {
        if (this.props.tiles.gameOver) {
            let textScore = "you need to train a bit more...";
            let nbTileFound = this.props.tiles.nbTileFound;
            // Injected by connect() call:
            const { dispatch } = this.props;

            if (nbTileFound > 10 && nbTileFound <= 20) {
                textScore = "not too bad but you can do better";
            } else if (nbTileFound > 20 && nbTileFound <= 30) {
                textScore = "that's really good!"
            } else if (nbTileFound > 30) {
                textScore = "you are a champion!"
            }
            return (
                <div className="header">
                    <Link to="/" className="btn btn-primary"> menu </Link>
                    <br/><br/>
                    <button onClick={() => this.startTheGame()} className="btn btn-success">
                        START NEW GAME
                    </button>

                    <div className="result-area">
                        <h4>Level</h4>
                        <h5>{this.props.tiles.level}</h5>
                        <h4>Score</h4>
                        <h5>{this.props.tiles.score}</h5>
                        <br/>
                        <h5>GAME OVER...</h5>
                        <p className="result-text">{this.props.tiles.nbTileFound} in a row<br/><br/>{textScore}</p>
                    </div>
                </div>
                );
        } else {
            return (
                <div className="header">
                    <Link to="/"> <span className="glyphicon glyphicon-chevron-left glyphicon-size glyphicon-padding"/> </Link>
                    
                    <span onClick={() => this.startTheGame()} className="glyphicon glyphicon-repeat glyphicon-size"/>

                    <div className="game-info-section">
                        <Level/>
                        <Goal/>
                        <Score/>
                    </div>
                </div>
            )
        }
    }   
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        tiles: state.tiles
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Header);
