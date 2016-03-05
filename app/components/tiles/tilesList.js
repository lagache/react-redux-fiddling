import React, { Component, PropTypes } from 'react';
import Tile from './tileItem.js';
import './tiles.scss';
import {playSequence} from '../../actions';
import classNames from 'classnames';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as _ from 'underscore';

class TilesList extends Component {
    constructor(props) {
        super(props);
    };

    playSequenceTillEnd() {
        setTimeout(
            () => {this.props.dispatch(playSequence())}
            , this.props.tiles.speedms);
      }

    componentDidUpdate() {
      if(!this.props.tiles.countdown && this.props.tiles.sequenceInProgress || (this.props.tiles.playSequence && this.props.tiles.sequenceHold)) {
            this.playSequenceTillEnd();
        }
    }

    render() {
        let tilesSorted, tilesRendered;

        tilesSorted = _.sortBy(this.props.tiles.data, 'order');

        let tilesListClass = classNames("TilesList", {
            'show-4': (tilesSorted.length === 4),
            'show-6': (tilesSorted.length === 6),
            'show-8': (tilesSorted.length === 8),
            'show-10': (tilesSorted.length === 10),
            'show-12': (tilesSorted.length === 12)
        });

        if(tilesSorted) {
          tilesRendered = tilesSorted.map(function (tile) {
              return (
                    <Tile data={tile} key={tile.id}/>
              );
          });
        }
        // Injected by connect() call:
        const { dispatch } = this.props;

        return (
            <div className={tilesListClass}>
                {tilesRendered}
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
