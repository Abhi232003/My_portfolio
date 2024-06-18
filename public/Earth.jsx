import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function EarthModel(props) {
  const { nodes, materials } = useGLTF('/earth.gltf');
  const earthRef = useRef();

  // Use useFrame to animate
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0008; // Adjust rotation speed as needed
    }
  });

  return (
    <group {...props} dispose={null} ref={earthRef}>
      <group rotation={[-0.005, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.atmosphere} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.clouds} />
      </group>
    </group>
  );
}

useGLTF.preload('/earth.gltf');
