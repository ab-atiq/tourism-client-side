import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle, handleRegistration, handlePasswordChange, handleEmailChange, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                // setUser(result.user);
                history.push(redirect_uri);
            })
        // .finally(() => setIsLoading(false));
    }


    return (
        <div>
            <h1 className='text-primary'>Please Registration</h1>
            <div className="logIn-container mb-5">
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>

                    <div className='text-danger'>
                        {error}
                    </div>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>{' '}
                    <Button variant="primary" type="reset">
                        Reset
                    </Button>
                </Form>
                <br />
                <br />
                <Button onClick={handleGoogleLogin}>
                    Sign In Google
                </Button>{' '}
                <Link className='text-white' style={{ textDecoration: 'none' }} to='/logIn'><Button>Log In</Button></Link>
            </div>
        </div>
    );
};

export default Registration;