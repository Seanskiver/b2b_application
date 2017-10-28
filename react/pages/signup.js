import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col} from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class signup extends React.Component {
    
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
      <form onSubmit={this.handleSubmit}>
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
      </form>
      
    );
  }
}

export default signup;