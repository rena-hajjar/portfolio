"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, RoundedBox, useTexture } from "@react-three/drei";
import {
  CuboidCollider,
  CylinderCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { Suspense, useMemo, useRef, useState, type ReactNode } from "react";
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
    spot: [0, 0.5],
    spotTall: [0, 0.55],
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
    spot: [-0.5, 0.3],
    spotTall: [-0.35, 0.05],
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
    spot: [-0.4, -0.45],
    spotTall: [-0.5, -0.55],
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
    spot: [0.55, 0.25],
    spotTall: [0.45, -0.55],
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
    spot: [0.8, 0.5],
    spotTall: [0.6, 0.6],
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
    spot: [0.3, -0.3],
    spotTall: [0.55, 0.05],
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
    spot: [-0.02, -0.42],
    spotTall: [0.1, -0.15],
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
    spot: [0.85, -0.2],
    spotTall: [0.75, -0.85],
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
    spot: [-0.82, -0.05],
    spotTall: [-0.65, 0.4],
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
    spot: [-0.76, 0.02],
    spotTall: [-0.58, 0.46],
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

// ── desk dimensions + camera framing for any screen shape ────────────────
function useDeskFrame() {
  const { size } = useThree();
  const aspect = size.width / size.height;
  const tall = aspect < 0.9;
  return {
    tall,
    aspect,
    deskW: tall ? 9.5 : 21,
    deskD: tall ? 9 : 9.5,
    fov: tall ? 52 : 38,
    pitch: tall ? 0.85 : 0.56, // camera elevation (radians)
  };
}

function Rig() {
  const { camera } = useThree();
  const { deskW, fov, pitch, aspect } = useDeskFrame();
  useFrame(() => {
    const cam = camera as THREE.PerspectiveCamera;
    if (cam.fov !== fov) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }
    // back off until the whole desk width fits on screen
    const hHalf = Math.atan(Math.tan(((fov / 2) * Math.PI) / 180) * aspect);
    const dist = (deskW / 2 + 0.6) / Math.tan(hHalf);
    camera.position.set(0, dist * Math.sin(pitch), dist * Math.cos(pitch) + 0.6);
    camera.lookAt(0, 0.4, 0.2);
  });
  return null;
}

// ── the room: desk, wall, lamp, plant, framed paintings ─────────────────
function Frame({ src, w, h, position }: { src: string; w: number; h: number; position: [number, number, number] }) {
  const tex = useTexture(src);
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[w + 0.36, h + 0.36, 0.14]} />
        <meshStandardMaterial color="#F4F2FC" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.075]}>
        <planeGeometry args={[w, h]} />
        <meshStandardMaterial map={tex} roughness={0.8} />
      </mesh>
    </group>
  );
}

function Lamp({ position }: { position: [number, number, number] }) {
  const metal = <meshStandardMaterial color="#201F34" roughness={0.35} metalness={0.4} />;
  return (
    <group position={position}>
      <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.95, 0.24, 40]} />
        {metal}
      </mesh>
      <mesh position={[0, 1.9, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 3.6, 16]} />
        {metal}
      </mesh>
      <mesh position={[0.75, 3.62, 0.4]} rotation={[0.45, 0, -1.05]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 1.9, 16]} />
        {metal}
      </mesh>
      <mesh position={[1.55, 3.85, 0.85]} rotation={[0.25, 0, 0.3]} castShadow>
        <coneGeometry args={[0.75, 1.1, 40, 1, true]} />
        <meshStandardMaterial color="#F29A3A" roughness={0.45} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[1.45, 3.35, 0.8]}>
        <sphereGeometry args={[0.24, 20, 20]} />
        <meshStandardMaterial color="#FFF3D6" emissive="#FFE2A8" emissiveIntensity={2.2} />
      </mesh>
      <pointLight position={[1.5, 3.2, 0.9]} color="#FFD9A0" intensity={40} distance={14} decay={2} />
    </group>
  );
}

