import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href=""><img style={{ width: '50px' }} src="https://i.ibb.co/2ckGb0z/logo-tv.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/places">Places</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/accommodation">Accommodation</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/aboutUs">About</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/manageplaces">Manage Places</Nav.Link> */}

                        {user.email ?
                            <>
                                <Nav.Link as={Link} to="/bookPlace">Place order</Nav.Link>
                                <Nav.Link as={Link} to="/addplace">Add Place</Nav.Link>
                                <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                                <Nav.Link as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
                                <Button onClick={logOut}> Logout</Button>
                            </>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            {user?.displayName && <div className='pl-3'> Signed in as: {user?.displayName}</div>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;