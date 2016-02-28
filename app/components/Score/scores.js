import React, {Component} from 'react';
import {connect} from 'react-redux';
//import './score.scss';

const NUMBER_OF_BEST_SCORE_TO_SHOW = 3;

class Scores extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let scores = this.props.state.tiles.scores;
		if(scores) {
			scores = scores.slice(0, NUMBER_OF_BEST_SCORE_TO_SHOW); 
		}
		let scoresItem = scores.map(function(score) {
			return (<h5>{score}</h5>);
		}) ;

		return (
			<div className="level-info">
				<h4>Best scores</h4>
				{scoresItem}
			</div>
		);
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Scores);