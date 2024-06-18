// src/routes/Home.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';
import './home.scss';
import Earth from '../../../public/Earth';
import Ship from '../../../public/Ship';

function Home() {
    return (
        <div className='landing_conatiner'>
            <nav>
                <ul>
                    <li><Link className="nav-opt about" to="/about">ABOUT</Link></li>
                    <li><Link className="nav-opt connect" to="#">CONNECT</Link></li>
                </ul>
            </nav>

            <Canvas className="Earth_Can">
                <pointLight position={[5, 5, 4]} intensity={300} color="#FFFFFF" /> {/* Use white color */}
                <Suspense fallback={null}>
                    <Earth scale={[1.2, 1.2, 1.2]} /> {/* Increase the size of the Earth */}
                </Suspense>
            </Canvas>

            <Canvas className='ship-model'>
                <ambientLight intensity={0.8} color="#FFFFFF" />
                <pointLight position={[3.5, 2.5, 3.5]} intensity={100} color="#cf0404" />
                <group>
                    <OrbitControls enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Ship position={[0, 0.3, 0]} scale={[0.12, 0.12, 0.12]} />
                </group>
            </Canvas >

            < div className='Texual_container' >
                <div className='Texual_inner'>
                    < div className='Texual_content' >
                        <h2>Hey there!</h2>
                        <h1>I'm Abhishek</h1>
                        <p>Hi there! I'm a frontend developer with a passion for implementing new and creative ideas.
                            <br />    I also have a deep fascination with rockets, space, science, and much more! <br />
                            Hop on the rocket, and let's embark on a journey to learn more about me.</p>
                        <br />
                        <Link className="move_btn" to="/about">LEARN MORE</Link>
                    </div >
                </div>
            </div >
        </div>
    );
}

export default Home;
