"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import {
  CuboidCollider,
  CylinderCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { useMemo, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";
import * as T from "./textures";

export type DeskTarget =
  | "about"
  | "research"
  | "work"
  | "music"
  | "art"
  | "travel"
  | "writing";

type ObjectDef = {
  key: string;
  target?: DeskTarget;
  label: string;
  color: string;
  /** normalized resting spot on the desk, -1..1 (landscape) */
  spot: [number, number];
  /** spot for portrait / phone screens */
  spotTall: [number, number];
  restY: number;
  yaw: number;
  /** how wildly it tumbles on the way down (0 = lands flat) */
  tumble: number;
  /** drop order — higher lands later */
  drop: number;
  render: () => ReactNode;
  colliders: () => ReactNode;
};

// ── small helpers ─────────────────────────────────────────────────────────
function useTex(draw: Parameters<typeof T.canvasTexture>[2], w: number, h: number) {
  return useMemo(() => T.canvasTexture(w, h, draw), [draw, w, h]);
}

function Slab({
  size,
  draw,
  side,
  px = 160,
  radius = 0.03,
}: {
  size: [number, number, number];
  draw: Parameters<typeof T.canvasTexture>[2];
  side: string;
  px?: number;
  radius?: number;
}) {
  const [w, h, d] = size;
  const tex = useTex(draw, Math.round(w * px), Math.round(d * px));
  return (
    <group>
      <RoundedBox args={size} radius={Math.min(radius, h / 2.01)} smoothness={3} castShadow receiveShadow>
        <meshStandardMaterial color={side} roughness={0.7} />
      </RoundedBox>
      <mesh position={[0, h / 2 + 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[w - 0.02, d - 0.02]} />
        <meshStandardMaterial map={tex} roughness={0.6} />
      </mesh>
      {/* same face on the back, so it still looks right if it lands upside down */}
      <mesh position={[0, -h / 2 - 0.002, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[w - 0.02, d - 0.02]} />
        <meshStandardMaterial map={tex} roughness={0.6} />
      </mesh>
    </group>
  );
}

function Disc({
  r,
  h,
  draw,
  side,
}: {
  r: number;
  h: number;
  draw: Parameters<typeof T.canvasTexture>[2];
  side: string;
}) {
  const tex = useTex(draw, 512, 512);
  return (
    <mesh castShadow receiveShadow>
      <cylinderGeometry args={[r, r, h, 64]} />
      <meshStandardMaterial attach="material-0" color={side} roughness={0.4} />
      <meshStandardMaterial attach="material-1" map={tex} roughness={0.35} />
      <meshStandardMaterial attach="material-2" map={tex} roughness={0.35} />
    </mesh>
  );
}

// ── the ultrasound probe ─────────────────────────────────────────────────
function UltrasoundProbe() {
  const cable = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.45, 0, 0),
      new THREE.Vector3(-2.1, -0.05, 0.15),
      new THREE.Vector3(-2.7, -0.12, 0.7),
      new THREE.Vector3(-2.9, -0.18, 1.5),
      new THREE.Vector3(-2.5, -0.22, 2.2),
    ]);
    return new THREE.TubeGeometry(curve, 48, 0.06, 10, false);
  }, []);
  const plastic = "#F3F0EA";
  return (
    <group>
      {/* handle */}
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <capsuleGeometry args={[0.3, 1.9, 8, 24]} />
        <meshStandardMaterial color={plastic} roughness={0.35} />
      </mesh>
      {/* grip band */}
      <mesh position={[-0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.315, 0.315, 0.6, 32]} />
        <meshStandardMaterial color="#3B7FD9" roughness={0.5} />
      </mesh>
      {/* transducer head */}
      <RoundedBox args={[0.6, 0.62, 1.15]} radius={0.12} smoothness={4} position={[1.3, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={plastic} roughness={0.35} />
      </RoundedBox>
      {/* acoustic lens */}
      <RoundedBox args={[0.1, 0.5, 1.02]} radius={0.04} smoothness={3} position={[1.62, 0, 0]} castShadow>
        <meshStandardMaterial color="#2A2833" roughness={0.6} />
      </RoundedBox>
      {/* orientation marker */}
      <mesh position={[1.3, 0.315, 0.42]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#3B7FD9" emissive="#3B7FD9" emissiveIntensity={0.4} />
      </mesh>
      {/* strain relief + cable */}
      <mesh position={[-1.42, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.17, 0.35, 20]} />
        <meshStandardMaterial color="#2A2833" roughness={0.6} />
      </mesh>
      <mesh geometry={cable} castShadow>
        <meshStandardMaterial color="#2A2833" roughness={0.6} />
      </mesh>
    </group>
  );
}

function Mug() {
  const tex = useTex(T.coffee, 256, 256);
  return (
    <group>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.56, 1.25, 48]} />
        <meshStandardMaterial attach="material-0" color="#7840E5" roughness={0.35} />
        <meshStandardMaterial attach="material-1" map={tex} roughness={0.2} />
        <meshStandardMaterial attach="material-2" color="#7840E5" />
      </mesh>
      <mesh position={[0.68, 0, 0]} castShadow>
        <torusGeometry args={[0.3, 0.08, 12, 24]} />
        <meshStandardMaterial color="#7840E5" roughness={0.35} />
      </mesh>
    </group>
  );
}

