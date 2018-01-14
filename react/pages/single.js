import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, InputGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col, DropdownButton, MenuItem, Grid, Thumbnail, Row, Image, Media, Tabs, Tab } from 'react-bootstrap';

class single extends React.Component {
    
    render() {
        return (
            <div>
                <div class="w3layouts-breadcrumbs text-center">
					<div class="container">
						<span class="agile-breadcrumbs">
						<a href="#"><i class="fa fa-home home_1"></i></a> / 
						<a href="#all-classifieds">All Ads</a> / 
						<a href="#mobile-phones">Mobile Phones</a> / 
						<span> Phone Name</span></span>
					</div>
				</div>
                <div class="single-page main-grid-border">
		<div class="container">
			<div class="product-desc">
				<div class="col-md-7 product-view">
					<h2>Phone Name</h2>
					<p> <i class="glyphicon glyphicon-map-marker"></i><a href="#">state</a>, <a href="#">city</a>| Added at 06:55 pm, Ad ID: 987654321</p>
					<div class="flexslider">
						<ul class="slides">
							<li data-thumb="images/ss1.jpg">
								<img src="images/ss1.jpg" />
							</li>
							<li data-thumb="images/ss2.jpg">
								<img src="images/ss2.jpg" />
							</li>
							<li data-thumb="images/ss3.jpg">
								<img src="images/ss3.jpg" />
							</li>
							<li data-thumb="images/ss4.jpg">
								<img src="images/ss4.jpg" />
							</li>
						</ul>
					</div>
					  <script defer src="js/jquery.flexslider.js"></script>
					<div class="product-details">
						<h4><span class="w3layouts-agileinfo">Brand </span> : <a href="#category">Company name</a><div class="clearfix"></div></h4>
						<h4><span class="w3layouts-agileinfo">Views </span> : <strong>150</strong></h4>
						<h4><span class="w3layouts-agileinfo">Fuel </span> : Petrol</h4>
						<h4><span class="w3layouts-agileinfo">Summary</span> :<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p><div class="clearfix"></div></h4>
						
						
						
					</div>
					
					
					
				</div>
				<div class="col-md-5 product-details-grid">
					<div class="item-price">
						<div class="product-price">
							<p class="p-price">Price</p>
							<h3 class="rate">$ 700</h3>
							<div class="clearfix"></div>
						</div>
						<div class="condition">
							<p class="p-price">Condition</p>
							<h4>Good</h4>
							<div class="clearfix"></div>
						</div>
						<div class="itemtype">
							<p class="p-price">Item Type</p>
							<h4>Mobile Phones</h4>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="interested text-center">
						<h4>Contact the Seller!</h4>
						<p><a href="#seller"><i class="glyphicon glyphicon-user"></i><strong>John Smith</strong></a></p>
						<p><i class="glyphicon glyphicon-earphone"></i>555-555-5555</p>
						<p><i class="glyphicon glyphicon-road"></i>123 Street Address</p>
					</div>
						
				</div>
			<div class="clearfix"></div>
			
			
			
			</div>
			
			
			
			<div class="submit-ad main-grid-border">
		        <div class="container">
		        <h2 class="w3-head">3 reviews for <strong>Lorem Ipsum</strong></h2>
			<div class="submit-ad main-grid-border">
		<div class="container">
			<div class="agileinfo-ads-display col-md-9">
					<div class="wrapper">					
					<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					  <ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
						<li role="presentation" class="active">
						  <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
							<span class="text">Reviews</span>
						  </a>
						</li>
					  </ul>
					  <div id="myTabContent" class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
						   <div>
												<div id="container">
								<div class="view-controls-list" id="viewcontrols">
									<label>view :</label>
									<a class="gridview"><i class="glyphicon glyphicon-th"></i></a>
									<a class="listview active"><i class="glyphicon glyphicon-th-list"></i></a>
								</div>
								<div class="sort">
								   <div class="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">View all</option>
														<option value="">Positive</option>
														<option value="">Negative</option>
										</select>
									   </div>
									 </div>
								<div class="clearfix"></div>
							<ul class="list">
								<a href="#seller">
									<li>
									<img src="http://rsassociates.itsupportnepal.com/rs/wp-content/uploads/2017/09/gravatar_1.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Mike Jones</h5>
									<span class="adprice">(+) 6 hours ago</span>
									<p class="catpath">Mobile Phones » Phone Name</p>
									<p class="catpath">There are many variations of passages of Lorem Ipsum</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:55</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#seller">
									<li>
									<img src="http://atleticafranciacorta.com/assets/images/members/profile/2_3_1_avatar.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Ms. Jackson</h5>
									<span class="adprice">(-) 17 hours ago</span>
									<p class="catpath">Mobile Phones » Phone Name</p>
									<p class="catpath">There are many variations of passages of Lorem Ipsum</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:45</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#seller">
									<li>
									<img src="http://www.creazo.fr/wp-content/uploads/2016/03/1458916347_ninja-background.png" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Arnold</h5>
									<span class="adprice">(+) 11 days ago</span>
									<p class="catpath">Mobile Phones » Phone Name</p>
									<p class="catpath">There are many variations of passages of Lorem Ipsum</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:30</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
							</ul>
						</div>
							</div>
							<ul class="pagination pagination-sm">
							<li><a href="#">Prev</a></li>
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#">5</a></li>
							<li><a href="#">6</a></li>
							<li><a href="#">7</a></li>
							<li><a href="#">8</a></li>
							<li><a href="#">Next</a></li>
						</ul>
						</div>
						
					  </div>
					</div>
				</div>
				</div>
		</div>	
	</div>
	</div>
	</div>
			
		</div>
	</div>
	
            </div>
        )
    }
}

export default single;