import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as Actions from '../../actions';
import './Navbar.scss';


class Navbar extends Component {
    constructor(props) {
        super(props);
        // this.state.account = this.props.loadAccount.bind(this);
    }

    render() {
        return (
            <div className="navbar">
                <div className="brand">
          <span>
            <Link to="/">Starter</Link>
          </span>
                </div>
            </div>
        )
    }
}

Navbar.propTypes = {
    account: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
