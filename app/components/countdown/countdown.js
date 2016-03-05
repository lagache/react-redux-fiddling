import React, {Component} from 'react';
import {connect} from 'react-redux';
import {playSequence} from '../../actions';
//import {checkTile, deactivateTile} from '../../actions'

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeRemaining: this.props.duration
		};
	}

	componentDidMount() {
		var self = this;
		this.state.timer = setInterval(() => {
				if(!self.props.state.tiles.pauseOn) {
					this.setState({
						timeRemaining: this.state.timeRemaining - 1
					});
					if (this.state.timeRemaining <= 0) {
						clearInterval(this.state.timer);
						setTimeout(() => this.props.dispatch(playSequence()), 0); // launch the sequence
					}
				}
			}
		, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	render() {
		return (<span>{this.state.timeRemaining}</span>);
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Countdown);