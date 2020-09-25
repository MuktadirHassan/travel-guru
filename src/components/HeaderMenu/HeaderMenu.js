import React, { useContext } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { Link,  useLocation } from 'react-router-dom';
import './HeaderMenu.css';
import { UserContext } from '../../App';

const HeaderMenu = () => {
    const location = useLocation();
    const [user] = useContext(UserContext);
    return (
        <header>
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">Logo Here</Link>
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto d-flex align-items-center nav--bar">
                    <Link to="/news">News</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    {
                        user.length > 0 ? <> {user} </> : <Link to="/login">
                                                                    <Button>Login</Button>
                                                                </Link>
                    }
                    
                </Nav>
            </Navbar>             
        </header>
    );
};

export default HeaderMenu;