import React, { useContext } from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Image/Logo.png'
import './Menu.css'
const Menu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                        <Link to="/">
                            <Navbar.Brand>
                                <img width="30%" src={logo} alt="logo" />
                            </Navbar.Brand>
                        </Link>
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
                                <Nav.Link className="menu-item" > {loggedInUser.email} </Nav.Link>
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