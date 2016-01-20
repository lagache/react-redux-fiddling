import React, { Component, PropTypes } from 'react';
import Tile from './tileItem.js';
import './tiles.scss';
import {startGame} from '../../actions';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TilesList extends Component {
    constructor(props) {
        super(props);
    }

;

    render() {
        var tiles;

        if (!this.props.tiles.gameOn) {
            return (<p>Ready? hit START GAME bro</p>);
        } else if (this.props.tiles.gameOver) {
            return (<p> GAME OVER... {this.props.tiles.nbTileFound} in a row, not too bad, bro. </p>);
        } else if (this.props.tiles.gameWon) {
            return (<p> CONGRATULATIONS!</p>);
        }
        tiles = this.props.tiles.data.map(function (tile) {
            return (
                <li>
                  <Tile data={tile} key={tile.id}/>
                </li>
            );
        });
        // Injected by connect() call:
        const { dispatch } = this.props;

        return (
          <div>
            <ul className="TilesList">
                {tiles}
            </ul>
          </div>
        );
    }

;
}
;

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        tiles: state.tiles
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(TilesList);

