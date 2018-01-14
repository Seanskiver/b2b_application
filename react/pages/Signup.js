import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col} from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Signup extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        email: '',
        businessName: '',
        businessType: '',
        businessCategory: '',
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
            url: '/signup',
            data: {
                '_token': $('input[name=_token]').val(),
                ...this.email,
                ...this.businessName,
                ...this.businessType,
                ...this.businessCategory,
                ...this.phone,
                ...this.address,
                ...this.country,
                ...this.city,
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
       <div className="register"  id="custom-container">
       
              <Col xsHidden>
              <section>
		<div id="agileits-sign-in-page" class="sign-in-wrapper">
			<div class="agileinfo_signin">
			<h3>Sign Up</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" class="form-control" id="businessName" name="businessName" placeholder="Business Name" onChange={this.handleChange}/>
					<input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={this.handleChange}/>
					<input type="text" required="required" class="form-control" id="phone" name="phone" placeholder="Enter Phone" onChange={this.handleChange}/>
					<label for="businessType">Business Type</label>
                                      <select class="form-control" id="businessType" name="businessType" onChange={this.handleChange}>
                                        <option>Supplier</option>
                                        <option>Buyer</option>
                                        <option>Both</option>
                                      </select>

                    <label for="businessCategory">Business Category</label>
                                      <select class="form-control" id="businessCategory" name="businessCategory" onChange={this.handleChange}>
                                        <option>Electronics & Appliance</option>
                                        <option>Sport</option>
                                        <option>Fashion</option>
                                        <option>Food & Beverage</option>
                                        <option>Automotive</option>
                                        <option>Home Appliance</option>
                                        <option>Furniture</option>
                                      </select>
					<br />
					<input type="text" class="form-control" name="Name" placeholder="Street Address" required=""/> 
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
					<br />
					<input type="password" class="form-control" name="Password" placeholder="Password" required=""/> 
					<input type="password" class="form-control" name="Password" placeholder="Confirm Password" required=""/> 
					<div class="signin-rit">
						<span class="agree-checkbox">
							<label class="checkbox"><input type="checkbox" name="checkbox"/>I agree to your <a class="w3layouts-t" href="#terms" target="_blank">Terms of Use</a> and <a class="w3layouts-t" href="#privacy" target="_blank">Privacy Policy</a></label>
						</span>
					</div>
					<input type="submit" value="Sign Up"/>
				</form>
			</div>
		</div>
	</section>
                  </Col>
                  
                   {/*Mobile Form*/}
                   <Col smHidden mdHidden lgHidden>
                   <form onSubmit={this.handleSubmit}>
                              
                                 <div class="form-group col-md-12">
                                      <label for="businessName">Business Name</label>
                                      <input type="text" class="form-control" id="businessName" name="businessName" placeholder="Business Name" onChange={this.handleChange}/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                      <label class="control-label">Email</label>
                                      <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={this.handleChange}/>
                                  </div>
                                  
                                   <div class="form-group col-md-12">
                                      <label class="control-label">Phone</label>
                                      <input type="text" required="required" class="form-control" id="phone" name="phone" placeholder="Enter Phone" onChange={this.handleChange}/>
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
                                      <label for="businessCategory">Business Category</label>
                                      <select class="form-control" id="businessCategory" name="businessCategory" onChange={this.handleChange}>
                                        <option>Electronics & Appliance</option>
                                        <option>Sport</option>
                                        <option>Fashion</option>
                                        <option>Food & Beverage</option>
                                        <option>Automotive</option>
                                        <option>Home Appliance</option>
                                        <option>Furniture</option>
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
                                      <button type="submit" class="btn btn-primary pull-right">Continue</button>
                                     </div>
                      </form>
                      
                      <br/>
                  </Col>
                  {/*//Mobile Form*/}
              
      </div>
    );
  }
}

export default Signup;