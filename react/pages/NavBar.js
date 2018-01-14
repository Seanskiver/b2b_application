import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, InputGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col, DropdownButton, MenuItem,Navbar, NavItem, Nav } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
    
    constructor(props){
        super(props);

        this.state ={
          appName : 'WebSiteName',
          authenticated: true
        };
    }

    render() {
    
        return (
            <div className="nav">
            
              {/*Top nav bar*/}
               <nav class="nav" id="top-nav-bar">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle btn-lg" data-toggle="collapse" id="sidebarCollapse">
                       <i class="fa fa-bars" aria-hidden="true"></i>
                      </button>

                      <a class="navbar-brand" href="#">{this.state.appName}</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                      <ul class="nav navbar-nav">
                        <li class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-list" aria-hidden="true"></i> Browse <span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#categories">Categories</a></li>
                            <li><a href="#classifieds">Classifieds</a></li>
                          </ul>
                        </li>
                      <li class="dropdown"><Link to="/postad">Post Ad</Link></li>
                      </ul>
                      <ul class="nav navbar-nav navbar-right">
                      
                         {this.state.authenticated
                            ?
                         <li class="dropdown"><Link to="/profile"><span class="glyphicon glyphicon-user"></span></Link></li>
                         : null
                          }
                          
                          {this.state.authenticated
                            ? <li class="dropdown"><Link to="/signout"><i class="fa fa-power-off"></i></Link></li>
                            : <li class="dropdown"><Link to="/signin"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                          }
                      
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
                    <h3>WebSiteName</h3>
                </div>

                <ul class="list-unstyled components">
                    <p id="nav-header">Navigation</p>
                    <li class="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Browse <span class="caret"></span></a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#categories">Categories</a></li>
                            <li><a href="#classifieds">Classifieds</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#postad">Post Ad</a>
                    </li>
                </ul>

                <ul class="list-unstyled CTAs">
                     {this.props.authenticated
                        ?
                     <li><Link to="/signin"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                     : null
                        }
                     <li><Link to="/profile"><i class="fa fa-user"></i> Account</Link></li>
                     <li><Link to="/signin"><i class="fa fa-power-off"></i> Logout</Link></li>
                </ul>
            </nav>
            </div>
           
        );
    }
}

export default NavBar;