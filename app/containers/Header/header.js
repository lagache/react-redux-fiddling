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
                if (--count > 0) {
                    this.props.dispatch(playSequence());
                    this.playSequenceTillEnd(count);
                } else {

                }

            }
            , 500);
    }

    startTheGame() {
        this.props.dispatch(startGame());
        this.playSequenceTillEnd(5/*naughty magic number to remove with the number of object in the sequence*/);
    }

    render() {
        // Injected by connect() call:
        const { dispatch } = this.props;
        return (
            <div className="header">

                <h3>Level: {this.props.tiles.level}</h3>

                <h3>Round: {this.props.tiles.round}</h3>
                <br/><br/>
                <button onClick={() => this.startTheGame() }>
                    StartGame
                </button>
            </div>
        )
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
