'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PointMaterial, Points } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function Starfield({ isLight }: { isLight: boolean }) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for 3500 stars inside a sphere
  const sphere = useMemo(() => {
    const positions = new Float32Array(3500 * 3);
    const colors = new Float32Array(3500 * 3);
    random.inSphere(positions, { radius: 2 });
    
    for (let i = 0; i < 3500; i++) {
      const color = new THREE.Color();
      const rand = Math.random();

      if (isLight) {
        // Soft pastel blue, indigo, rose, and slate in light mode
        if (rand < 0.35) {
          color.setHSL(0.55, 0.7, 0.45); // Soft cyan/blue
        } else if (rand < 0.65) {
          color.setHSL(0.72, 0.6, 0.5);  // Soft violet
        } else if (rand < 0.85) {
          color.setHSL(0.95, 0.6, 0.55); // Soft rose
        } else {
          color.setHSL(0.6, 0.1, 0.6);   // Slate
        }
      } else {
        // Glowing space colors in dark mode
        if (rand < 0.35) {
          color.setHSL(0.55 + Math.random() * 0.1, 0.9, 0.6); // Cyan/Blue stars
        } else if (rand < 0.6) {
          color.setHSL(0.3 + Math.random() * 0.1, 0.8, 0.6);  // Green stars
        } else if (rand < 0.8) {
          color.setHSL(0.95 + Math.random() * 0.05, 0.9, 0.6); // Rose stars
        } else {
          color.setHSL(Math.random() * 0.1, 0.1, 0.95);        // White/Silver stars
        }
      }
      color.toArray(colors, i * 3);
    }
    
    return { positions, colors };
  }, [isLight]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere.positions} colors={sphere.colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={isLight ? 0.007 : 0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isLight ? 0.4 : 0.85}
        />
      </Points>
    </group>
  );
}

function FloatingShapes({ isLight }: { isLight: boolean }) {
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

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[1.5, 0.5, -2]}>
          <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
          <meshPhysicalMaterial 
            color={isLight ? "#06b6d4" : "#22d3ee"} // Cyan
            roughness={isLight ? 0.3 : 0.2}
            transmission={isLight ? 0.6 : 0.8}
            thickness={1}
            ior={1.5}
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2, -0.5, -3]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshPhysicalMaterial 
            color={isLight ? "#f43f5e" : "#fb7185"} // Light Red/Rose
            roughness={isLight ? 0.3 : 0.2}
            transmission={isLight ? 0.6 : 0.8}
            thickness={1}
            ior={1.5}
          />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[0, -2, -4]}>
          <sphereGeometry args={[0.6, 64, 64]} />
          <meshPhysicalMaterial 
            color={isLight ? "#10b981" : "#34d399"} // Emerald Green
            roughness={isLight ? 0.25 : 0.1}
            transmission={isLight ? 0.7 : 0.9}
            thickness={2}
            ior={1.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className={`fixed inset-0 z-[-1] pointer-events-none transition-colors duration-500 ${
        isLight ? 'bg-[#f8fafc]' : 'bg-[#050505]'
      }`}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={isLight ? 1.0 : 0.5} />
        <directionalLight position={[10, 10, 10]} intensity={isLight ? 1.5 : 1.0} />
        
        <Starfield isLight={isLight} />
        <FloatingShapes isLight={isLight} />
        
        {/* Fog to fade out particles in the distance */}
        <fog attach="fog" args={[isLight ? '#f8fafc' : '#050505', 1, 3]} />
      </Canvas>
      
      {/* Vignette overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLight
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_20%,#e2e8f0_100%)] opacity-35'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_100%)] opacity-80'
        }`}
      />
    </div>
  );
}
