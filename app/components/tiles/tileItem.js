import React, { Component, PropTypes } from 'react';
import './tiles.scss';

class TileItem extends Component {
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
    return (
      <div class='tile { color }'></div>
    )
  }
}

TileItem.propTypes = {
  tile: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }),
  // onCarAddClick: PropTypes.func.isRequired
};

export default TileItem;
