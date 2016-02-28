import React, { Component } from 'react';
import { Link } from 'react-router';
import TilesList from '../../components/tiles/tilesList.js';
import Scores from '../../components/score/scores.js';
import Header from '../Header/Header.js';
import './Home.scss';
import {Button, ButtonGroup } from 'react-bootstrap';


export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <ButtonGroup vertical>
                    <Link to="/game" className="btn btn-success btn-lg"> play game </Link>
                    <br/>
                    <Link to="/settings" className="btn btn-primary btn-lg"> settings </Link>
                    <br/>
                    <Link to="/about" className="btn btn-primary btn-lg"> about </Link>
                    <br/><br/>
                    <Scores/>
                </ButtonGroup>
                
            </div>
        )
    }
}
