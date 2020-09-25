import React from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { Container, Row, Col } from 'react-bootstrap';
import CardDescription from '../CardDescription/CardDescription';
import BookingForm from '../BookingForm/BookingForm';
import { useParams } from 'react-router-dom';
import travelData from '../../assets/travel-guru/fakeData/travelData';

const Booking = () => {
    const { slug } = useParams();    
    
    const locationData = travelData.find(loc => slug === loc.slug);
    
    return (
        <div className="bg-img">
            <Container>
                <HeaderMenu></HeaderMenu>
                <Row className="mt-5">
                    <Col>
                        <CardDescription locationData={locationData}></CardDescription>
                    </Col>
                    <Col>
                        <BookingForm name={locationData.name} slug={slug}></BookingForm>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;