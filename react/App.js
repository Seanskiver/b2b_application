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
import Categories from './pages/Categories';
import Category from './pages/Category';
import Classifieds from './pages/Classifieds';
import CompanyInformation from './pages/CompanyInformation';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import faq from './pages/faq';
import Forums from './pages/Forums';
import Help from './pages/Help';
import HomePage from './pages/HomePage';
import NavBar from './pages/NavBar';
import postad from './pages/postad';
import Privacy from './pages/Privacy';
import Reviews from './pages/Reviews';
import Seller from './pages/Seller';
import single from './pages/single';
import profile from './pages/profile';
import signin from './pages/signin';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import UserSignup from './pages/UserSignup';
import Footer from './pages/Footer';
import UserRegister from './components/auth/register/UserRegisterBox';

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

const App = () => (
  <Router>
    <div style={{height: "100%"}}>
      <section id="appContainer" className="">
          <NavBar/>
          <br/>
          <Route path="/categories" component={Categories}/>
          <Route path="/Category" component={Category}/>
          <Route path="/classifieds" component={Classifieds}/>
          <Route path="/company-information" component={CompanyInformation}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/downloads" component={Downloads}/>
          <Route path="/faq" component={faq}/>
          <Route path="/forums" component={Forums}/>
          <Route exact path="/help" component={Help}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/postad" component={postad}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path="/reviews" component={Reviews}/>
          <Route path="/seller" component={Seller}/>
          <Route path="/single" component={single}/>
          <Route path="/profile" component={profile}/>
          <Route path="/signin" component={signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/terms" component={Terms}/>
          <Route path="/usersignup" component={UserRegister}/>
      </section>
    </div>
    
  </Router>
);

ReactDom.render(<App />, document.getElementById('react-app'));