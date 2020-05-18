import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from "./state/reducers/index";
import HomePage from './pages/home/home';
import CreditPage from './pages/credit/credit';
import HistoryPage from './pages/history/history';
import withApproval from './enhancers/withApproval';
import firebase from 'firebase';
const store = createStore(
  allReducers,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
const EnhancedCreditPage = withApproval(CreditPage);

const config = {
  apiKey: "AIzaSyApUSr2KIeSFBkkXbXAiTmI3uM2dOz6W98",
  authDomain: "zinobe-ae4de.firebaseapp.com",
  databaseURL: "https://zinobe-ae4de.firebaseio.com",
  projectId: "zinobe-ae4de",
  storageBucket: "zinobe-ae4de.appspot.com",
  messagingSenderId: "562746134334",
  appId: "1:562746134334:web:cae03ffcd08c4df003e66f",
  measurementId: "G-57GT10ERQH"
}
firebase.initializeApp(config)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Home" component={HomePage} />
          <Route exact path="/Credit" component={EnhancedCreditPage} />
          <Route exact path="/History" component={HistoryPage} />
        </Router>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
