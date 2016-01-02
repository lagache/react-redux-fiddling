import React, { Component, PropTypes } from 'react';
import { Tile } from './tileItem.js';
import './tiles.scss';

class TilesList extends Component {
  constructor(props) {
    super(props);
  }

  // handleClick(e) {
  //   this.props.onCarAddClick({
  //     name: 'tesla',
  //     hp: 400
  //   });
  // }

  render() {
    let tiles = this.props.tiles.map((tile, i) => {
      return <Tile
        color = { tile.color }
      />
    })

    console.log(tiles)

    return (
      <h1>coco l'asticot</h1>
      // <div>
      //   { tiles }
      // </div>
    )
  }
}

TilesList.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
  })).isRequired,
  // onCarAddClick: PropTypes.func.isRequired
};

export default TilesList;
