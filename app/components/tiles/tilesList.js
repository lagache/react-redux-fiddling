import React, { Component, PropTypes } from 'react';
import Tile from './tileItem.js';
import './tiles.scss';
import {playSequence} from '../../actions';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TilesList extends Component {
    constructor(props) {
        super(props);
    };

    playSequenceTillEnd() {
        setTimeout(
            () => {this.props.dispatch(playSequence())}
            , 800);
      }

    componentDidUpdate() {
      if(!this.props.tiles.countdown && this.props.tiles.sequenceInProgress || (this.props.tiles.playSequence && this.props.tiles.sequenceHold)) {
            this.playSequenceTillEnd();
        }
    }

    render() {
        let tiles;
        if(this.props.tiles.data) {
          tiles = this.props.tiles.data.map(function (tile) {
              return (
                    <Tile data={tile} key={tile.id}/>
              );
          });
        }
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
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        tiles: state.tiles
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(TilesList);
