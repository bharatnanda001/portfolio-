'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PointMaterial, Points } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function Starfield() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for 5000 stars inside a sphere
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    random.inSphere(positions, { radius: 2 });
    
    // Assign random cyan, blue, light red, and green colors to stars
    for (let i = 0; i < 5000; i++) {
      const color = new THREE.Color();
      const rand = Math.random();
      if (rand < 0.35) {
        color.setHSL(0.55 + Math.random() * 0.1, 0.9, 0.6); // Cyan/Blue stars
      } else if (rand < 0.6) {
        color.setHSL(0.3 + Math.random() * 0.1, 0.8, 0.6); // Green stars
      } else if (rand < 0.8) {
        color.setHSL(0.95 + Math.random() * 0.05, 0.9, 0.6); // Light Red stars
      } else {
        color.setHSL(Math.random() * 0.1, 0.1, 0.95); // White/Silver stars
      }
      color.toArray(colors, i * 3);
    }
    
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere.positions} colors={sphere.colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      
      // subtle parallax based on mouse
      const targetX = (state.pointer.x * 0.2);
      const targetY = (state.pointer.y * 0.2);
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  const glassMaterial = (
    <meshPhysicalMaterial 
      roughness={0.1}
      transmission={0.9}
      thickness={0.5}
      clearcoat={1}
      clearcoatRoughness={0.1}
      ior={1.5}
    />
  );

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[1.5, 0.5, -2]}>
          <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
          <meshPhysicalMaterial 
            color="#22d3ee" // Cyan
            roughness={0.2}
            transmission={0.8}
            thickness={1}
            ior={1.5}
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2, -0.5, -3]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshPhysicalMaterial 
            color="#fb7185" // Light Red/Rose
            roughness={0.2}
            transmission={0.8}
            thickness={1}
            ior={1.5}
          />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[0, -2, -4]}>
          <sphereGeometry args={[0.6, 64, 64]} />
          <meshPhysicalMaterial 
            color="#34d399" // Emerald Green
            roughness={0.1}
            transmission={0.9}
            thickness={2}
            ior={1.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        <Starfield />
        <FloatingShapes />
        
        {/* Fog to fade out particles in the distance */}
        <fog attach="fog" args={['#000000', 1, 3]} />
      </Canvas>
      
      {/* Vignette overlay for premium cinematic feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_100%)] opacity-80" />
    </div>
  );
}
