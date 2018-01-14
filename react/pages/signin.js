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
    alert('The email ' + this.state.value + 'was submitted');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <section>
		<div id="agileits-sign-in-page" class="sign-in-wrapper">
			<div class="agileinfo_signin">
			<h3>Sign In</h3>
				<form action="#" method="post" onSubmit={this.handleSubmit}>
					<input type="email" name="Your Email" placeholder="Your Email" required="" value={this.state.value} onChange={this.handleChange}/> 
					<input type="password" name="Password" placeholder="Password" required=""/> 
					<input type="submit" value="Sign In"/>
					<div class="forgot-grid">
						<label class="checkbox"><input type="checkbox" name="checkbox"/>Remember me</label>
						<div class="forgot">
							<a href="#" data-toggle="modal" data-target="#myModal2">Forgot Password?</a>
						</div>

						<div class="modal fade" id="myModal2" role="dialog">
							<div class="modal-dialog">

							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										<h3 class="w3ls-password">Get Password</h3>		
										<p class="get-pw">Enter your email address below and we'll send you an email with instructions.</p>
										<form action="#" method="post">
											<input type="text" class="user" name="email" placeholder="Email" required=""/>
											<input type="submit" value="Submit"/>
										</form>
									</div>
								</div>
							</div>
							</div>
						</div>
						<div class="clearfix"> </div>
					</div>
				</form>
				<h6> Not a Member Yet? <a href="#signup">Sign Up Now</a> </h6>
			</div>
		</div>
	</section>
      </div>
    );
  }
}

export default signin;