import React from 'react';
import {Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../../../Image/Logo.png'
import './Menu.css'
const Menu = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">
                            <img width="30%" src={logo} alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                            <Nav className="mr-auto">
                                <Nav.Link className="menu-item" href="#home">News</Nav.Link>
                                <Nav.Link className="menu-item" href="#link">Destination</Nav.Link>
                                <Nav.Link className="menu-item" href="#link">Blog</Nav.Link>
                                <Nav.Link className="menu-item" href="#link">Contact</Nav.Link>
                                <Nav.Link className="menu-item" href="#link">Login</Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Menu;