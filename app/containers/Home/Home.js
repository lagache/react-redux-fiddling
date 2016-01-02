import React, { Component } from 'react';
import { Link } from 'react-router';
import Tile from '../../components/tiles/tilesList.js';
import './Home.scss';

export default class Home extends Component {
  render() {
    // TODO: this will be part of the state...
    let tilesState = [ { color: 'red' },
                       { color: 'blue' },
                       { color: 'green' } ]

    return (
      <div className="homepage">
        <h2>Starter Project</h2>
        <Tile
          tiles = { tilesState }
        />
      </div>
    )
  }
}
