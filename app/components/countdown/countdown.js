import React, {Component} from 'react';
import {connect} from 'react-redux';
import {playSequence} from '../../actions';
import './countdown.scss';

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeRemaining: this.props.duration
		};
	}

	componentDidMount() {
		this.state.timer = setInterval(() => {
				this.setState({
					timeRemaining: this.state.timeRemaining - 1
				});
				if (this.state.timeRemaining <= 1) {
					clearInterval(this.state.timer);
					setTimeout(() => this.props.dispatch(playSequence()), 1000); // launch the sequence
				}
			}
		, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	render() {
		return (<div className="countdown-text">{this.state.timeRemaining}</div>);
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Countdown);