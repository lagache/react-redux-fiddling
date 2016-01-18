import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setNumberOfTiles, setSpeedms } from '../../actions';
import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

import './settings.scss';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    setNumberOfTiles(numberOfTiles) {
        this.props.dispatch(setNumberOfTiles(numberOfTiles));
    }

    setSpeedms(speedms) {
      this.props.dispatch(setSpeedms(speedms));
    }

    render() {
        const {dispatch} = this.props;

        let numberOfTilesOption = this.props.tiles.settingTileOption.map((tileOption) => {
          return (
                <Button bsStyle="primary" key={tileOption.value} onClick={() => this.setNumberOfTiles(tileOption.value) } active={tileOption.active}> {tileOption.value} </Button>
            );
        });

        let speedsOption = this.props.tiles.settingSpeedOption.map((speedOption) => {
          return (
                <Button bsStyle="primary" key={speedOption.value} onClick={() => this.setSpeedms(speedOption.value) }  active={speedOption.active}> {speedOption.label} </Button>
            );
        });

        return (

          <div className="settings">
            <Link to="/" className="btn btn-primary"> menu </Link>
            <div className="settings-button">
                <h4>Number of tiles</h4>
                <ButtonGroup>
                  {numberOfTilesOption}
                </ButtonGroup>
                <br/><br/>
                <h4>Speed</h4>
                <ButtonGroup>
                  {speedsOption}
                </ButtonGroup>
            </div>
          </div>
        );
    }
}

function select (state) {
    return {
      tiles: state.tiles
    }
}

export default connect(select)(Settings);
