import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col} from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class UserSignup extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        userName: '',
        password: '',
        confirmPassword: '',
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name = target.name;

    this.setState({
      [name]: value
    });
   
    }
  
    //handlesubmit
    handleSubmit(event) {

      event.preventDefault();
      
       $.ajax({
            type: 'post',
            url: '/signup',
            data: {
                '_token': $('input[name=_token]').val(),
                ...this.userName,
                ...this.password,
                ...this.confirmPassword,
            },
            
           success: function(data) {
             alert('Form was submited');
             location.reload();
            }
        });
    }
    
  render() {
    const style = {
      width: '450px'
     };
  
    return (
       <div className="user-register"  id="custom-container">
       
              <Col xsHidden>
              <div class="container" style={style}>
                      
                      
                      <div class="panel panel-default">
                      <div class="panel-heading" align="center"><b>User Information</b></div>
                      <div class="panel-body">
                        <form onSubmit={this.handleSubmit}>
                              
                                 <div class="form-group col-md-12">
                                      <label for="userName">User Name</label>
                                      <input type="text" class="form-control" id="userName" name="userName" placeholder="User Name" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                      <label class="control-label">Password</label>
                                      <input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                  </div>
                                  
                                   <div class="form-group col-md-12">
                                      <label class="control-label">Confirm Password</label>
                                      <input type="password" required="required" class="form-control" id="password" name="password" placeholder="Confirm Password" onChange={this.handleChange}/>
                                  </div>
                
                                     <div class="form-group col-md-12">
                                      <button type="submit" class="btn btn-primary pull-right">Sign Up</button>
                                     </div>
                      </form>
                      </div>
                    </div>
                      
                  </div>
                  </Col>
                  
                   {/*Mobile Form*/}
                   <Col smHidden mdHidden lgHidden>
                     <form onSubmit={this.handleSubmit}>
                              
                                 <div class="form-group col-md-12">
                                      <label for="userName">User Name</label>
                                      <input type="text" class="form-control" id="userName" name="userName" placeholder="User Name" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                      <label class="control-label">Password</label>
                                      <input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                  </div>
                                  
                                   <div class="form-group col-md-12">
                                      <label class="control-label">Confirm Password</label>
                                      <input type="password" required="required" class="form-control" id="password" name="password" placeholder="Confirm Password" onChange={this.handleChange}/>
                                  </div>
                                    
                
                                     <div class="form-group col-md-12">
                                      <button type="submit" class="btn btn-primary pull-right">Sign Up</button>
                                     </div>
                      </form>
                  </Col>
                  {/*//Mobile Form*/}
              
      </div>
    );
  }
}

export default UserSignup;