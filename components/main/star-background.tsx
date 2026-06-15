"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import {
  Component,
  type ReactNode,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Points as PointsType } from "three";

function isWebGLAvailable() {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

const StarsFallback = () => (
  <div
    className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-50"
    aria-hidden
    style={{
      backgroundColor: "#030014",
      backgroundImage: [
        "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.9), transparent)",
        "radial-gradient(1px 1px at 25% 55%, rgba(255,255,255,0.7), transparent)",
        "radial-gradient(1px 1px at 45% 15%, rgba(255,255,255,0.8), transparent)",
        "radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.6), transparent)",
        "radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,0.9), transparent)",
        "radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.7), transparent)",
      ].join(", "),
      backgroundSize: "250px 250px",
    }}
  />
);

class WebGLErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState<Float32Array>(
    () => random.inSphere(new Float32Array(5000 * 3), { radius: 1 }) as Float32Array
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvasScene = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ failIfMajorPerformanceCaveat: false }}
      style={{ pointerEvents: "none", touchAction: "auto" }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export const StarsCanvas = () => {
  const [canUseWebGL, setCanUseWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    setCanUseWebGL(isWebGLAvailable());
  }, []);

  if (canUseWebGL === null || !canUseWebGL) {
    return <StarsFallback />;
  }

  return (
    <WebGLErrorBoundary fallback={<StarsFallback />}>
      <StarsCanvasScene />
    </WebGLErrorBoundary>
  );
};
