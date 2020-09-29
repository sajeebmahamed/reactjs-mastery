import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PlaceContext } from '../../../App';
import { hotelData } from '../../../data/hotelData';
import imgage from '../../../Image/Rectangle 26.png'
import Map from '../Map/Map';

const Hotels = () => {
    const hotels = hotelData
    const [singlePlace] = useContext(PlaceContext)
    return (
        <Container>
            <Row>
                <Col md={6}>
                    {
                        hotels.map(hotel => (
                            <Card style={{ width: 'auto', margin: '1rem 0'}}>
                                <div className="d-flex">
                                    <Card.Img style={{ width: '50%' }} variant="top" src={imgage} />
                                    <Card.Body>
                                        <Card.Title> {hotel.title} </Card.Title>
                                        <Card.Text>
                                            <small> {hotel.guests} guests {hotel.bedrooms} bedrooms {hotel.beds} beds {hotel.baths} baths </small>
                                        </Card.Text>
                                        <Card.Text>
                                            {hotel.condition}
                                        </Card.Text>
                                        <Card.Text>
                                            {hotel.terms}
                                        </Card.Text>

                                        <Card.Text>
                                            {hotel.review}  {hotel.price}
                                        </Card.Text>

                                    </Card.Body>
                                </div>
                            </Card>
                        ))
                    }
                </Col>
                <Col md={6}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Hotels;