import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Hotel = (props) => {
    const {himg, title, rating,price } = props.hotel;
    return (
        <div className="py-2 mt-2">
            <Row>
                <Col><img src={himg} alt={title} className="w-75"/></Col>
                <Col>
                <h4>{title}</h4>
                <p className="muted">
                    {rating} - {price}
                </p>
                </Col>
            </Row>
        </div>
    );
};

export default Hotel;