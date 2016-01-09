import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {startGame, playSequence} from '../../actions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    playSequenceTillEnd(count) {
        setTimeout(
            () => {
                if (--count >= 0) {
                    this.props.dispatch(playSequence());
                    this.playSequenceTillEnd(count);
                } else {

                }

            }
            , 500);
    }

    startTheGame() {
        this.props.dispatch(startGame());
    }

    render() {
        if(this.props.tiles.playSequence) {
            this.playSequenceTillEnd(this.props.tiles.nbTilesToFind + 1);
        }

        // Injected by connect() call:
        const { dispatch } = this.props;

        if (!this.props.tiles.gameOn) {
            return (
                <div className="header">
                    <br/>
                    <button onClick={() => this.startTheGame()} >
                        START GAME
                    </button>
                    <br/>
            </div>);
        } else if (this.props.tiles.gameOver) {
            return (
                <div className="header">
                    <br/>
                    <button onClick={() => this.startTheGame()} >
                        START GAME
                    </button>
                    <br/>
                    <p> GAME OVER... {this.props.tiles.nbTileFound} in a row, not too bad, bro. </p>
                </div>
                );
        } else {
            return (
                <div className="header">
                    <br/>
                    <h3>Level: {this.props.tiles.level}<br/><br/>Tiles remaining: {this.props.tiles.tilesRemaining}</h3>
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