function Pencil({ color }: { color: string }) {
  return (
    <group>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 2.6, 6]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
      <mesh position={[1.45, 0, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
        <coneGeometry args={[0.1, 0.32, 6]} />
        <meshStandardMaterial color="#EBC99A" />
      </mesh>
      <mesh position={[-1.38, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.18, 12]} />
        <meshStandardMaterial color="#F4A6B8" />
      </mesh>
    </group>
  );
}

// ── object catalogue ──────────────────────────────────────────────────────
const OBJECTS: ObjectDef[] = [
  {
    key: "name",
    tumble: 0.15,
    drop: 9,
    target: "about",
    label: "about me",
    color: "#7840E5",
    spot: [0, -0.05],
    spotTall: [0, -0.02],
    restY: 0.04,
    yaw: -0.04,
    render: () => <Slab size={[3.8, 0.06, 1.95]} draw={T.nameCard} side="#F4F2FC" px={200} />,
    colliders: () => <CuboidCollider args={[1.9, 0.03, 0.975]} />,
  },
  {
    key: "probe",
    tumble: 1,
    drop: 1,
    target: "research",
    label: "research",
    color: "#3B7FD9",
    spot: [-0.62, 0.5],
    spotTall: [-0.3, 0.42],
    restY: 0.32,
    yaw: 0.5,
    render: () => <UltrasoundProbe />,
    colliders: () => (
      <>
        <CuboidCollider args={[1.25, 0.3, 0.3]} />
        <CuboidCollider args={[0.33, 0.31, 0.58]} position={[1.32, 0, 0]} />
      </>
    ),
  },
  {
    key: "record",
    tumble: 0.35,
    drop: 3,
    target: "music",
    label: "music",
    color: "#F29A3A",
    spot: [-0.62, -0.42],
    spotTall: [-0.42, -0.62],
    restY: 0.04,
    yaw: 0.3,
    render: () => <Disc r={1.55} h={0.05} draw={T.record} side="#18161F" />,
    colliders: () => <CylinderCollider args={[0.025, 1.55]} />,
  },
  {
    key: "sketchbook",
    tumble: 0.4,
    drop: 2,
    target: "art",
    label: "art",
    color: "#16B583",
    spot: [0.6, -0.42],
    spotTall: [0.45, -0.4],
    restY: 0.1,
    yaw: -0.22,
    render: () => <Slab size={[2.8, 0.18, 2.05]} draw={T.sketchbook} side="#FBF6EC" />,
    colliders: () => <CuboidCollider args={[1.4, 0.09, 1.025]} />,
  },
  {
    key: "passport",
    tumble: 0.45,
    drop: 5,
    target: "travel",
    label: "travel",
    color: "#2C3A8F",
    spot: [0.68, 0.45],
    spotTall: [0.48, 0.68],
    restY: 0.07,
    yaw: 0.28,
    render: () => <Slab size={[1.45, 0.12, 2.0]} draw={T.passport} side="#1F2A6E" />,
    colliders: () => <CuboidCollider args={[0.725, 0.06, 1.0]} />,
  },
  {
    key: "badge",
    tumble: 0.45,
    drop: 4,
    target: "work",
    label: "work",
    color: "#6570E6",
    spot: [0.05, 0.62],
    spotTall: [0.52, 0.3],
    restY: 0.03,
    yaw: -0.35,
    render: () => <Slab size={[1.35, 0.05, 1.85]} draw={T.badge} side="#FFFFFF" />,
    colliders: () => <CuboidCollider args={[0.675, 0.025, 0.925]} />,
  },
  {
    key: "envelope",
    tumble: 0.4,
    drop: 6,
    target: "writing",
    label: "writing (soon!)",
    color: "#E2557F",
    spot: [0.08, -0.7],
    spotTall: [-0.35, 0.7],
    restY: 0.03,
    yaw: 0.12,
    render: () => <Slab size={[2.3, 0.04, 1.45]} draw={T.envelope} side="#FBE3EC" />,
    colliders: () => <CuboidCollider args={[1.15, 0.02, 0.725]} />,
  },
  {
    key: "mug",
    tumble: 0.12,
    drop: 0,
    label: "coffee (essential)",
    color: "#7840E5",
    spot: [0.8, -0.05],
    spotTall: [0.55, -0.82],
    restY: 0.63,
    yaw: 0.9,
    render: () => <Mug />,
    colliders: () => <CylinderCollider args={[0.62, 0.6]} />,
  },
  {
    key: "pencil1",
    tumble: 1,
    drop: 7,
    label: "",
    color: "#F29A3A",
    spot: [-0.9, 0.0],
    spotTall: [-0.55, -0.28],
    restY: 0.1,
    yaw: 1.3,
    render: () => <Pencil color="#F5C04A" />,
    colliders: () => <CuboidCollider args={[1.5, 0.09, 0.09]} />,
  },
  {
    key: "pencil2",
    tumble: 1,
    drop: 8,
    label: "",
    color: "#3B7FD9",
    spot: [-0.82, 0.06],
    spotTall: [-0.45, -0.24],
    restY: 0.1,
    yaw: 1.42,
    render: () => <Pencil color="#6570E6" />,
    colliders: () => <CuboidCollider args={[1.5, 0.09, 0.09]} />,
  },
];

// ── one falling object ───────────────────────────────────────────────────
function DeskObject({
  def,
  pos,
  order,
  still,
  onSelect,
}: {
  def: ObjectDef;
  pos: [number, number];
  order: number;
  still: boolean;
  onSelect: (t: DeskTarget) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const visual = useRef<THREE.Group>(null);
  const clickable = !!def.target;

  // random-but-stable tumble for the drop
  const init = useMemo(() => {
    const r = (a: number) => (Math.random() - 0.5) * a;
    return {
      y: 5 + order * 1.5 + Math.random() * 0.6,
      rot: [r(1.6 * def.tumble), def.yaw + r(0.8), r(1.6 * def.tumble)] as [number, number, number],
      spin: [r(8 * def.tumble), r(3), r(8 * def.tumble)] as [number, number, number],
    };
  }, [order, def.yaw, def.tumble]);

  useFrame((_, dt) => {
    if (!visual.current) return;
    const s = hovered && clickable ? 1.07 : 1;
    const k = 1 - Math.pow(0.0005, dt);
    visual.current.scale.lerp(new THREE.Vector3(s, s, s), k);
  });

  return (
    <RigidBody
      colliders={false}
      position={[pos[0], still ? def.restY : init.y, pos[1]]}
      rotation={still ? [0, def.yaw, 0] : init.rot}
      angularVelocity={still ? [0, 0, 0] : init.spin}
      linearDamping={0.1}
      angularDamping={0.35}
      friction={0.8}
      restitution={0.15}
      ccd
    >
      {def.colliders()}
      <group
        ref={visual}
        onPointerOver={(e) => {
          if (!clickable) return;
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "";
        }}
        onClick={(e) => {
          if (!def.target) return;
          e.stopPropagation();
          document.body.style.cursor = "";
          onSelect(def.target);
        }}
      >
        {def.render()}
      </group>
      {hovered && clickable && (
        <Html center position={[0, 1.4, 0]} zIndexRange={[20, 0]} style={{ pointerEvents: "none" }}>
          <div
            className="whitespace-nowrap rounded-full px-3 py-1 font-medium text-lg text-white shadow-lift"
            style={{ background: def.color }}
          >
            {def.label} →
          </div>
        </Html>
      )}
    </RigidBody>
  );
}

// ── camera that frames the desk for any screen shape ─────────────────────
function useDeskFrame() {
  const { size } = useThree();
  const aspect = size.width / size.height;
  const tall = aspect < 0.9;
  // visible desk area (world units) we want to guarantee
  const viewH = Math.max(12.5, (tall ? 9.2 : 17) / aspect);
  const viewW = viewH * aspect;
  return { tall, viewH, viewW };
}

function Rig() {
  const { camera } = useThree();
  const { viewH } = useDeskFrame();
  useFrame(() => {
    const fov = ((camera as THREE.PerspectiveCamera).fov * Math.PI) / 180;
    const dist = viewH / 2 / Math.tan(fov / 2);
    const tilt = 0.22;
    camera.position.set(0, dist * Math.cos(tilt), dist * Math.sin(tilt));
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Desk() {
  const tex = useMemo(() => {
    const t = T.canvasTexture(1024, 1024, T.wood);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(3, 3);
    return t;
  }, []);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[80, 80]} />
      <meshStandardMaterial map={tex} roughness={0.85} />
    </mesh>
  );
}

function Scene({
  still,
  onSelect,
  dropKey,
}: {
  still: boolean;
  onSelect: (t: DeskTarget) => void;
  dropKey: number;
}) {
  const { tall, viewH, viewW } = useDeskFrame();
  const halfW = viewW / 2;
  const halfH = viewH / 2;
  const mx = halfW - (tall ? 1.2 : 2.2);
  const mz = halfH - 1.7;

  return (
    <>
      <Rig />
      <hemisphereLight args={["#fbf8ff", "#6b5a96", 0.95]} />
      <directionalLight
        position={[-7, 16, 7]}
        intensity={1.7}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
        shadow-bias={-0.0004}
        shadow-radius={6}
      />
      <Physics gravity={[0, -28, 0]} key={dropKey + (tall ? "t" : "w")}>
        {/* desk top + invisible walls at the edge of the view */}
        <RigidBody type="fixed" colliders={false}>
          <CuboidCollider args={[60, 0.5, 60]} position={[0, -0.5, 0]} friction={0.9} />
          <CuboidCollider args={[0.5, 10, 60]} position={[-halfW - 0.5, 10, 0]} />
          <CuboidCollider args={[0.5, 10, 60]} position={[halfW + 0.5, 10, 0]} />
          <CuboidCollider args={[60, 10, 0.5]} position={[0, 10, -halfH - 0.5]} />
          <CuboidCollider args={[60, 10, 0.5]} position={[0, 10, halfH + 0.5]} />
        </RigidBody>
        {OBJECTS.map((def) => {
          const s = tall ? def.spotTall : def.spot;
          return (
            <DeskObject
              key={def.key}
              def={def}
              order={def.drop}
              pos={[s[0] * mx, s[1] * mz]}
              still={still}
              onSelect={onSelect}
            />
          );
        })}
      </Physics>
      <Desk />
    </>
  );
}

export default function DeskScene({
  still = false,
  onSelect,
  dropKey = 0,
}: {
  still?: boolean;
  onSelect: (t: DeskTarget) => void;
  dropKey?: number;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 35, near: 0.1, far: 200, position: [0, 20, 5] }}
      gl={{ antialias: true }}
      onPointerMissed={() => (document.body.style.cursor = "")}
    >
      <color attach="background" args={["#CDBDEB"]} />
      <Scene still={still} onSelect={onSelect} dropKey={dropKey} />
    </Canvas>
  );
}
