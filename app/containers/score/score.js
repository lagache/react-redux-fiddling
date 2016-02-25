import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TODO} from '../../actions';
import './score.scss';

class Score extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div className="score">12345678</div>);
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Score);