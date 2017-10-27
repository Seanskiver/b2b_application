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
import HomePage from './pages/HomePage'
import browse from './pages/browse'
import signin from './pages/signin'

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )


const App = () => (
  <Router>
    <div style={{height: "100%"}}>
      <section id="appContainer" className="">
          <Menu/>
          <Route exact path="/" component={HomePage}/>
          {/*<Route path="/users/:id" component={Demo}/>*/}
         <Route path="/browse" component={browse}/>
         <Route path="/signin" component={signin}/>
      </section>
    </div>
  </Router>
);

class Menu extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            
            <nav class="nav">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle btn-default btn-sm" data-toggle="collapse" data-target="#myNavbar">
                    <span class="glyphicon glyphicon-align-justify"></span>                       
                  </button>
                  <a class="navbar-brand" href="#">WebSiteName</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                  <ul class="nav navbar-nav">
                   <li class="active"><Link to="/">Home</Link></li>
                    <li class="dropdown">
                      <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Page 1-1</a></li>
                        <li><a href="#">Page 1-2</a></li>
                        <li><a href="#">Page 1-3</a></li>
                      </ul>
                    </li>
                    
                  <li class="dropdown"><Link to="/browse">Browse</Link></li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><Link to="/signin"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}

ReactDom.render(<App />, document.getElementById('react-app'));