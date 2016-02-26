import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TODO} from '../../actions';
import './score.scss';

var flipCounter = require('./flipCounter');

class Score extends Component {


	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var defaults = { value: 1000, inc: 0, pace: 1000, auto: true};
		new flipCounter('c1', defaults);
	}

	render() {
		return (
			<div className="counter-wrapper">
				<h5>{this.props.state.tiles.score}</h5>
				<ul className="flip-counter default" id="c1"></ul>
			</div>
		);
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Score);