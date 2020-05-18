import React from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import Confirmation from './Confirmation';

const Header =(props)=>{
    return(
        <Navbar bg="dark" variant="dark" fg="light" expand="lg" fixed="top" className="mb-5">
        <Navbar.Brand href="/home">Mock</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/user">User</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/coverage-map">Coverage Map</NavDropdown.Item>
                <NavDropdown.Item href="/vis-chart">Vis-Chart</NavDropdown.Item>
                <NavDropdown.Item href="/recharts">Recharts</NavDropdown.Item>
                <NavDropdown.Item href="/recharts-2">Recharts 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">User Sign-in</NavDropdown.Item>
                <NavDropdown.Item href="/login-stakeholder">Stakeholder Sign-in</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form> */}
            </Navbar.Collapse>
            <div className="confirm">
                {props.isOrdered && <Confirmation onClose={props.onClose}/>}
            </div>
        </Navbar>
    )
};

export default Header;