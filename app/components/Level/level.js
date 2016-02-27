import React, {Component} from 'react';
import {connect} from 'react-redux';
import './level.scss';

class Level extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="level-info">
				<h4>Level</h4>
				<h5>{this.props.state.tiles.level}</h5>
			</div>
		);
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Level);