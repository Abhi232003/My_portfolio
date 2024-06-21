// src/routes/About.jsx
import React, { Suspense } from 'react';
import './about.scss'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Canvas } from '@react-three/fiber';
import Earth from '../../../public/Earth';
import Mars from '../../../public/Mars';
import Mercury from '../../../public/Mercury';
import Venus from '../../../public/Venus';
import Jupiter from '../../../public/Jupiter';

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
                                <Card.Title>Education</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>- Background</li>
                                        <li>- Institutions</li>
                                        <li>- Qualifications</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Mercury scale={[3.3, 3.3, 3.3]} position={[1, -1, 0]} /> {/* Increase the size of the Earth */}
                                </Suspense>
                            </Canvas>
                        </Card>
                    </Link>

                    <Link className="card_link" to="/">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>Technical Skills</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>- Tools</li>
                                        <li>- Knowledge</li>
                                        <li>- Proficiency</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Venus scale={[3.2, 3.2, 3.2]} position={[1, -1, 0]} /> {/* Increase the size of the Earth */}
                                </Suspense>
                            </Canvas>
                        </Card>
                    </Link>

                    <Link className="card_link" to="/">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>Projects</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>- Portfolio</li>
                                        <li>- Overview</li>
                                        <li>- Highlights</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Mars scale={[1.65, 1.65, 1.65]} position={[1, -1, 0]} />
                                </Suspense>
                            </Canvas>
                        </Card>
                    </Link>

                    <Link className="card_link" to="/">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>Experience</Card.Title>
                                <Card.Text>
                                    <ul className="custom-list">
                                        <li>- Roles</li>
                                        <li>- History</li>
                                        <li>- Timeline</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Canvas className="planet_on_card">
                                <pointLight position={[-5, 3, 2]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                                <Suspense fallback={null}>
                                    <Jupiter scale={[1.65, 1.65, 1.65]} position={[1, -1, 0]} />
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
