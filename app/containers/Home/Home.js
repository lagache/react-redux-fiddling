import React, { Component } from 'react';
import { Link } from 'react-router';
import TilesList from '../../components/tiles/tilesList.js';
import Header from '../Header/Header.js';
import './Home.scss';

export default class Home extends Component {

    render() {
        return (
            <div className="homepage">
                <br/>
                <div>
                    <Link to="/game">Play game</Link>
                </div>
                <br/>
                <div>
                    <Link to="/settings">Settings</Link>
                </div>
                <br/>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </div>
        )
    }
}
