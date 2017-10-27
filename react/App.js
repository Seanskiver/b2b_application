'use strict'

// Dependencies
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import {Form, FormControl, Button} from 'react-bootstrap'

// import store from './Store.js'

// // Components

// Pages
import HomePage from './pages/HomePage';
import NavBar from './pages/NavBar';
//import Footer from './pages/Footer';
import browse from './pages/browse';
import signin from './pages/signin';
import signup from './pages/signup';

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )


const App = () => (
  <Router>
    <div style={{height: "100%"}}>
      <section id="appContainer" className="">
          <NavBar/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/browse" component={browse}/>
          <Route path="/signin" component={signin}/>
          <Route path="/signup" component={signup}/>
      </section>
    </div>
  </Router>
);

ReactDom.render(<App />, document.getElementById('react-app'));