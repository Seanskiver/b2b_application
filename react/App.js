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
import browse from './pages/browse';
import postad from './pages/postad';
import single from './pages/single';
import signin from './pages/signin';
import Signup from './pages/Signup';
import Footer from './pages/Footer';

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )


const App = () => (
  <Router>
    <div style={{height: "100%"}}>
      <section id="appContainer" className="">
          <NavBar/>
          <br/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/browse" component={browse}/>
          <Route path="/postad" component={postad}/>
          <Route path="/single" component={single}/>
          <Route path="/signin" component={signin}/>
          <Route path="/signup" component={Signup}/>
      </section>
    </div>
  </Router>
);

ReactDom.render(<App />, document.getElementById('react-app'));