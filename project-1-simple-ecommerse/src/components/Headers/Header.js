import React from 'react'
import {Container, Row, Col, Nav} from 'react-bootstrap'
import logo from '../../images/logo.png'
import './Header.scss'
const Header = () => {
    return (
        <Container id="header">
            <Row>
                <Col xs md={12}>
                    <img className="header-img" src={logo} alt=""/>
                </Col>
            </Row>
            <Row>
                <Col md= {12}>
                    <Nav className="menus">
                        <a href=""> Shop </a>
                        <a href=""> Order Reivew </a>
                        <a href=""> Manage Inventory </a>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}
export default Header