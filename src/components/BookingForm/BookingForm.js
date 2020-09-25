import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BookingForm = (props) => {
    const history = useHistory()
    const handleSubmit = () => {
        history.push(`/search/${props.slug}`)
    }
    return (
        <>
            <form className="bg-white p-4 rounded" onSubmit={handleSubmit}>
                <Form.Label>Origin</Form.Label>
                <Form.Control as="select">
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Chittagong</option>
                </Form.Control>
                <Form.Label>Destination</Form.Label>
                <Form.Control as="text" readOnly>
                    <option>{props.name}</option>
                </Form.Control>
                <Row>
                    <Col>
                        <label for="from" className="mt-3">From</label>
                        <input type="date" id="from" name="from" className="form-control" required></input>
                    </Col>
                    <Col>
                        <label for="to" className="mt-3">To</label>
                        <input type="date" id="to" name="to" className="form-control" required></input>
                    </Col>
                </Row>
                <input type="submit" value="Start Booking" className="form-control mt-4 btn-primary"></input>
                
            </form>
        </>
    );
};

export default BookingForm;