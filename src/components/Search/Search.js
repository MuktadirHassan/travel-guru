import React, { useState, useEffect } from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import travelData from '../../assets/travel-guru/fakeData/travelData';
import Hotel from '../Hotel/Hotel';


const Search = () => {
    const location = useLocation();

    const [hotel, setHotel] = useState([]);

    const slug = location.pathname.slice(8);
    const hotelData = travelData.find(loc => loc.slug === slug)
    useEffect(()=>{
        setHotel(hotelData.hotels);
    },[])
   console.log(hotel);
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

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Search;