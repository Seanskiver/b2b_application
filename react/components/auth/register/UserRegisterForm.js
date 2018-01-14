import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class DeskTopForm extends Component {
    
  render() {
      const style = {
      width: '450px'
     };
      
    return (
   <Col xsHidden>
              <div class="container" style={style}>
                      
                      <div class="panel panel-default">
                      <div class="panel-heading" align="center"><b>User Information</b></div>
                      <div class="panel-body">
                        <form onSubmit={this.handleSubmit}>
                              
                                  <div class="form-group col-md-12">
                                      <label for="Name">Full Name</label>
                                      <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                      <label class="control-label">Email</label>
                                      <input type="email" class="form-control" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                                  </div>
                                  
                                  <div class="form-group col-md-12">
                                      <label class="control-label">Password</label>
                                      <input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                  </div>
                                  
                                   <div class="form-group col-md-12">
                                      <label class="control-label">Confirm Password</label>
                                      <input type="password" required="required" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange}/>
                                  </div>
                                  
                                     <div class="form-group col-md-12">
                                      <button type="submit" class="btn btn-primary pull-right">Sign Up</button>
                                     </div>
                      </form>
                      </div>
                    </div>
                      
                  </div>
                  </Col>
    )
  }
}

class MobileForm extends Component {
    
  render() {
    return (
  
                   <Col smHidden mdHidden lgHidden>
                     <form onSubmit={this.handleSubmit}>
                              
                                 <div class="form-group col-md-12">
                                      <label for="Name">Full Name</label>
                                      <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                      <label class="control-label">Email</label>
                                      <input type="email" class="form-control" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                                  </div>
                                  
                                  <div class="form-group col-md-12">
                                      <label class="control-label">Password</label>
                                      <input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                  </div>
                                  
                                   <div class="form-group col-md-12">
                                      <label class="control-label">Confirm Password</label>
                                      <input type="password" required="required" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange}/>
                                  </div>
                                  
                                     <div class="form-group col-md-12">
                                      <button type="submit" class="btn btn-primary pull-right">Sign Up</button>
                                     </div>
                      </form>
                  </Col>
                
    )
  }
}

class UserRegisterForm extends Component {
    
      constructor(props) {
        super(props);
        this.state = { 
                    name: '',
                    email: '',
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
    
      handleSubmit(e) {
        e.preventDefault();
        let email = this.state.email.trim();
        let name = this.state.name.trim();
        let password = this.state.password.trim();
        
    
        if (!email || !name || !password) {
          return;
        }
        this.props.onUserSubmit({ 
            name: name,
            email: email, 
            password: password,
            
        });
        this.setState({ 
                    name: '',
                    email: '',
                    password: '',
            });
      }
      
  render() {
    return (
         <div className="register"  id="custom-container">
            <DeskTopForm />
            <MobileForm />
          </div>
    )
  }
}

export default UserRegisterForm;
