import React, { Component } from 'react';
import { Link } from 'react-router';
import TilesList from '../../components/tiles/tilesList.js';
import Header from '../Header/Header.js';
import './Game.scss';

export default class Game extends Component {

    render() {
        return (
            <div className="game">
                <Header />
                <TilesList />
            </div>
        )
    }
}
