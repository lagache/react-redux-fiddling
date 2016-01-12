import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router';

import App from './containers/App/App';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Game from './containers/Game/Game';
import Settings from './containers/Settings/Settings';

import NotFound from './containers/NotFound/NotFound';

export default class AppRouter extends Component {
    render() {
        //Each Route below corresponds to a page
        return (
            <ReduxRouter>
                <Route path="/" component={ App }>
                    <IndexRoute component={ Home }/>
                    <Route path="game" component={ Game }/>
                    <Route path="about" component={ About }/>
                    <Route path ="settings" component={ Settings }/>
                    <Route path="*" component={ NotFound }/>
                </Route>
            </ReduxRouter>
        )
    }
}
