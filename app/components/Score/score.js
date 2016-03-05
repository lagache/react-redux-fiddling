import React, {Component} from 'react';
import {connect} from 'react-redux';
import './score.scss';

class Score extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="level-info">
				<h4 className="title-small-margin">Score</h4>
				<h5 className="title-small-margin">{this.props.state.tiles.score}</h5>
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