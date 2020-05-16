import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from "./state/reducers/index";
import HomePage from './pages/home/home';

const store = createStore(
  allReducers,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Router>
          <Route path="/" component={HomePage} />
        </Router>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
