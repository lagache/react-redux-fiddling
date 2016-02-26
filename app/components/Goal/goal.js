import React, {Component} from 'react';
import {connect} from 'react-redux';
import './goal.scss';

class Goal extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="goal-info">
				<h5>Goal</h5>
				<h5>{this.props.state.tiles.goal}</h5>
			</div>
		);
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Goal);