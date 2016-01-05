import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as Actions from '../../actions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        console.log('click!');
    }

    render() {
        return (
            <div className="header">
                <h3>Level: {this.props.data.level}</h3>
                <h3>Round: {this.props.data.round}</h3>
                <br/><br/>
                <p onClick={this.handleClick}>
                    ADD
                </p>
            </div>
    )
    }
}

Header.propTypes = {
    count: PropTypes.object
};

//Place state of redux store into props of component
function mapStateToProps(state) {
    let profile = state.profile ? state.profile.profile : null;
    return {
        profile: profile,
        router: state.router
    };
}

//Place action methods into props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default Header;
