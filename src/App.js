import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from "./state/reducers/index";
import HomePage from './pages/home/home';
import CreditPage from './pages/credit/credit';
import HistoryPage from './pages/history/history';

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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Home" component={HomePage} />
          <Route exact path="/Credit" component={CreditPage} />
          <Route exact path="/History" component={HistoryPage} />
        </Router>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
