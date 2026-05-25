'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Ring } from '@react-three/drei';
import * as THREE from 'three';

function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY.current = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3 + mouseX.current * 0.5;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2 + mouseY.current * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <Sphere args={[1.2, 128, 128]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.45}
            speed={2.5}
            roughness={0.1}
            metalness={0.8}
            emissive="#4c1d95"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function EnergyRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1.current) { ring1.current.rotation.z = t * 0.5; ring1.current.rotation.x = Math.PI / 3; }
    if (ring2.current) { ring2.current.rotation.z = -t * 0.3; ring2.current.rotation.x = Math.PI / 5; }
    if (ring3.current) { ring3.current.rotation.z = t * 0.7; ring3.current.rotation.y = t * 0.2; }
  });

  return (
    <>
      <Ring ref={ring1} args={[1.8, 1.85, 128]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} side={THREE.DoubleSide} />
      </Ring>
      <Ring ref={ring2} args={[2.4, 2.44, 128]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} side={THREE.DoubleSide} />
      </Ring>
      <Ring ref={ring3} args={[3.0, 3.03, 128]}>
        <meshBasicMaterial color="#f472b6" transparent opacity={0.2} side={THREE.DoubleSide} />
      </Ring>
    </>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const geometry = new THREE.BufferGeometry();
  const count = 500;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame(({ clock }) => {
    if (points.current) points.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial color="#8b5cf6" size={0.03} transparent opacity={0.6} />
    </points>
  );
}

export default function OrbScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#8b5cf6" intensity={3} />
      <pointLight position={[-5, -5, -5]} color="#22d3ee" intensity={2} />
      <pointLight position={[0, 5, -5]} color="#f472b6" intensity={1.5} />
      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.5} fade speed={0.5} />
      <ParticleField />
      <CoreOrb />
      <EnergyRings />
    </Canvas>
  );
}
