import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, InputGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col, DropdownButton, MenuItem, Grid, Thumbnail, Row, Image, Media, Tabs, Tab } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
    
        return (
            <div className="page">
            <Col xsHidden>
             
            
                <Jumbotron class="top-banner" id="top-banner" style={{ height: 'auto'}}>
                 <Row className="show-grid1" id="top-ban-grids">
             
                  <Col smHidden md={2} id="banner-side-grids">
                  <h4><i class="fa fa-list" aria-hidden="true"></i> TOP MARKETS</h4>
                  
                  <ul class="list-group">
                    <li class="list-group-item">Sports</li>
                    <li class="list-group-item">Food & Beverage</li>
                    <li class="list-group-item">Books</li>
                    <li class="list-group-item">Automobile & Appliance</li>
                    <li class="list-group-item">Home Appliance</li> 
                    <li class="list-group-item">Furniture</li>
                    <li class="list-group-item">More <i class="fa fa-angle-right pull-right" aria-hidden="true"></i></li>
                  </ul>
                  
                  </Col>
                    
                     <Col sm={12} md={10}>
                    <div class="container top-banner-content" id="top-banner-content">
                      <h2>FIND CLASSIFIED ADS</h2>
                      
                      <p>Buy And Sell Anything Or Find Local Businesses In Minutes</p>
                      
                <form id="form-cantainer">
                    <div class="form-row" id="form-cantainer-input">
                       <div class="form-group col-md-3 col-sm-3 col-lg-3">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <select id="inputState" class="form-control">
                          <option selected>All Categories </option>
                          <option>category 1</option>
                          <option>category 2</option>
                        </select>
                        <div class="input-group-addon" id="search-icon"><i class="fa fa-align-justify" aria-hidden="true"></i></div>
                        </div>
                      </div>
                      <div class="form-group col-md-7 col-sm-7 col-lg-7">
                      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <input type="text" class="form-control" id="inputCity" placeholder="Enter Keyword"/>
                        <div class="input-group-addon" id="search-icon"><i class="fa fa-clone" aria-hidden="true"></i></div>
                        </div>
                      </div>
                      <div class="form-group col-md-2 col-sm-2 col-lg-2">
                        <input type="submit" class="form-control btn btn-primary" value="Search" id="submit"/>
                      </div>
                    </div>
                  
                  </form>
                  </div>
                  </Col>
                  
                  { /* <Col smHidden md={2} id="banner-side-grids">
                    
                      <h4><i class="fa fa-list" aria-hidden="true"></i> TOP STORES</h4>
                  
                        <ul class="list-group">
                          <li class="list-group-item">Cras justo odio</li>
                          <li class="list-group-item">Dapibus ac facilisis in</li>
                          <li class="list-group-item">Morbi leo risus</li>
                          <li class="list-group-item">Porta ac consectetur ac</li>
                          <li class="list-group-item">Vestibulum at eros</li> 
                          <li class="list-group-item">Porta ac consectetur ac</li>
                          <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    
                    </Col>*/}
                  
                  </Row>
                 
                  
                </Jumbotron>
                <br/>
                  </Col> 
                
               
               
               
               
               
               
               
               
               
               
               
                
                {/*Display categories on larger screen only*/}
                <Col xsHidden>
                <Panel class="container1"  id="custom-container">
                <span>BROWSE BY <b>CATEGORY</b> 
                <Link class="pull-right" id="panel-link" to="/browse"><small>MORE&nbsp;</small>
                <span class="glyphicon glyphicon-align-justify"></span>
                </Link>
                </span>
                <hr/>
                <div class="b2bapp-categories">
                   <div class="col-md-2">
          						<div class="focus-grid">
          							<a class="btn-8" href="categories.html">
          								<div class="focus-border">
          									<div class="focus-layout">
          										<div class="focus-image"><i class="fa fa-mobile"></i></div>
          										<h4 class="clrchg">Mobiles</h4>
          									</div>
          								</div>
          							</a>
          						</div>
          					</div>
          					<div class="col-md-2">
          						<div class="focus-grid">	
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
          					<div class="col-md-2">
          					<div class="focus-grid">
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
          				
          					<div class="col-md-2">
          					<div class="focus-grid">
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
          					<div class="col-md-2">
          					<div class="focus-grid">
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
          					<div class="col-md-2">
          					<div class="focus-grid">
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
          				
          				
          					<div class="clearfix"></div>
                </div>
                </Panel>
                <br/>
                </Col>
                {/*//Display categories on larger screen only*/}
                
                
                
                <Col xsHidden>
               {/* <!-- trending products -->	*/}		
                <Panel class="container1" id="custom-container">
                <span>TRENDING <b>PRODUCTS</b> 
                <Col xsHidden>
                <Link class="pull-right" id="panel-link" to="/browse"><small>MORE&nbsp;</small>
                <span class="glyphicon glyphicon-align-justify"></span>
                </Link>
                 </Col>
                </span>
                <hr/> 
        			{/*	<!-- slider -->*/}
        				<div class="agile-trend-ads">
        							<ul id="felexiselSlider">
        								<li>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://stat.homeshop18.com/homeshop18/images/productImages/338/samsung-guru-e1200-mobile-phone-large_a68c67293ae8ecba99b8395694101cce.jpg" alt="" />
        											<span class="price">&#36; 450</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>There are many variations of passages</h5>
        											<span>1 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://www.lg.com/us/images/cell-phones/MD05796989/md05795769-350x350.jpg" alt="" />
        											<span class="price">&#36; 399</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>Lorem Ipsum is simply dummy</h5>
        											<span>3 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://image.priceprice.k-img.com/global/images/product/mobilephones/Cherry_Mobile_Flare_P1/Cherry_Mobile_Flare_P1_L_1.jpg" alt="" />
        											<span class="price">&#36; 199</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>It is a long established fact that a reader</h5>
        											<span>8 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://teja10.kuikr.com/o1/20161227/ak_1754001356-1482799919.jpg" alt="" />
        											<span class="price">&#36; 159</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>passage of Lorem Ipsum you need to be</h5>
        											<span>19 hour ago</span>
        										</div>
        									</div>
        									
        								</li>
        								<li>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://www.slickwraps.com/media/catalog/category/s5_3.jpg" alt="" />
        											<span class="price">&#36; 1599</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>There are many variations of passages</h5>
        											<span>1 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://img.c.huaweistatic.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/y6-2017/y6-2017-listimage-black.png" alt="" />
        											<span class="price">&#36; 1099</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>passage of Lorem Ipsum you need to be</h5>
        											<span>1 day ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://5.imimg.com/data5/OH/VT/MY-37954860/1110-nokia-mobile-phone-500x500.jpg" alt="" />
        											<span class="price">&#36; 109</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>It is a long established fact that a reader</h5>
        											<span>9 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/others/alcactel-go-flip/alcactel-go-flip-midnight-blue-open-1-2x.jpg" alt="" />
        											<span class="price">&#36; 189</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>Lorem Ipsum is simply dummy</h5>
        											<span>3 hour ago</span>
        										</div>
        									</div>
        									
        								</li>
        							
        						</ul>
        					</div>   
        			{/*<!-- //slider -->*/}		
        			
        		
        			</Panel>
        			<br/>
        			</Col>
        			
        			
        			
        			
        	
        			
        				{/*Display tabs on large screens only*/}
        			<Col xsHidden>
        			<Panel class="container1" id="custom-container">
               <div  id="exTab3">	
                  <ul class="nav nav-pills" id="nav-pills">
                  			<li class="active">
                          <a  href="#1b" data-toggle="tab"><i class="fa fa-briefcase" aria-hidden="true"></i> TOP BUSINESSES </a>
                  			</li>
                  			<li><a href="#2b" data-toggle="tab"><i class="fa fa-tags" aria-hidden="true"></i> TOP CATEGORIES</a>
                  			</li>
                  			<li><a href="#3b" data-toggle="tab"><i class="fa fa-align-justify" aria-hidden="true"></i> TOP PRODUCTS</a>
                  			</li>
                  		</ul>
                  
                  			<div class="tab-content clearfix">
                  			{/*TOP BUSINESSES TAB*/}
                  			  <div class="tab-pane active" id="1b">
                            <Row>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAbNAAAAJDk1OWYwZWE1LTgzOTItNGZjMy04YWQ0LWVkNWIzNWE2NGNjNw.png" thumbnail />
                                <p><b>BFCS</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://d3pcsg2wjq9izr.cloudfront.net/files/32356/images/LOGO-400.jpg" thumbnail />
                                <p><b>Adi Associates</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="http://www.fordaq.com/dcl-390000-380756/SIBA--SA.png" thumbnail />
                                <p><b>SIBA</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAmfAAAAJDc4MmY1OWMyLWIyMWEtNDdkZC04YTdjLTEzNDhlZGE4YTg0Mg.png" thumbnail />
                                <p><b>SnNOG</b></p>
                              </Col>
                              
                               <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAdbAAAAJGQ0OTE1ZjE1LWRiYTUtNDYyNi04ZWYwLTQ4MmQ1YmI4YjI4Mw.png" thumbnail />
                                <p><b>Hawodia</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://media.licdn.com/media/AAEAAQAAAAAAAAh6AAAAJDQ1MDJlNjBmLWEwNTUtNDc5Ni1hYjk0LWY4MTIxMWQ3ZTRjZg.png" thumbnail />
                                <p><b>Wari</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAbzAAAAJDdiMzQxZTMyLTY5MWItNGM2Ny1iMDQyLWI0NWEzYzRjMDhlYg.png" thumbnail />
                                <p><b>SCL</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="http://www.foodbytesworld.com/wp-content/uploads/2016/10/logo_biotech-services-senegal.jpg" thumbnail />
                                <p><b>BioTech</b></p>
                              </Col>
                              
                            </Row>
                  				</div>
                  					{/*//TOP BUSINESSES TAB*/}
                  				
                  					{/*TOP CATEGORIES TAB*/}
                  				<div class="tab-pane" id="2b">
                  				  <Row>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://www.firsttechfed.com/-/media/FirstTech-Web/Products/Product-Single-Column-List/New-Auto-Loans-icon.png?h=680&w=680&la=en&hash=D7EEE23784F7BA8DB0B55AC385FC8FB8CD676F3B" thumbnail />
                                <p><b>Automobile</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/iMac-icon.png" thumbnail />
                                <p><b>Electronics</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://www.familydollar.com/content/dam/familydollar/interface/products/category-icons/Food-&-Beverage.png" thumbnail />
                                <p><b>Food & Beverage</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30jxaBMzkvP8pdkdintkEs75zY_VoWqDqDvr-hIxkIWeLS1l5Pw" thumbnail />
                                <p><b>Home Appliances</b></p>
                              </Col>
                              
                               <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="http://counciloftime.com/App_Themes/main/Mobile-Icon-White-on-Black.png" thumbnail />
                                <p><b>Mobile Phones</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://n6-img-fp.akamaized.net/free-icon/soccer-ball-variant_318-49974.jpg?size=338c&ext=jpg" thumbnail />
                                <p><b>Sports & Entertainment</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="http://24213-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2016/05/Fashion-Category-Icon.png" thumbnail />
                                <p><b>Fashion</b></p>
                              </Col>
                              <Col xs={6} md={3} sm={4} id="tap-col">
                                <Image id="tab-images" src="https://www.shareicon.net/data/2016/07/10/119365_seater_512x512.png" thumbnail />
                                <p><b>Furnitures</b></p>
                              </Col>
                              
                            </Row>
                  				
                  				</div>
                  				{/*//TOP CATEGORIES TAB*/}
                  				
                  				
                  				{/*TOP PRODUCTS TAB*/}
                          <div class="tab-pane" id="3b">
                            <p>Content goes here.</p>	
                  				</div>
                  				{/*//TOP PRODUCTS TAB*/}
                           
                  			</div>
                    </div>
                    
        			</Panel>
        			</Col>
        				{/*//Display tabs on large screens only*/}
        				
        				
        				
        				
{/************************************************************ MOBILE SECTION *******************************************************/
/***********************************************************************************************************************************/}
              {/*Display banner on mobile only*/}
        			<Col smHidden mdHidden lgHidden xlHidden>
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
                  <img id="mobile-carousel-img" alt="900x500" src="https://media.licdn.com/media/p/2/005/045/3a7/0d7f1b1.png" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img id="mobile-carousel-img" alt="900x500" src="http://s3.thingpic.com/images/ZB/fn1eSX9kKqVKNZgfc6WqotoV.jpeg" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img id="mobile-carousel-img" alt="900x500" src="http://www.canaltownconnections.com/wp-content/themes/canaltown-connections/images/main-image.jpg" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
                </Col> 
                {/*//Display banner on mobile only*/}
                
                
                
                {/*Display categories on mobile only*/}
                <Col smHidden mdHidden lgHidden xlHidden>
                <Grid>
                  <Row>
                    <Col xs={3} class="m-category">
                      <Image src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/06_menu_bullet-512.png" circle />
                      <p class="m-category-title">More</p>
                    </Col>
                    <Col xs={3} class="m-category">
                      <Image src="http://wfarm4.dataknet.com/static/resources/icons/set181/5be2d6ea.png" circle />
                      <p class="m-category-title">Electronics</p>
                    </Col>
                    <Col xs={3} class="m-category">
                      <Image src="https://image.flaticon.com/icons/png/512/262/262198.png" circle />
                      <p class="m-category-title">Fashion</p>
                    </Col>
                    <Col xs={3} class="m-category-b">
                      <Image src="https://cdn4.iconfinder.com/data/icons/repairs-flat-icon-set/256/icon_furniture_flat-512.png" circle />
                      <p class="m-category-title">Furnitures</p>
                    </Col>
                    
                  </Row>
                  <hr/>
                </Grid>
                </Col>
                {/*//Display categories on mobile only*/}
                
                   
                {/*Display popular stores on mobile only*/}
                <Col smHidden mdHidden lgHidden xlHidden class="container2">
                <Panel>
                <span>POPULAR <b>STORES</b> 
                
                </span>
                <hr/>
                <div>
                  <Media>
                      <Media.Left>
                        <img width={70} height={70} src="http://www.guessthelogo.com/images/game-image/store-logo-game.gif" alt="placeholder thumbnail" />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading align="center">Store 1 Name</Media.Heading>
                        <p align="center">Rating Here</p>
                
                      </Media.Body>
                    </Media>
                    <Media>
                      <Media.Left>
                        <img width={70} height={70} src="http://www.guessthelogo.com/images/game-image/store-logo-game.gif" alt="placeholder thumbnail" />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading align="center">Store 2 Name</Media.Heading>
                        <p align="center">Rating Here</p>
                
                      </Media.Body>
                    </Media>
                    <Media>
                      <Media.Left>
                        <img width={70} height={70} src="http://www.guessthelogo.com/images/game-image/store-logo-game.gif" alt="placeholder thumbnail" />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading align="center">Store 3 Name</Media.Heading>
                        <p align="center">Rating Here</p>
                
                      </Media.Body>
                    </Media>
                    <Media>
                      <Media.Left>
                        <img width={70} height={70} src="http://www.guessthelogo.com/images/game-image/store-logo-game.gif" alt="placeholder thumbnail" />
                      </Media.Left>
                      <Media.Body>
                        <Media.Heading align="center">Store 4 Name</Media.Heading>
                        <p align="center">Rating Here</p>
                
                      </Media.Body>
                    </Media>
                                       
                                   
                   
        					<div class="clearfix"></div>
        					<hr/>
        				<Link id="link" to="/browse">	
        				<span>View More
                <span class="glyphicon glyphicon-chevron-right pull-right"></span>
                </span>
                </Link>
                </div>
                </Panel>
                </Col>
                {/*//Display popular stores on mobile only*/}
                
                
                {/*Display for you products on mobile only*/}
                <Col smHidden mdHidden lgHidden xlHidden class="container1">
                <Panel>
                <span>FOR <b>YOU</b></span>
                <br/><br/>
                 <Grid>
                    <Row>
                      <Col xs={6} md={4} class="for-you-pro">
                        <Image class="for-you-pro-img" src="http://pop.h-cdn.co/assets/cm/15/06/54cfd569f384a_-_bta-products-01-1013-de.jpg" rounded/>
                         <p><b>Product Name</b> <span>Price: $1000</span></p>
                      </Col>
                      
                      <Col xs={6} md={4} class="for-you-pro">
                        <Image class="for-you-pro-img" src="https://i1.adis.ws/i/canon/canon-products-home-printers-TS8050?qlt=70&w=1200" rounded/>
                        <p><b>Product Name</b> <span>Price: $1000</span></p>
                      </Col>
                      <hr/>
                      <Col xs={6} md={4} class="for-you-pro">
                        <Image class="for-you-pro-img" src="https://marketing-pages.fitbit.com/images/store/products-retina/charge/lrn_black_3qtr_small-cd505782ae6be2c436d158dbe6911d3f.png" rounded/>
                        <p><b>Product Name</b> <span>Price: $1000</span></p>
                      </Col>
                      <Col xs={6} md={4} class="for-you-pro">
                        <Image class="for-you-pro-img" src="http://www.spoon-tamago.com/wp-content/uploads/2012/12/2012-hit-products-smartphone.jpg" rounded/>
                        <p><b>Product Name</b> <span>Price: $1000</span></p>
                      </Col>
                       <Col xs={6} md={4} class="for-you-pro">
                        <Image class="for-you-pro-img" src="https://i.pinimg.com/736x/60/4e/04/604e044c5f0f44a9511c75ee3dad2b68--fresh-sugar-lip-treatment-lip-balms--treatments.jpg" rounded/>
                        <p><b>Product Name</b> <span>Price: $1000</span></p>
                      </Col>
                      <Col xs={6} md={4} class="for-you-pro">
                        <Image class="for-you-pro-img" src="https://www.home.sandvik/filtered/18434/rszww880h495-90/products-services-puff-1504305859-rszww880h495-90.jpg" rounded/>
                        <p><b>Product Name</b> <span>Price: $1000</span></p>
                      </Col>
                    </Row>
                  </Grid>
                    
        					<div class="clearfix"></div>
        					<hr/>
        				<Link id="link" to="/browse">	
        				<span>View More
                <span class="glyphicon glyphicon-chevron-right pull-right"></span>
                </span>
                </Link>
                </Panel>
                </Col>
                {/*//Display for you products on mobile only*/}
                
              
              
              {/*Display trending products on mobile only*/}
        			 <Col smHidden mdHidden lgHidden xlHidden>
        			 	{/* <!-- trending products for mobile -->	*/}	
                <Panel class="container">
                <span>TRENDING <b>PRODUCTS</b> 
                </span>
                <hr/> 
        			{/*	<!-- slider -->*/}
        				<div class="agile-trend-ads">
        							<ul id="felexiselSlider-mobile">
        								<li>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://stat.homeshop18.com/homeshop18/images/productImages/338/samsung-guru-e1200-mobile-phone-large_a68c67293ae8ecba99b8395694101cce.jpg" alt="" />
        											<span class="price">&#36; 450</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>There are many variations of passages</h5>
        											<span>1 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://www.lg.com/us/images/cell-phones/MD05796989/md05795769-350x350.jpg" alt="" />
        											<span class="price">&#36; 399</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>Lorem Ipsum is simply dummy</h5>
        											<span>3 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://image.priceprice.k-img.com/global/images/product/mobilephones/Cherry_Mobile_Flare_P1/Cherry_Mobile_Flare_P1_L_1.jpg" alt="" />
        											<span class="price">&#36; 199</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>It is a long established fact that a reader</h5>
        											<span>8 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://teja10.kuikr.com/o1/20161227/ak_1754001356-1482799919.jpg" alt="" />
        											<span class="price">&#36; 159</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>passage of Lorem Ipsum you need to be</h5>
        											<span>19 hour ago</span>
        										</div>
        									</div>
        								</li>
        								<li>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://www.slickwraps.com/media/catalog/category/s5_3.jpg" alt="" />
        											<span class="price">&#36; 1599</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>There are many variations of passages</h5>
        											<span>1 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="http://img.c.huaweistatic.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/y6-2017/y6-2017-listimage-black.png" alt="" />
        											<span class="price">&#36; 1099</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>passage of Lorem Ipsum you need to be</h5>
        											<span>1 day ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://5.imimg.com/data5/OH/VT/MY-37954860/1110-nokia-mobile-phone-500x500.jpg" alt="" />
        											<span class="price">&#36; 109</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>It is a long established fact that a reader</h5>
        											<span>9 hour ago</span>
        										</div>
        									</div>
        									<div class="col-md-3 biseller-column">
        										<a href="single.html">
        											<img id="felexiselSlider-img" src="https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/others/alcactel-go-flip/alcactel-go-flip-midnight-blue-open-1-2x.jpg" alt="" />
        											<span class="price">&#36; 189</span>
        										</a> 
        										<div class="slider-ad-info">
        											<h5>Lorem Ipsum is simply dummy</h5>
        											<span>3 hour ago</span>
        										</div>
        									</div>
        								</li>
        							
        						</ul>
        					</div>   
        			{/*<!-- //slider -->*/}		
        			
        		
        				<div class="clearfix"></div>
        					<hr/>
        				<Link id="link" to="/browse">	
        				<span>View More
                <span class="glyphicon glyphicon-chevron-right pull-right"></span>
                </span>
                </Link>
                
        			</Panel>
        			</Col>
        			{/*//Display trending products on mobile only*/}
                
                
{/************************************************************ //MOBILE SECTION *******************************************************/
/***********************************************************************************************************************************/}

        				
        				
        				
        				
        				
        				
        			
            </div>
        );
    }
} 

export default HomePage;