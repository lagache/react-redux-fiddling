import React, { Component } from 'react';
import { Link } from 'react-router';
import TilesList from '../../components/tiles/tilesList.js';
import './Home.scss';

//// TODO: need to be load from a Json a server call
const tilesInit = {tiles: [{id: '1', color : 'red'}, {id: '2', color : 'blue'}, {id: '3', color: 'green'}]};

export default class Home extends Component {

    render() {
        return (
          <div className="homepage">
            <h2>Tile's up!</h2>
              <br/>
            <TilesList data={tilesInit}/>
          </div>
        )
  }
}
