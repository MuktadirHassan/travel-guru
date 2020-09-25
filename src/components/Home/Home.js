import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Home.css'
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import TravelCard from '../TravelCard/TravelCard';
import CardDescription from '../CardDescription/CardDescription';
import travelData from '../../assets/travel-guru/fakeData/travelData';

const Home = () => {
    return (
        <div className="bg-img">
            <Container>
                <HeaderMenu></HeaderMenu>
                <CardDescription></CardDescription>
                <Row>
                    {
                        travelData.map(loc => <TravelCard loc={loc}></TravelCard>)
                    }
                </Row>
                
            </Container>
        </div>
    );
};

export default Home;