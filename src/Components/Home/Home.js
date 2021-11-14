import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Accommodation from '../Accommodation/Accommodation';
import Places from '../Places/Places';
import SpecialServices from '../SpecialServices/SpecialServices';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div>
                <Container fluid>
                    <Carousel variant="dark">
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src="https://i.ibb.co/pLp7ZtJ/Sundarbans-1.jpg" alt="First slide" />
                            <Carousel.Caption>
                                <Row>
                                    <Col>
                                        <div className='mb-5'>
                                            <h1> </h1>
                                        </div>
                                    </Col>
                                    <Col className='py-5 my-5'>
                                        <div className='mb-5 pb-5 text-center text-white dark p-3' >
                                            <h2>Sundarbans</h2>
                                            <h1 className='text-primary'>You can see natural scenery here.</h1>
                                            <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img className="d-block w-100" src="https://i.ibb.co/7GY6pVY/katka.jpg" alt="Second slide" />
                            <Carousel.Caption>
                                <Row>
                                    <Col className='py-5 my-5'>
                                        <div className='mb-5 pb-5 text-start text-white dark p-3' >
                                            <h2>Kuakata Sea Beach</h2>
                                            <h1 className="text-primary">Kuakata sea beach Known as Sagar Kannya or the Daughter of the sea.</h1>
                                            <p>Kuakata Sea Beach is a panoramic sea beach with 30 kilometers of picturesque landscape located at Lotachapli, Kolapara, Patuakhali. It’s a unique beach where you can be witnessed of both sunrise & sunset, not only that you can enjoy the beauty of Jhauban which is covered by coconut trees.</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-5'>
                                            <h1> </h1>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://i.ibb.co/zVDrLKk/sitakundo.jpg" alt="Third slide" />
                            <Carousel.Caption className='' style={{ display: 'flex' }}>
                                <Row>
                                    <Col className='py-5 my-5'>
                                        <div className='mb-5 p-5 text-center text-white dark' >
                                            <h2>THE RIGHT PEDIATRICIAN</h2>
                                            <h1 className="text-primary">Your wealth,is your health</h1>
                                            <p>We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
            <Places></Places>
            <Accommodation></Accommodation>
            <SpecialServices></SpecialServices>
        </div>
    );
};

export default Home;