import React, { useContext} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { PlaceContext } from '../../../App';
import { placeData } from '../../../data/placeData';
import sreemongol from '../../../Image/Sreemongol.png'
import './Banner.css'
const Banner = () => {
    const places = placeData
    const [singlePlace, setsinglePlace] = useContext(PlaceContext)

    const handlePlace = (place) => {
        setsinglePlace(place)
    }
    return (
        <Container>
            <Row style={{ marginTop: '5rem' }}>
                <>
                    <Col md={4} style={{ color: '#fff' }}>
                        <h1> {singlePlace.name} </h1>
                        <p> {singlePlace.short_des} </p>
                        {
                            singlePlace.name && 
                            <Link to="/booking">
                                <Button>Booking</Button>
                            </Link>
                        }
                    </Col>
                    <Col md={8} >
                        <Row className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
                            {
                                places.map(place => (
                                    <Col>
                                        <Link onClick={() => handlePlace(place)}>
                                            {/* <Link to="/booking"> */}
                                            <div>
                                                <div className="sreemangal-h1">
                                                    <h1> {place.name} </h1>
                                                </div>
                                                <div className="sreemangal">
                                                    <img src={sreemongol} alt="sreemongol" />
                                                </div>
                                            </div>
                                            {/* </Link> */}
                                        </Link>
                                    </Col>
                                ))
                            }


                        </Row>
                    </Col>
                </>
            </Row>
        </Container>
    );
};

export default Banner;