import React, {Component} from 'react';
import './about.scss';

export default class About extends Component {

    render() {
        return (
            <div className ="about">
                <p className="about-text">It's all about learning how to use react.</p>
                <p className="about-text">Developers - Christophe / Xavier</p>
                <p className="about-text">Testers - Anais</p>
            </div>
        );
    }
}
