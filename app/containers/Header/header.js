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
        // Injected by connect() call:
        const { dispatch } = this.props;

        if (this.props.tiles.gameOver) {
            return (
                <div className="header">
                    <br/>
                    <Link to="/">Menu</Link>
                    <br/><br/>
                    <button onClick={() => this.startTheGame()} >
                        START NEW GAME
                    </button>

                    <br/>
                    <p> GAME OVER... {this.props.tiles.nbTileFound} in a row, not too bad, bro. </p>
                </div>
                );
        } else if (this.props.tiles.countdown){
            return (
                <div className="header">
                    <br/> <br/>
                    <h1><Countdown duration="3" /></h1>
                    <br/>
                    <br/>
                </div>
                );
        } else {
            return (
                <div className="header">
                    <br/>
                    <h3>Level: {this.props.tiles.level}</h3>
                    <h3>Tiles remaining: {this.props.tiles.tilesRemaining}</h3>
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
