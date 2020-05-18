import React from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,Row,Col
} from 'react-bootstrap';

const Home =(props)=>{
    return(
        <Container className="form-cust">
            <Row>
                <Col>
                    <p>Home</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;