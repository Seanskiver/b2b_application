import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, Button, Table, Carousel, Jumbotron} from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (
            <div className="page">
                <Jumbotron style={{ width: 'auto', hieght: 'auto'}}>
                  <h1>Hello, world!!!</h1>
                  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
              
              
            </div>
        )
    }
}

export default HomePage;