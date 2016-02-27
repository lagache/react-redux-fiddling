import React, {Component} from 'react';
import {connect} from 'react-redux';
import './goal.scss';

import Countdown from '../countdown/countdown.js';


class Goal extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		 if (this.props.state.tiles.countdown){
            let duration = 3;
            if(this.props.state.tiles.level > 0) {
                duration = 2;
            }
            return (
            	<div className="goal-info">
					<h4>Goal</h4>
					<h5>{this.props.state.tiles.goal} <Countdown duration={duration} /></h5>
                </div>
                );
		} else {
			return (
				<div className="goal-info">
					<h4>Goal</h4>
					<h5>{this.props.state.tiles.goal}</h5>
				</div>
			);
		}
	}
}

function select(state) {
    return {
        state: state
    }
}

export default connect(select)(Goal);