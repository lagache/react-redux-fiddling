import React, {Component} from 'react';
import { Link } from 'react-router';
import './about.scss';

export default class About extends Component {

    render() {
        return (
            <div className ="about">
                <Link to="/"> <span className="glyphicon glyphicon-chevron-left glyphicon-size glyphicon-padding"/> </Link>
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
