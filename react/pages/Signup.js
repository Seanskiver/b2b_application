import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col} from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Signup extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
       <div className="register"  id="custom-container">
              
              <form onSubmit={this.handleSubmit}>
               <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name"/>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="userName">User Name</label>
                    <input type="text" class="form-control" id="userName" name="userName" placeholder="User Name"/>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email"/>
                  </div>
                  
                  <div class="form-group col-md-3">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone"/>
                  </div>
                </div>
              
                <div class="form-row">
                   <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" name="password" placeholder="Password"/>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Confirm Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password"/>
                  </div>
                </div>
              
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="companyName">Company Name</label>
                    <input type="text" class="form-control" id="companyName" name="companyName" placeholder="Company Name"/>
                  </div>
                  
                  <div class="form-group col-md-6">
                    <label for="email">Type</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option value="Supplier">Supplier</option>
                      <option value="Buyer">Buyer</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                </div>
                
                
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="email">Country</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="country">
                      <option>Country 1</option>
                      <option>Country 2</option>
                      <option>Country 3</option>
                    </select>
                  </div>
                  
                  <div class="form-group col-md-6">
                    <label for="email">City</label>
                    <select class="form-control" id="exampleFormControlSelect1" name="city">
                      <option>City 1</option>
                      <option>City 2</option>
                      <option>City 3</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group col-md-12">
                <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
              
              </form>
              <br/><br/><br/>
      </div>
    );
  }
}

export default Signup;