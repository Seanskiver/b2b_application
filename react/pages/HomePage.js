import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, InputGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col, DropdownButton, MenuItem, } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
    
        return (
            <div className="page">
            <Col xsHidden>
                <Jumbotron class="top-banner" id="top-banner" style={{ width: 'auto', height: 'auto'}}>
                
                <div class="container top-banner-content" id="top-banner-content" bsStyle="align: center;">
                  <h2>FIND CLASSIFIED ADS</h2>
                  
                  <p>Buy And Sell Anything Or Find Local Businesses In Minutes</p>
                 
                 <form>
                      <div class="row">    
                      <div class="col-xs-8 col-xs-offset-2">
              		    <div class="input-group">
                              <div class="input-group-btn search-panel">
                                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                  	<span id="search_concept">Filter by</span> <span class="caret"></span>
                                  </button>
                                  <ul class="dropdown-menu" role="menu">
                                    <li><a href="#contains">Contains</a></li>
                                    <li><a href="#its_equal">It's equal</a></li>
                                    <li><a href="#greather_than">Greather than ></a></li>
                                    <li><a href="#less_than">Less than  </a></li>
                                    <li class="divider"></li>
                                    <li><a href="#all">Anything</a></li>
                                  </ul>
                              </div>
                              <input type="hidden" name="search_param" value="all" id="search_param"/>         
                              <input type="text" class="form-control" name="x" placeholder="Search term..."/>
                              <span class="input-group-btn">
                                  <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                              </span>
                          </div>
                      </div>
              	</div>
                </form>
                
                  </div>
                 
                  
                </Jumbotron>
                 </Col> 
                
                <Col smHidden mdHidden lgHidden >
                <div class="container">
                 <form>
                      <div class="row">    
                      <div class="col-xs-12 col-xs-offset-0">
              		    <div class="input-group">
                             
                              <input type="text" class="form-control" name="x" placeholder="Search term..."/>
                              <span class="input-group-btn">
                                  <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                              </span>
                          </div>
                      </div>
              	</div>
                </form>
                </div>
                <br/>
                
                <Carousel>
                <Carousel.Item>
                  <img style={{ width: 'auto', height: 120}} alt="900x500" src="https://media.licdn.com/media/p/2/005/045/3a7/0d7f1b1.png" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ width: 'auto', height: 120}}alt="900x500" src="http://s3.thingpic.com/images/ZB/fn1eSX9kKqVKNZgfc6WqotoV.jpeg" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ width: 'auto', height: 120}}alt="900x500" src="http://www.canaltownconnections.com/wp-content/themes/canaltown-connections/images/main-image.jpg" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
                
                </Col> 
                
                <Panel class="container">
                <span>BROWSE BY <b>CATEGORY</b> 
                <Link class="pull-right" to="/browse"><small>MORE&nbsp;</small>
                <span class="glyphicon glyphicon-align-justify"></span>
                </Link>
                </span>
                <hr/>
                <div class="b2bapp-categories">
                    <div class="col-md-3">
                      <div class="focus-grid b2bapp-boder1">
                        <Link to="/single">
                        <div class="focus-border">
                          <div class="focus-layout">
                            <div class="focus-image"><i class="fa fa-mobile"></i></div>
                              <h4 class="clrchg">Mobiles</h4>
                          </div>
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div class="col-md-3">
        						<div class="focus-grid b2bapp-boder2">	
        						<a class="btn-8" href="categories.html#parentVerticalTab2">
        							<div class="focus-border">
        								<div class="focus-layout">
        									<div class="focus-image"><i class="fa fa-laptop"></i></div>
        									<h4 class="clrchg"> Electronics & Appliances</h4>
        								</div>
        							</div>
        						</a>
        					</div>
        					</div>
        					<div class="col-md-3">
        					<div class="focus-grid b2bapp-boder3">
        						<a class="btn-8" href="categories.html#parentVerticalTab3">
        							<div class="focus-border">
        								<div class="focus-layout">
        									<div class="focus-image"><i class="fa fa-car"></i></div>
        									<h4 class="clrchg">Cars</h4>
        								</div>
        							</div>
        						</a>
        					</div>	
        					</div>
        					
        					<div class="col-md-3">
        					<div class="focus-grid b2bapp-boder5">
        						<a class="btn-8" href="categories.html#parentVerticalTab5">
        							<div class="focus-border">
        								<div class="focus-layout">
        									<div class="focus-image"><i class="fa fa-wheelchair"></i></div>
        									<h4 class="clrchg">Furnitures</h4>
        								</div>
        							</div>
        						</a>
        					</div>
        					</div>
        					<div class="col-md-3">
        					<div class="focus-grid b2bapp-boder6">
        						<a class="btn-8" href="categories.html#parentVerticalTab6">
        							<div class="focus-border">
        								<div class="focus-layout">
        									<div class="focus-image"><i class="fa fa-paw"></i></div>
        									<h4 class="clrchg">Pets</h4>
        								</div>
        							</div>
        						</a>
        					</div>	
        					</div>
        					<div class="col-md-3">
        					<div class="focus-grid b2bapp-boder7">
        						<a class="btn-8" href="categories.html#parentVerticalTab7">
        							<div class="focus-border">
        								<div class="focus-layout">
        									<div class="focus-image"><i class="fa fa-book"></i></div>
        									<h4 class="clrchg">Books, Sports & Hobbies</h4>
        								</div>
        							</div>
        						</a>
        					</div>	
        					</div>
        					<div class="col-md-3">
        					<div class="focus-grid b2bapp-boder8">
        						<a class="btn-8" href="categories.html#parentVerticalTab8">
        							<div class="focus-border">
        								<div class="focus-layout">
        									<div class="focus-image"><i class="fa fa-asterisk"></i></div>
        									<h4 class="clrchg">Fashion</h4>
        								</div>
        							</div>
        						</a>
        					</div>	
        					</div>
        					<div class="col-md-3">
        					<div class="focus-grid b2bapp-boder9">
        						<a class="btn-8" href="categories.html#parentVerticalTab9">
        							<div class="focus-border">
        								<div class="focus-layout">
        									<div class="focus-image"><i class="fa fa-gamepad"></i></div>
        									<h4 class="clrchg">Kids</h4>
        								</div>
        							</div>
        						</a>
        					</div>	
        					</div>
        					
        					<div class="clearfix"></div>
                </div>
                </Panel>
            </div>
        )
    }
}

export default HomePage;