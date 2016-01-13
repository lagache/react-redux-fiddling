import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setNumberOfTiles } from '../../actions';

import './settings.scss';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    setNumberOfTiles(numberOfTiles) {
        this.props.dispatch(setNumberOfTiles(numberOfTiles));
    }

    render() {
        const {dispatch} = this.props;

        return (

          <div className="settings">
              <br/>
              <button onClick={() => this.setNumberOfTiles(2)} >
                  easy
              </button> <span>only 2 tiles</span>
              <br/>
              <br/>
              <button onClick={() => this.setNumberOfTiles(4)} >
                  normal
              </button> <span>only 4 tiles</span>
              <br/><br/>
              <button onClick={() => this.setNumberOfTiles(6)} >
                  hard
              </button> <span>only 6 tiles</span>
              <br/><br/>
          </div>
        );
    }
}

function select () {
    return {

    }
}

export default connect(select)(Settings);
