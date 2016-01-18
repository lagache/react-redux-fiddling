import React, {Component} from 'react';
import { Link } from 'react-router';
import './about.scss';

export default class About extends Component {

    render() {
        return (
            <div className ="about">
                <Link to="/" className="btn btn-primary"> menu </Link>
                <div className="about-text">
                    <p>It's all about learning how to use react.</p>
                    <br/><br/>
                    <p>Developer - Christophe</p>
                    <p>Tester    - Anais</p>
                </div>
            </div>
        );
    }
}
