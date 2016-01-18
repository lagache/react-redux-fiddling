import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './header.scss';

import {startGame, playSequence} from '../../actions';
import Countdown from '../../components/transition/countdown.js';

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
            let textScore = "you need to train a bit more";
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
                        <h4>GAME OVER...</h4>
                        <p className="result-text">{this.props.tiles.nbTileFound} in a row, {textScore}</p>
                    </div>
                </div>
                );
        } else if (this.props.tiles.countdown){
            let duration = 3;
            if(this.props.tiles.level > 0) {
                duration = 2;
            }
            return (
                <div className="header">
                    <br/>
                    <h3>Level: {this.props.tiles.level}</h3>
                    <h3>Tiles remaining: {this.props.tiles.tilesRemaining}</h3>
                    <h1><Countdown duration={duration} /></h1>
                </div>
                );
        } else {
            return (
                <div className="header">
                    <br/>
                    <h3>Level: {this.props.tiles.level}</h3>
                    <h3>Tiles remaining: {this.props.tiles.tilesRemaining}</h3>
                    <br/>
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
