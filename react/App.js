'use strict'

// Dependencies
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

//import {Form, FormControl, Button} from 'react-bootstrap'
// import store from './Store.js'
//import { Table } from 'react-bootstrap';

// // Components

// Pages
import HomePage from './pages/HomePage'

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
         
      </section>
    </div>
  </Router>
);

class Menu extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <div className="page">
                <p>this isa menu</p>
                <a href="/login.js"></a>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('react-app'));