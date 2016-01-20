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
                    <br/><br/>
                    <Button bsStyle="success" href="/game" bsSize="lg">play game</Button>
                    <br/>
                    <Button bsStyle="primary" href="/settings">settings</Button>
                    <br/>
                    <Button bsStyle="primary" href="/about">about</Button>
                </ButtonGroup>   
                
            </div>
        )
    }
}
