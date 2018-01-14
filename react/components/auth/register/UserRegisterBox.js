import React, { Component } from 'react';
import axios from 'axios';
import UserRegisterForm from './UserRegisterForm';

class UserRegisterBox extends Component {
    
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  //handle form submit 
  handleRegisterSubmit(user) {
    let users = this.state.data;
    user.id = Date.now();
    
    let newUsers = users.concat([user]);
    this.setState({ data: newUsers });
    axios.post('https://vgu2b4kbxc.execute-api.us-east-1.amazonaws.com/dev/auth/register', user)
      .catch(err => {
        console.error(err);
        this.setState({ data: users });
      });
  }


  render() {
    return (
      <div className="container">
        <h3 class="" align="center" id="projects">
        FILL OUT USER INFO
        </h3>
       <UserRegisterForm onProjectSubmit={ this.handleRegisterSubmit }/>
       </div>
       
    )
  }
}

export default UserRegisterBox;
