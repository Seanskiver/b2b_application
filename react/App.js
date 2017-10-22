'use strict'

// Dependencies
import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
// import store from './Store.js'

// // Components

// // Pages
// import HomePage from './pages/HomePage'

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )


const App = () => (
          <div style={{height: "100%"}}>

            <section id="appContainer" className="">
              <p>React should now be working</p>
            </section>
          </div>
)

ReactDom.render(<App />,
document.getElementById('react-app'))