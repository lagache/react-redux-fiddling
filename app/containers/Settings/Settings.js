import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setNumberOfTiles, setSpeedms, setNewSequenceBetweenLevels, setSettingsPositionOrColor, setSettingsShuffleTilesAfterSequenceOption } from '../../actions';
import {Button, ButtonGroup, ButtonToolbar, Input} from 'react-bootstrap';

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

    setNewSequenceBetweenLevels(newSequenceBetweenLevelsOption) {
        this.props.dispatch(setNewSequenceBetweenLevels(newSequenceBetweenLevelsOption));
    }

    setPositionOrColorOptions(positionOrColorOption) {
        this.props.dispatch(setSettingsPositionOrColor(positionOrColorOption));
    }

    setSettingsShuffleTilesAfterSequenceOption(shuffleAfterSequenceOption) {
        this.props.dispatch(setSettingsShuffleTilesAfterSequenceOption(shuffleAfterSequenceOption));
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

        let newSequenceBetweenLevelsOption = this.props.tiles.settingNewSequenceBetweenLevelsOption.map((newSequenceOption) => {
          return (
                <Button bsStyle="primary" key={newSequenceOption.value} onClick={() => this.setNewSequenceBetweenLevels(newSequenceOption.value) }  active={newSequenceOption.active}> {newSequenceOption.label} </Button>
            );
        });

        let ShuffleTilesAfterSequenceOption = this.props.tiles.settingShuffleTilesAfterSequenceOption.map((shuffleTilesAfterSequenceOption) => {
          return (
                <Button bsStyle="primary" key={shuffleTilesAfterSequenceOption.value} onClick={() => this.setSettingsShuffleTilesAfterSequenceOption(shuffleTilesAfterSequenceOption.value) }  active={shuffleTilesAfterSequenceOption.active}> {shuffleTilesAfterSequenceOption.label} </Button>
            );
        });

         let colorOrPositionOption = this.props.tiles.settingColorOrPositionOption.map((colorOrPositionOption) => {
          return (
                <Button bsStyle="primary" key={colorOrPositionOption.value} onClick={() => this.setPositionOrColorOptions(colorOrPositionOption.value) }  active={colorOrPositionOption.active}> {colorOrPositionOption.label} </Button>
            );
        });

        return (

          <div className="settings">
            <Link to="/"> <span className="glyphicon glyphicon-chevron-left glyphicon-size glyphicon-padding"/> </Link>
            <div className="settings-button">
                <h5>Number of tiles</h5>
                <ButtonGroup>
                  {numberOfTilesOption}
                </ButtonGroup>
                
                <br/>
                <h5>Speed</h5>
                <ButtonGroup>
                  {speedsOption}
                </ButtonGroup>
                
                <br/>
                <h5>New sequence between levels</h5>
                <ButtonGroup>
                    {newSequenceBetweenLevelsOption}
                </ButtonGroup>

                <br/>
                <h5>Shuffle tiles after playing sequence</h5>
                <ButtonGroup>
                    {ShuffleTilesAfterSequenceOption}
                </ButtonGroup>

                <br/>
                <h5>Find tiles by</h5>
                <ButtonGroup>
                    {colorOrPositionOption}
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
