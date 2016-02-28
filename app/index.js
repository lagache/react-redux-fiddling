import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import AppRouter from './routes';
import {playSequence, activeTile} from './actions';
import {retrieveScores} from './Helper/storage/localStorage.js';

const initialState = {
    tiles: {
        nbTiles: 6,
        speedms: 700,

        settingTileOption : [
            {value: 4, active: false},
            {value: 6, active: true},
            {value: 8, active: false} ],
        settingSpeedOption : [
            {value: 9000, label: 'slow', active: false},
            {value: 650, label: 'normal', active: true},
            {value: 350, label: 'fast', active: false} ],
        settingNewSequenceBetweenLevelsOption : [
            {value: true, label: 'no', active: true},
            {value: false, label: 'yes', active: false}],
        settingColorOrPositionOption : [
            {value: 'color', label: 'color', active: true},
            {value: 'position', label: 'position', active: false}],
        settingShuffleTilesAfterSequenceOption : [
            {value: false, label: 'no', active: true},
            {value: true, label: 'yes', active: false}],
        gameOn: false,
        scores: retrieveScores()
    }
};

const store = configureStore(initialState);

// debugger
//store.subscribe(function () {console.log(store.getState())});

class Root extends Component {

    render() {
        return (

            <div>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
            </div>
        )
    }
}

let rootElement = document.getElementById('root');

ReactDOM.render(
    <Root />, rootElement
);
