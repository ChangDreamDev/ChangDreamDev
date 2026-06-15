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

const STAR_COUNT_DESKTOP = 5000;
const STAR_COUNT_MOBILE = 2500;
const ROTATION_Z = Math.PI / 4;

function getStarCount() {
  if (typeof window === "undefined") return STAR_COUNT_DESKTOP;
  return window.matchMedia("(max-width: 768px)").matches
    ? STAR_COUNT_MOBILE
    : STAR_COUNT_DESKTOP;
}

function createSpherePoints(count: number) {
  const positions = new Float32Array(count * 3);
  let filled = 0;

  while (filled < count) {
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1;
    const z = Math.random() * 2 - 1;
    const lengthSq = x * x + y * y + z * z;

    if (lengthSq > 1) continue;

    const length = Math.sqrt(lengthSq);
    positions[filled * 3] = x / length;
    positions[filled * 3 + 1] = y / length;
    positions[filled * 3 + 2] = z / length;
    filled++;
  }

  return positions;
}

function rotateX(x: number, y: number, z: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos] as const;
}

function rotateY(x: number, y: number, z: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos] as const;
}

function rotateZ(x: number, y: number, z: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos - y * sin, x * sin + y * cos, z] as const;
}

const StarsFallback = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const starCount = getStarCount();
    const points = createSpherePoints(starCount);
    let rotationX = 0;
    let rotationY = 0;
    let animationId = 0;
    let lastTime = performance.now();
    let width = 0;
    let height = 0;
    let scale = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      scale = Math.min(width, height) * 0.45;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      rotationX -= delta / 10;
      rotationY -= delta / 15;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < starCount; i++) {
        const px = points[i * 3];
        const py = points[i * 3 + 1];
        const pz = points[i * 3 + 2];

        let [x, y, z] = rotateX(px, py, pz, rotationX);
        [x, y, z] = rotateY(x, y, z, rotationY);
        [x, y, z] = rotateZ(x, y, z, ROTATION_Z);

        const depth = 1 - z;
        if (depth <= 0.05) continue;

        const invDepth = 1 / depth;
        const screenX = centerX + x * invDepth * scale;
        const screenY = centerY - y * invDepth * scale;

        if (screenX < -4 || screenX > width + 4 || screenY < -4 || screenY > height + 4) {
          continue;
        }

        const size = Math.max(0.6, invDepth * scale * 0.003);
        ctx.globalAlpha = Math.min(1, 0.35 + invDepth * 0.45);
        ctx.fillRect(screenX, screenY, size, size);
      }

      ctx.globalAlpha = 1;
    };

    const animate = (time: number) => {
      draw(time);
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="h-full w-full"
        style={{ pointerEvents: "none", touchAction: "auto" }}
      />
    </div>
  );
};

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
