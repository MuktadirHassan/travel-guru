import React, { useState, useEffect } from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import travelData from '../../assets/travel-guru/fakeData/travelData';
import Hotel from '../Hotel/Hotel';
import googleMap from '../googleMap/googleMap';


const Search = () => {
    const location = useLocation();

    const [hotel, setHotel] = useState([]);

    const slug = location.pathname.slice(8);
    const hotelData = travelData.find(loc => loc.slug === slug)
    useEffect(()=>{
        setHotel(hotelData.hotels);
    },[])
   
    return (
        <>
            <Container>
                <HeaderMenu></HeaderMenu>
                <h2>{hotelData?.name}</h2>
                <Row>
                    <Col md={7}>
                        {
                            hotel.map(hotel => <Hotel hotel={hotel}></Hotel>)
                        }
                    </Col>
                    <Col md={5}>
                        <googleMap location={hotelData.name}></googleMap>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Search;