import React from 'react';
import './tiles.scss';

var TileItem = React.createClass({
  render: function() {
    var data = this.props.data;
    var className = "tile "+data.color;
    return (
        <span className={className}>
            tile {data.id}
        </span>
    );
  }
});

export default TileItem;
