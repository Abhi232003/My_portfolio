import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Mercury/mercury.gltf')

  useFrame(() => {
    group.current.rotation.y += 0.0008
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.moon} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Mercury/mercury.gltf')
