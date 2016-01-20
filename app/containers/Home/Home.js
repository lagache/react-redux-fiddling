import React, { Component } from 'react';
import { Link } from 'react-router';
import TilesList from '../../components/tiles/tilesList.js';
import Header from '../Header/Header.js';
import './Home.scss';
import {Button, ButtonGroup } from 'react-bootstrap';

export default class Home extends Component {

    render() {
        return (
            <div className="homepage">
                <ButtonGroup vertical>
                    <Link to="/game" className="btn btn-success"> play game </Link>
                    <br/>        
                    <Link to="/settings" className="btn btn-primary"> settings </Link>
                    <br/>
                    <Link to="/about" className="btn btn-primary"> about </Link>
                </ButtonGroup>   
                
            </div>
        )
    }
}
