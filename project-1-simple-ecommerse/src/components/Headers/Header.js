import React, { useContext } from 'react'
import {Container, Row, Col, Nav} from 'react-bootstrap'
import logo from '../../images/logo.png'
import './Header.scss'
import { Link } from 'react-router-dom'
import { LogInContext } from '../../App'
const Header = () => {
    const [logedInUser] = useContext(LogInContext)
    console.log(logedInUser);
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
                        <a>
                            <Link to="/">
                                Shop
                            </Link>
                        </a>
                        <a >  
                            <Link to="/review">
                                Order Reivew
                            </Link>
                        </a>
                        <a> 
                            <Link to="/inventory">
                                Manage Inventory
                            </Link>
                        </a>
                        <a href="">
                            {logedInUser.email }
                        </a>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}
export default Header