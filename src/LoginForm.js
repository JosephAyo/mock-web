import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Form,FormControl, Button,Row,Col,Card} from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'
import ReactCountryFlag from "react-country-flag"

const NGflag=(props)=>{
    
    return(
        <ReactCountryFlag
            countryCode="NG"
            svg
            style={{
                width: '2em',
                height: '2em',
                position:'relative',
                top:"-0.5em",
                left:"-0.3em"
            }}
            title="NG"
        />
    );
}

const LoginForm =(props)=>{
    
    const [value, setValue] = useState();
    return(
        <Row className="justify-content-md-center">
            <Col sm={6}>
                <Card className="h-100 form-cust" bg="light">
                    <Card.Body> 
                        <Form>
                            <Form.Group>
                            <Form.Label column sm={6}>Phone Number</Form.Label>
                                <Col sm={11}>
                                    <PhoneInput
                                    countries={["NG"]}
                                    addInternationalOption={false}
                                    flagComponent={NGflag}
                                    placeholder="Enter phone number"
                                    value={value}
                                    onChange={setValue}/>
                                </Col>
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

export default LoginForm;