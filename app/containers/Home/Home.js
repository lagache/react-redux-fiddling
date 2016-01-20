import React, { Component } from 'react';
import { Link } from 'react-router';
import TilesList from '../../components/tiles/tilesList.js';
import Header from '../Header/Header.js';
import './Home.scss';

export default class Home extends Component {

    render() {
        return (
            <div className="homepage">
                <Header />
                <TilesList />
            </div>
        )
    }
}
