import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import AppRouter from './routes';
import {playSequence, activeTile} from './actions';

const initialState = {
    tiles: {
        nbTiles: 4,
        speedms: 700,

        settingTileOption : [
            {value: 4, active: false},
            {value: 6, active: true},
            {value: 8, active: false} ],
        settingSpeedOption : [
            {value: 1000, label: 'slow', active: false},
            {value: 700, label: 'normal', active: true},
            {value: 250, label: 'fast', active: false} ],
        gameOn: false
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
