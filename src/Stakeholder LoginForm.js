import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Form,FormControl, Button,Row,Col,Card} from 'react-bootstrap';

const LoginFormS =(props)=>{

    return(
        <Row className="justify-content-md-center">
            <Col sm={6}>
                <Card className="h-100 form-cust" bg="light">
                    <Card.Body>
                    <Form>
                        <Form.Group>
                        <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember me" htmlFor="customCheck1"/>
                        </Form.Group>
                        <Row className="justify-content-center ">
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default LoginFormS;