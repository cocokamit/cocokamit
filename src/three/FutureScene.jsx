import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import SceneCanvas from './SceneCanvas';

// A planet ("today") with the skills I'm learning orbiting it on tilted rings.
function Planet() {
  const core = useRef();
  const shell = useRef();
  useFrame((_, dt) => {
    core.current.rotation.y += dt * 0.15;
    shell.current.rotation.y -= dt * 0.08;
    shell.current.rotation.x += dt * 0.03;
  });
  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.25, 6]} />
        <meshStandardMaterial color="#06281f" emissive="#00df9a" emissiveIntensity={0.25} roughness={0.6} flatShading />
      </mesh>
      <mesh ref={shell} scale={1.42}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#00df9a" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh scale={1.9}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00df9a" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function Orbit({ radius, tilt, speed, items, color }) {
  const g = useRef();
  const [paused, setPaused] = useState(false);
  useFrame((_, dt) => { if (!paused) g.current.rotation.y += dt * speed; });
  return (
    <group rotation={tilt}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 8, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.45} />
      </mesh>
      <group ref={g}>
        {items.map((label, i) => {
          const a = (i / items.length) * Math.PI * 2;
          return (
            <group key={label} position={[Math.cos(a) * radius, 0, Math.sin(a) * radius]}>
              <mesh>
                <sphereGeometry args={[0.09, 24, 24]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} />
              </mesh>
              <Html center zIndexRange={[1, 0]}>
                <span className="orbit-tag" style={{ '--c': color }} onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
                  {label}
                </span>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
}

function Rig({ children }) {
  const g = useRef();
  const wide = useThree((s) => s.viewport.aspect > 1.2);
  useFrame((s, dt) => {
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, s.pointer.x * 0.35, 2.5, dt);
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, -s.pointer.y * 0.2, 2.5, dt);
  });
  return <group position={wide ? [2.6, 0.5, 0] : [0, 1.2, 0]} scale={wide ? 1 : 0.8}><group ref={g}>{children}</group></group>;
}

export default function FutureScene({ inner, outer }) {
  return (
    <SceneCanvas className="future-scene" camera={{ position: [0, 1.2, 8], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 4, 5]} intensity={60} color="#ffffff" />
      <pointLight position={[-5, -2, -3]} intensity={30} color="#f472b6" />
      <Stars radius={60} depth={40} count={2500} factor={3} fade speed={0.6} />
      <Rig>
        <Float speed={1} floatIntensity={0.6} rotationIntensity={0.2}>
          <Planet />
        </Float>
        <Orbit radius={2.4} tilt={[0.35, 0, 0.15]} speed={0.25} items={inner} color="#00df9a" />
        <Orbit radius={3.5} tilt={[-0.25, 0, -0.2]} speed={-0.15} items={outer} color="#f472b6" />
      </Rig>
    </SceneCanvas>
  );
}
