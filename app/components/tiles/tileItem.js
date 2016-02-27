import React from 'react';
import './tiles.scss';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {checkTile, deactivateTile} from '../../actions'

const IMAGES_PATH = './assets/images/tiles/';
const IMAGES_EXTENSION = '.jpg';

let TileItem = React.createClass({

    handleClick(id) {
      let state = this.props.state.tiles;
        if(!state.sequenceHold && !state.sequenceInProgress && !state.playSequence && !state.countdown) {
          this.props.dispatch(checkTile(this.props.data.id));
        }
    },

    componentDidUpdate() {
      if(this.props.data.active || this.props.data.good || this.props.data.bad) {
        setTimeout(
          () => {
           this.props.dispatch(deactivateTile(this.props.data.id));
          }, 350);
      }
    },

    render: function () {
        let data = this.props.data;
        //  // Injected by connect() call:
        const {dispatch} = this.props;

        let tileClass = classNames("tile", data.color, {
            'activeTile': data.active,
            'good': data.good,
            'bad': data.bad
        });

        return (
            <img key={data.id} 
                 type="tile" 
                 className={tileClass} 
                 src={ IMAGES_PATH + data.imageId + IMAGES_EXTENSION } 
                 onClick={() => this.handleClick(data.id)} />
        );
    }
});

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(TileItem);