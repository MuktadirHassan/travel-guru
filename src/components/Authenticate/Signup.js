import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
        <Container>
            <HeaderMenu></HeaderMenu>
            <Row className="justify-content-center align-items-center mt-5">
            <Col xs={12} md={6}>
                <div className="border rounded p-4 pb-5 form">
                    <h2>Signup</h2>
                    <form action="">
                        <input type="text" name="firstName" id="firstName"required className="form-control mt-4" placeholder="First Name"/>
                        <input type="text" name="lastName" id="lastName"required className="form-control mt-4" placeholder="Last Name"/>
                        <input type="email" name="email" id="email"required className="form-control mt-4" placeholder="Email"/>
                        <input type="password" name="password" id="password" required className="form-control mt-4" placeholder="Password"/>
                        <input type="password" required className="form-control mt-4" placeholder="Confirm Password"/>
                        <input type="submit" value="Create Account" className="form-control mt-4 btn-primary"/>
                        <p className="mt-4"><Link to="/login">Already have an account? Login</Link></p>
                    </form>
                </div>
            </Col>
            </Row>
        </Container>
        </>
    );
};

export default Signup;