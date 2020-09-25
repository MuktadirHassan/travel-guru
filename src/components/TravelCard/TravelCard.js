import React from 'react';
import { Col } from 'react-bootstrap';
import './TravelCard.css';
import { useHistory } from 'react-router-dom';

const TravelCard = (props) => {
    const {name, slug, img } = props.loc;
    
    const history = useHistory()
    const handleBooking = () => {
        history.push(`/booking/${slug}`);
    }
    
    return (
        <Col>
            <div className="travel-card">
                <img src={img} alt={name} width="270"/>
                <span>
                    <h2 className="text-uppercase text-white">{name}</h2>
                    <button className="btn btn-secondary" onClick={handleBooking}>Visit</button>
                </span>
            </div>
        </Col>
    );
};

export default TravelCard;