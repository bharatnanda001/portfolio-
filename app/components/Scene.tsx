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
    random.inSphere(positions, { radius: 1.5 });
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
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
      // Gentle rotation tied to time
      groupRef.current.rotation.y += delta * 0.05;
      
      // We can also tie the camera to scroll here if we want a parallax effect,
      // but for now, we let the shapes float.
      const scrollY = window.scrollY;
      groupRef.current.position.y = scrollY * 0.001; // subtle parallax
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[1, 0.5, -2]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#8b5cf6" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-1.5, -0.5, -3]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#22d3ee" wireframe opacity={0.3} transparent />
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_100%)] opacity-80" />
    </div>
  );
}