function Plant({ position }: { position: [number, number, number] }) {
  const leaves = useMemo(
    () =>
      Array.from({ length: 11 }, (_, i) => {
        const a = (i / 11) * Math.PI * 2 + (i % 2) * 0.3;
        const tilt = 0.5 + (i % 3) * 0.22;
        return { a, tilt, len: 1.3 + ((i * 37) % 5) * 0.15 };
      }),
    []
  );
  return (
    <group position={position}>
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.65, 1.5, 32]} />
        <meshStandardMaterial color="#87F4BD" roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.48, 0]}>
        <cylinderGeometry args={[0.78, 0.78, 0.06, 32]} />
        <meshStandardMaterial color="#4A2E1E" roughness={1} />
      </mesh>
      {leaves.map((l, i) => (
        <group key={i} position={[0, 1.5, 0]} rotation={[0, l.a, l.tilt]}>
          <mesh position={[0, l.len / 2, 0]} scale={[0.32, l.len / 2, 0.1]} castShadow>
            <sphereGeometry args={[1, 16, 12]} />
            <meshStandardMaterial color={i % 2 ? "#16B583" : "#0F8F67"} roughness={0.55} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Room({ deskW, deskD, tall }: { deskW: number; deskD: number; tall: boolean }) {
  const wood = useMemo(() => {
    // one large texture stretched over the top — no visible tiling seams
    return T.canvasTexture(2048, Math.round((2048 * deskD) / deskW), T.wood);
  }, [deskW, deskD]);
  const legH = 11;
  const legs: [number, number][] = [
    [-deskW / 2 + 0.6, -deskD / 2 + 0.6],
    [deskW / 2 - 0.6, -deskD / 2 + 0.6],
    [-deskW / 2 + 0.6, deskD / 2 - 0.6],
    [deskW / 2 - 0.6, deskD / 2 - 0.6],
  ];
  const wallZ = -deskD / 2 - 0.4;
  return (
    <group>
      {/* desktop */}
      <mesh position={[0, -0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[deskW, 0.6, deskD]} />
        <meshStandardMaterial map={wood} roughness={0.55} />
      </mesh>
      {/* apron with a drawer */}
      <mesh position={[0, -1.15, deskD / 2 - 0.3]} castShadow receiveShadow>
        <boxGeometry args={[deskW - 1.2, 1.1, 0.4]} />
        <meshStandardMaterial color="#B98455" roughness={0.6} />
      </mesh>
      <RoundedBox args={[1.4, 0.18, 0.18]} radius={0.08} position={[deskW * 0.22, -1.15, deskD / 2 - 0.05]}>
        <meshStandardMaterial color="#201F34" metalness={0.4} roughness={0.3} />
      </RoundedBox>
      {legs.map(([x, z], i) => (
        <mesh key={i} position={[x, -0.6 - legH / 2, z]} castShadow receiveShadow>
          <boxGeometry args={[0.7, legH, 0.7]} />
          <meshStandardMaterial color="#B98455" roughness={0.6} />
        </mesh>
      ))}
      {/* floor + wall */}
      <mesh position={[0, -0.6 - legH, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#C9C3EE" roughness={1} />
      </mesh>
      <mesh position={[0, 6, wallZ]} receiveShadow>
        <planeGeometry args={[120, 40]} />
        <meshStandardMaterial color="#ABA6EC" roughness={0.95} />
      </mesh>
      {/* skirting line where the desk meets the wall */}
      <mesh position={[0, 0.06, wallZ + 0.05]}>
        <boxGeometry args={[120, 0.12, 0.1]} />
        <meshStandardMaterial color="#9C96E0" />
      </mesh>
      {/* paintings on the wall */}
      {!tall && (
        <Suspense fallback={null}>
          <Frame src="/art/flower-head.webp" w={2.3} h={3.2} position={[-2.6, 3.4, wallZ + 0.08]} />
          <Frame src="/art/water-swim.webp" w={3.4} h={2.65} position={[1.6, 3.1, wallZ + 0.08]} />
        </Suspense>
      )}
      <Lamp position={[-deskW / 2 + 1.6, 0, -deskD / 2 + 1.3]} />
      <Plant position={[deskW / 2 - 1.4, 0, -deskD / 2 + 1.3]} />
    </group>
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
  const { tall, deskW, deskD } = useDeskFrame();
  const mx = deskW / 2 - (tall ? 1.3 : 2.0);
  const mz = deskD / 2 - 1.4;
  const hx = deskW / 2;
  const hz = deskD / 2;

  return (
    <>
      <Rig />
      <hemisphereLight args={["#fbf8ff", "#8a7bb8", 0.9]} />
      <directionalLight
        position={[-8, 18, 12]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
        shadow-bias={-0.0004}
      />
      <Physics gravity={[0, -28, 0]} key={dropKey + (tall ? "t" : "w")}>
        {/* desktop + invisible rails along its edges so nothing falls off */}
        <RigidBody type="fixed" colliders={false}>
          <CuboidCollider args={[hx, 0.3, hz]} position={[0, -0.3, 0]} friction={0.9} />
          <CuboidCollider args={[0.3, 6, hz]} position={[-hx - 0.3, 6, 0]} />
          <CuboidCollider args={[0.3, 6, hz]} position={[hx + 0.3, 6, 0]} />
          <CuboidCollider args={[hx, 6, 0.3]} position={[0, 6, -hz - 0.3]} />
          <CuboidCollider args={[hx, 6, 0.3]} position={[0, 6, hz + 0.3]} />
          {/* lamp base + pole, plant pot */}
          <CylinderCollider args={[0.12, 0.95]} position={[-hx + 1.6, 0.12, -hz + 1.3]} />
          <CylinderCollider args={[1.8, 0.12]} position={[-hx + 1.6, 1.9, -hz + 1.3]} />
          <CylinderCollider args={[0.75, 0.85]} position={[hx - 1.4, 0.75, -hz + 1.3]} />
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
      <Room deskW={deskW} deskD={deskD} tall={tall} />
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
      camera={{ fov: 38, near: 0.1, far: 300, position: [0, 12, 18] }}
      gl={{ antialias: true }}
      onPointerMissed={() => (document.body.style.cursor = "")}
    >
      <color attach="background" args={["#ABA6EC"]} />
      <Suspense fallback={null}>
        <Scene still={still} onSelect={onSelect} dropKey={dropKey} />
      </Suspense>
    </Canvas>
  );
}
