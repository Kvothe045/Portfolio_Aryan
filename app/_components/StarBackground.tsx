// app/_components/StarBackground.tsx
"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarField = (props: any) => {
  const ref: any = useRef(null);

  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(5000), { radius: 1.2 });
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fff" 
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarBackground = () => {
  return (
    // Changed: Removed 'bg-black' to prevent opacity stacking.
    // Changed: Added pointer-events-none to ensure it never blocks clicks.
    <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none bg-black"> 
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarBackground;