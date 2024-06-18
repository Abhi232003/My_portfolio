import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/ship.gltf');
  const groupRef = useRef(); // Create a reference for the group

  // State variables for bounce animation
  const [bounceY, setBounceY] = useState(0);
  const bounceAmplitude = 0.1; // Adjust the bounce amplitude
  const bounceFrequency = 3; // Adjust the bounce frequency

  // Rotate the group over time using useFrame
  useFrame((state, delta) => {
    // Bounce animation
    const time = state.clock.elapsedTime;
    const newY = Math.sin(time * bounceFrequency) * bounceAmplitude;
    setBounceY(newY);

    // Rotate animation
    if (groupRef.current) {
      groupRef.current.rotation.y += -0.002; // Adjust the rotation speed here
    }
  });

  return (
    <group position={[0, bounceY, 0]} ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.003, 0.024, -6.331]} rotation={[0.238, -0.545, 0.562]} scale={7}>
          <mesh geometry={nodes.planet001_1.geometry} material={materials.scene} />
          <mesh geometry={nodes.planet001_2.geometry} material={materials.scene} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/ship.gltf');
