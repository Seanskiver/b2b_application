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
import login from './pages/login'

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
         <Route path="/login" component={login}/>
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
            <div className="page">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">B2b App</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('react-app'));