// src/routes/About.jsx
import React, { Suspense } from 'react';
import './about.scss'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Canvas } from '@react-three/fiber';
import Earth from '../../../public/Earth';
import Mars from '../../../public/Mars';

function About() {
    return (
        <div className='div_container'>
            <nav>
                <ul>
                    <li><Link className="nav-opt home" to="/">HOME</Link></li>
                    <li><Link className="nav-opt connect" to="#">CONNECT</Link></li>
                </ul>
            </nav>

            <div className="card-group-wrapper">
                <CardGroup>
                    <Link className="card_link" to="/">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>First list item</li>
                                        <li>Second list item</li>
                                        <li>Third list item</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Mars scale={[1.7, 1.7, 1.7]} position={[1, -1, 0]} />
                                </Suspense>
                            </Canvas>
                        </Card>
                    </Link>


                    <Link className="card_link" to="/">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>First list item</li>
                                        <li>Second list item</li>
                                        <li>Third list item</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Earth scale={[1.8, 1.8, 1.8]} position={[1, -1, 0]} /> {/* Increase the size of the Earth */}
                                </Suspense>
                            </Canvas>
                        </Card>
                    </Link>

                    <Link className="card_link" to="/">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>First list item</li>
                                        <li>Second list item</li>
                                        <li>Third list item</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Earth scale={[1.8, 1.8, 1.8]} position={[1, -1, 0]} /> {/* Increase the size of the Earth */}
                                </Suspense>
                            </Canvas>
                        </Card>
                    </Link>

                    <Link className="card_link" to="/">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>First list item</li>
                                        <li>Second list item</li>
                                        <li>Third list item</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Earth scale={[1.8, 1.8, 1.8]} position={[1, -1, 0]} /> {/* Increase the size of the Earth */}
                                </Suspense>
                            </Canvas>
                        </Card>
                    </Link>
                </CardGroup>
            </div>

        </div >
    );
}

export default About;
