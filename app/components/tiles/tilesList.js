import React from 'react';
import Tile from './tileItem.js';
import './tiles.scss';


var TilesList = React.createClass({
  render: function() {
    var tiles;

    tiles = this.props.data.tiles.map(function (tile) {
        return (
            <Tile data={tile} key={tile.id}/>
        );
    });

    return (
        <div className="TilesList">
          {tiles}
        </div>
    );
  }
});

export default TilesList;
