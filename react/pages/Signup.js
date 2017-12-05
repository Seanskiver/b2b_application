import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col} from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Signup extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      businessName: '',
      businessType: '',
      phone: '',
      address: '',
      country: 'Senegal',
      city: '',
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
            url: '/users/signup',
            data: {
                '_token': $('input[name=_token]').val(),
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                businessName: this.state.businessName,
                businessType: this.state.businessType,
                phone: this.state.phone,
                address: this.state.streetAddress,
                country: this.state.country,
                city: this.state.city,
               
            },
            success: function(data) {
              alert('Form was submited:');
              location.reload();
            }
        });
    }
    
  render() {
    const style = {
      width: '450px'
     };
  
    return (
       <div className="register"  id="custom-container">
       
              <Col xsHidden>
              <div class="container" style={style}>
                      <div class="stepwizard">
                          <div class="stepwizard-row setup-panel">
                              <div class="stepwizard-step col-xs-3 col-md-6 col-sm-6"> 
                                  <a href="#step-1" type="button" class="btn btn-success btn-sm btn-circle">Personal Info</a>
                              </div>
                              <div class="stepwizard-step col-xs-3 col-md-6 col-sm-6"> 
                                  <a href="#step-2" type="button" class="btn btn-default btn-sm btn-circle" disabled="disabled">Business Info</a>
                              </div>
                              
                          </div>
                      </div>
                      <br/>
                      
                      <form onSubmit={this.handleSubmit}>
                          <div class="panel panel-primary setup-content" id="step-1">
                              <div class="panel-heading">
                                   <h3 class="panel-title">Personal Info</h3>
                              </div>
                              <div class="panel-body">
                              
                                  <div class="form-group col-md-12">
                                      <label class="control-label">First Name</label>
                                      <input type="text" required="required" class="form-control" id="firstName" name="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleChange} />
                                  </div>
                                  
                                  <div class="form-group col-md-12">
                                      <label class="control-label">Last Name</label>
                                      <input type="text" required="required" class="form-control" id="lastName" name="lastName" placeholder="Enter Last Name"  onChange={this.handleChange} />
                                  </div>
                                  
                                   <div class="form-group col-md-12">
                                      <label class="control-label">Phone</label>
                                      <input type="text" required="required" class="form-control" id="phone" name="phone" placeholder="Enter Phone" onChange={this.handleChange}/>
                                  </div>
                                  
                                  <div class="form-group col-md-12">
                                      <label class="control-label">Email</label>
                                      <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={this.handleChange}/>
                                  </div>
                                  
                                    <div class="form-group col-md-6">
                                     <label for="inputPassword4">Password</label>
                                      <input type="password" class="form-control" id="inputPassword4" name="password" placeholder="Password" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-6">
                                      <label for="inputPassword4">Confirm Password</label>
                                      <input type="password" class="form-control" id="inputPassword4" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange}/>
                                    </div>
                                                    
                                  <div class="form-group col-md-12">
                                  <button class="btn btn-primary nextBtn pull-right" type="button">Next</button>
                                  </div>
                              </div>
                          </div>
                          
                          <div class="panel panel-primary setup-content" id="step-2">
                              <div class="panel-heading">
                                   <h3 class="panel-title">Business Info</h3>
                              </div>
                              <div class="panel-body">
                                    <div class="form-group col-md-12">
                                      <label for="businessName">Business Name</label>
                                      <input type="text" class="form-control" id="businessName" name="businessName" placeholder="Business Name" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                      <label for="businessType">Business Type</label>
                                      <select class="form-control" id="businessType" name="businessType" onChange={this.handleChange}>
                                        <option>Supplier</option>
                                        <option>Buyer</option>
                                        <option>Both</option>
                                      </select>
                                    </div>
                
                                    <div class="form-group col-md-12">
                                      <label for="streetAddress">Street Address</label>
                                      <input type="text" class="form-control" id="address" name="address" placeholder="Street Address" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                      <label for="city">City</label>
                                      <select class="form-control" id="exampleFormControlSelect1" name="city" onChange={this.handleChange}>
                                        <option>Dakar</option>
                                        <option>Touba</option>
                                        <option>Thiès</option>
                                        <option>Rufisque</option>
                                        <option>Kaolack</option>
                                        <option>M'Bour</option>
                                        <option>Ziguinchor</option>
                                        <option>Saint-Louis</option>
                                        <option>Diourbel</option>
                                        <option>Louga</option>
                                        <option>Tambacounda</option>
                                        <option>Richard Toll</option>
                                        <option>Kolda</option>
                                        <option>Mbacké</option>
                                        <option>Tivaouane</option>
                                        <option>Joal-Fadiouth</option>
                                        <option>Kaffrine</option>
                                        <option>Dahra</option>
                                        <option>Bignona</option>
                                        <option>Fatick</option>
                                        <option>Dagana</option>
                                        <option>Bambey</option>
                                        <option>Vélingara</option>
                                        <option>Sédhiou</option>
                                        <option>Sébikhotane</option>
                                        <option>Kédougou</option>
                                        <option>Nguékhokh</option>
                                        <option>Kayar</option>
                                        <option>Pout</option>
                                        <option>Mékhé</option>
                                        <option>Matam</option>
                                        <option>Ouro Sogui</option>
                                        <option>Nioro du Rip</option>
                                        <option>Kébémer</option>
                                        <option>Koungheul</option>
                                        <option>Guinguinéo</option>
                                        <option>Bakel</option>
                                        <option>Mboro</option>
                                        <option>Linguère</option>
                                        <option>Sokone</option>
                                        <option>Goudomp</option>
                                        <option>Thiadiaye</option>
                                        <option>Ndioum</option>
                                        <option>Damniadio</option>
                                        <option>Khombole</option>
                                        <option>Gossas</option>
                                        <option>Kanel</option>
                                      </select>
                                    </div>
                                     <div class="form-group col-md-12">
                                      <button type="submit" class="btn btn-primary pull-right">Sign Up</button>
                                     </div>
                              </div>
                          </div>
                      </form>
                  </div>
                  </Col>
                  
                   {/*Mobile Form*/}
                   <Col smHidden mdHidden lgHidden xlHidden>
                    <form onSubmit={this.handleSubmit}>
                     <div class="form-group">
                      <label for="firstName">First Name</label>
                      <input type="text" required="required" class="form-control" id="firstName" name="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleChange} />
                    </div>
                     <div class="form-group">
                      <label for="lastName">Last Name</label>
                      <input type="text" required="required" class="form-control" id="lastName" name="lastName" placeholder="Enter Last Name"  onChange={this.handleChange} />
                    </div>
                     <div class="form-group">
                      <label for="phone">Phone</label>
                      <input type="text" required="required" class="form-control" id="phone" name="phone" placeholder="Enter Phone Number"  onChange={this.handleChange} />
                    </div>
                    
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={this.handleChange}/>
                    </div>
                     <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="inputPassword4" name="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                      <label for="confirmPassword">Confirm Password</label>
                      <input type="password" class="form-control" id="inputPassword4" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange}/>
                    </div>
                    
                     <div class="stepwizard">
                          <div class="stepwizard-row setup-panel">
                              <div class="stepwizard-step col-xs-12"> 
                                  <p class="btn btn-success btn-sm" color='black' disabled>Company Info</p>
                              </div>
                          </div>
                      </div>
                    
                    
                     <div class="form-group">
                      <label for="businessName">Business Name</label>
                      <input type="text" class="form-control" id="businessName" name="businessName" placeholder="Business Name" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                      <label for="businessType">Business Type</label>
                      <select class="form-control" id="businessType" name="businessType" onChange={this.handleChange}>
                            <option>Supplier</option>
                            <option>Buyer</option>
                            <option>Both</option>
                      </select>
                    </div>
                    
                     <div class="form-group">
                      <label for="address">Street Address</label>
                      <input type="text" class="form-control" id="address" name="address" placeholder="Street Address" onChange={this.handleChange}/>
                    </div>
                     <div class="form-group">
                      <label for="address">Street Address</label>
                      <select class="form-control" id="exampleFormControlSelect1" name="city" onChange={this.handleChange}>
                        <option>Dakar</option>
                        <option>Touba</option>
                        <option>Thiès</option>
                        <option>Rufisque</option>
                        <option>Kaolack</option>
                        <option>M'Bour</option>
                        <option>Ziguinchor</option>
                        <option>Saint-Louis</option>
                        <option>Diourbel</option>
                        <option>Louga</option>
                        <option>Tambacounda</option>
                        <option>Richard Toll</option>
                        <option>Kolda</option>
                        <option>Mbacké</option>
                        <option>Tivaouane</option>
                        <option>Joal-Fadiouth</option>
                        <option>Kaffrine</option>
                        <option>Dahra</option>
                        <option>Bignona</option>
                        <option>Fatick</option>
                        <option>Dagana</option>
                        <option>Bambey</option>
                        <option>Vélingara</option>
                        <option>Sédhiou</option>
                        <option>Sébikhotane</option>
                        <option>Kédougou</option>
                        <option>Nguékhokh</option>
                        <option>Kayar</option>
                        <option>Pout</option>
                        <option>Mékhé</option>
                        <option>Matam</option>
                        <option>Ouro Sogui</option>
                        <option>Nioro du Rip</option>
                        <option>Kébémer</option>
                        <option>Koungheul</option>
                        <option>Guinguinéo</option>
                        <option>Bakel</option>
                        <option>Mboro</option>
                        <option>Linguère</option>
                        <option>Sokone</option>
                        <option>Goudomp</option>
                        <option>Thiadiaye</option>
                        <option>Ndioum</option>
                        <option>Damniadio</option>
                        <option>Khombole</option>
                        <option>Gossas</option>
                        <option>Kanel</option>
                    </select>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary pull-right">Sign Up</button>
                    </div>
                    <br/><br/>
                    
                    </form>
                  </Col>
                  {/*//Mobile Form*/}
              
      </div>
    );
  }
}

export default Signup;