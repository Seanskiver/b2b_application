import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col} from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
class signin extends React.Component {
    
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
      <div className="loggingIn"  id="custom-container">
              
              <form>
              
                
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="userName">User Name</label>
                    <input type="text" class="form-control" id="userName" placeholder="User Name"/>
                  </div>
             
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                  </div>
                </div>
                
                 <div class="form-group col-md-12">
                <button type="submit" class="btn btn-primary pull-right">Sign In</button>
                </div>
              
              </form>
              
      </div>
      
/*      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>*/
    );
  }
}

export default signin;