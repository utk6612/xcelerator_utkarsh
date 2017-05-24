import React from 'react';
import { render } from 'react-dom';
import css from './css/common.styl';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ItemList';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Main from './components/Main.component';
import Cards from './components/cards/index';
import CardDescription from './components/cardDescription/index';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()
const store = configureStore();

render(
    <Provider store={ store }>
      <Router history={hashHistory}>
        <Route path={`/`} component={ App }>
          <IndexRoute component={ Cards } />
          {/*<Route path={`/search`} component={ SearchResults }></Route>*/}
          <Route path="details" component={CardDescription}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);
