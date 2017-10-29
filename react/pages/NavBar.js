import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, InputGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col, DropdownButton, MenuItem,Navbar, NavItem, Nav } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
    
        return (
            <div className="nav">
            
              {/*Top nav bar*/}
               <nav class="nav">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle btn-md" data-toggle="collapse" id="sidebarCollapse">
                        <span class="glyphicon glyphicon-align-justify"></span>  
                      </button>
                    
                      <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                      <ul class="nav navbar-nav">
                       <li class="active"><Link to="/">Home</Link></li>
                        <li class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                          </ul>
                        </li>
                        
                      <li class="dropdown"><Link to="/browse">Browse</Link></li>
                      <li class="dropdown"><Link to="/postad">Post Ad</Link></li>
                      </ul>
                      <ul class="nav navbar-nav navbar-right">
                         <li><Link to="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                         <li><Link to="/signin"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                
            
            
            {/*Side nav for mobile*/}
           <nav id="sidebar">
                <div id="dismiss">
                    <i class="glyphicon glyphicon-arrow-left"></i>
                </div>

                <div class="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>

                <ul class="list-unstyled components">
                    <p id="nav-header">Dummy Heading</p>
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Home 1</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">Home 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <ul class="list-unstyled CTAs">
                     <li><Link to="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                     <li><Link to="/signin"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </nav>
            
            
            </div>
           
        )
    }
}

export default NavBar;