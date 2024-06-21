import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Jupiter/jupiter.gltf')
  const { actions } = useAnimations(animations, group)

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0008
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.111}>
          <group name="Root">
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <group name="JUPITER" />
              <skinnedMesh name="JUPITER_0" geometry={nodes.JUPITER_0.geometry} material={materials.JUPITER} skeleton={nodes.JUPITER_0.skeleton} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Jupiter/jupiter.gltf')
