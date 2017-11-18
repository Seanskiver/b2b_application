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
    return (
       <div className="register"  id="custom-container">
              
              <form onSubmit={this.handleSubmit}>
               <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name"  onChange={this.handleChange} />
                  </div>
                </div>
                
                 <div class="form-row">
                   <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone" onChange={this.handleChange}/>
                  </div>
                </div>
                
                <div class="form-row">
                  
                  <div class="form-group col-md-6">
                   <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" name="password" placeholder="Password" onChange={this.handleChange}/>
                  </div>
                  
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Confirm Password</label>
                    <input type="password" class="form-control" id="inputPassword4" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange}/>
                  </div>
                </div>
              
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="businessName">Business Name</label>
                    <input type="text" class="form-control" id="businessName" name="businessName" placeholder="Business Name" onChange={this.handleChange}/>
                  </div>
                  
                  <div class="form-group col-md-6">
                    <label for="businessType">Business Type</label>
                    <select class="form-control" id="businessType" name="businessType" onChange={this.handleChange}>
                      <option>Supplier</option>
                      <option>Buyer</option>
                      <option>Both</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="streetAddress">Street Address</label>
                    <input type="text" class="form-control" id="address" name="address" placeholder="Street Address" onChange={this.handleChange}/>
                  </div>
                  
                  <div class="form-group col-md-6">
                    <label for="email">City</label>
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