import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
// import "../public/";
export default function Watch(props) {
  const ref = useRef();

  const { nodes, materials } = useGLTF("/watch-v1.glb");

  console.log(nodes);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  return (
    <>
      <group ref={ref} {...props} dispose={null}>
        <Html
          scale={100}
          rotation={[Math.PI / 2, 0, 0]}
          position={[180, -350, -180]}
          transform
        >
          <div className="annotation">600$ </div>
        </Html>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object006_watch_0.geometry}
          material={materials.watch}
        />
      </group>
    </>
  );
}
