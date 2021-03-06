import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './header.scss';

import {startGame, pauseGame, resumeGame, stopGame, playSequence} from '../../actions';

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

    pauseTheGame() {
        this.props.dispatch(pauseGame());
    }

    resumeTheGame() {
        this.props.dispatch(resumeGame());
    }

    stopTheGame() {
        this.props.dispatch(stopGame());
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
                    <div className="header">
                        <Link to="/"> <span className="glyphicon glyphicon-chevron-left glyphicon-size glyphicon-color"/> </Link>
                        <span onClick={() => this.startTheGame()} className="glyphicon glyphicon-play-circle glyphicon-size glyphicon-color glyphicon-margin-left-right"/>
                        <Link to="/settings"> <span className="glyphicon glyphicon-cog glyphicon-size glyphicon-color"/> </Link>
                    </div>


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
            // if countdown in progress, you can pause the game
            if(this.props.tiles.countdown) {
                if(!this.props.tiles.pauseOn) {                
                    return (
                        <div className="header">
                            <Link to="/"> <span className="glyphicon glyphicon-chevron-left glyphicon-size glyphicon-color"/> </Link>
                            <span onClick={() => this.pauseTheGame()} className="glyphicon glyphicon-pause glyphicon-size glyphicon-margin-left-right glyphicon-color"/>
                            <span onClick={() => this.startTheGame()} className="glyphicon glyphicon-repeat glyphicon-size glyphicon-color"/>
                            <div className="game-info-section">
                                <Level/>
                                <Goal/>
                                <Score/>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="header">
                            <Link to="/"> <span className="glyphicon glyphicon-chevron-left glyphicon-size glyphicon-color"/> </Link>
                            <span onClick={() => this.resumeTheGame()} className="glyphicon glyphicon-play glyphicon-size glyphicon-margin-left-right glyphicon-color"/>
                            <span onClick={() => this.startTheGame()} className="glyphicon glyphicon-repeat glyphicon-size glyphicon-color"/>
                            <div className="game-info-section">
                                <Level/>
                                <Goal/>
                                <Score/>
                            </div>
                        </div>
                    )
                }
            } else {
                // if game in progress, you can only stop the current game

                return (
                    <div className="header">
                        <Link to="/"> <span className="glyphicon glyphicon-chevron-left glyphicon-size glyphicon-color"/> </Link>
                        <span onClick={() => this.stopTheGame()} className="glyphicon glyphicon-stop glyphicon-size glyphicon-margin-left-right glyphicon-color"/>
                        <span onClick={() => this.startTheGame()} className="glyphicon glyphicon-repeat glyphicon-size glyphicon-color"/>
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
