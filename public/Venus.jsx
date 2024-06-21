import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Venus/venus.gltf')
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Venus/venus.gltf')
