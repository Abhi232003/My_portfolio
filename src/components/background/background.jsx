import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import imageSrc from '../../assets/star.png'; // Adjust the path as needed

function MovingStars() {
    const mesh = useRef();
    const texture = useLoader(THREE.TextureLoader, imageSrc);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 3400;

    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15; // Adjust the range as needed
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Mouse
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Clock
    const clock = new THREE.Clock();

    useFrame(() => {
        const elapsedTime = clock.getElapsedTime();

        // Adding default rotation
        mesh.current.rotation.y = elapsedTime * 0.01;
        mesh.current.rotation.x = elapsedTime * 0.01;

        // Adding mouse interaction
        mesh.current.rotation.y += mouseX * 0.2;
        mesh.current.rotation.x += mouseY * 0.2;
    });

    return (
        < points ref={mesh} position={[0, 0, 0]} geometry={particlesGeometry} >
            <pointsMaterial map={texture} transparent={true} size={0.15} />
        </points >
    );
}

export default MovingStars;