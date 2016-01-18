import React, {Component} from 'react';
import './about.scss';

export default class About extends Component {

    render() {
        return (
            <div className ="about">
                <p className="about-text">It's all about learning how to use react.</p>
                <br/><br/>
                <p className="about-text">Developer - Christophe</p>
                <p className="about-text">Tester    - Anais</p>
            </div>
        );
    }
}
