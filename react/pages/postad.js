import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, Button, Table, Carousel, Jumbotron} from 'react-bootstrap';

class postad extends React.Component {
    
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
    alert('The ad titled '+ this.state.value +' was submitted: ');
    event.preventDefault();
  }
    
    render() {
        return (
        <div class="submit-ad main-grid-border">
		<div class="container">
			<h2 class="w3-head">Post an Ad</h2>
			<div class="post-ad-form">
				<form onSubmit={this.handleSubmit}>
					<label>Select Category <span>*</span></label>
					<select class="">
					  <option>Select Category</option>
					  <option>Mobiles</option>
					  <option>Electronics and Appliances</option>
					  <option>Cars</option>
					  <option>Bikes</option>
					  <option>Furniture</option>
					  <option>Pets</option>
					  <option>Books, Sports and hobbies</option>
					  <option>Fashion</option>
					  <option>Kids</option>
					  <option>Services</option>
					  <option>Real, Estate</option>
					</select>
					<div class="clearfix"></div>
					<label>Ad Title <span>*</span></label>
					<input type="text" class="phone" placeholder="" value={this.state.value} onChange={this.handleChange}/>
					<div class="clearfix"></div>
					<label>Ad Description <span>*</span></label>
					<textarea class="mess" placeholder="Write few lines about your ad"></textarea>
					<input type="submit" value="Post"/>
					<div class="clearfix"></div>
				</form>
			</div>
		</div>	
	</div>
        )
    }
}

export default postad;