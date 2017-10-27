import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, InputGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col, DropdownButton, MenuItem, } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
    
        return (
            <div className="page">
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
                
                
                <Panel class="container">
                <span>BROWSE BY <b>CATEGORY</b> 
                <Link class="pull-right" to="/browse">MORE&nbsp;
                <span class="glyphicon glyphicon-align-justify"></span>
                </Link>
                </span>
                <hr/>
                <div class="b2bapp-categories">
                    <div class="col-md-3">
                      <div class="focus-grid b2bapp-boder1">
                        <Link to="/mobiles">
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