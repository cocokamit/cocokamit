import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox, ContactShadows, Environment, Lightformer, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import SceneCanvas from './SceneCanvas';

const CODE = [
  ['k', 'const '], ['v', 'heherson'], ['p', ' = {'], ['\n'],
  ['p', '  role: '], ['s', "'Software Engineer'"], ['p', ','], ['\n'],
  ['p', '  stack: ['], ['s', "'C#'"], ['p', ', '], ['s', "'.NET'"], ['p', ', '], ['s', "'React'"], ['p', '],'], ['\n'],
  ['p', '  saved: '], ['n', '1_500_000'], ['p', ','], ['\n'],
  ['p', '  basedIn: '], ['s', "'Cebu, PH'"], ['p', ','], ['\n'],
  ['p', '};'], ['\n'], ['\n'],
  ['c', '// turn ideas into shipped software'], ['\n'],
  ['k', 'await '], ['f', 'ship'], ['p', '(heherson.'], ['v', 'nextIdea'], ['p', ');'], ['\n'],
];
const COLORS = { k: '#f472b6', v: '#7dd3fc', p: '#e5e7eb', s: '#00df9a', n: '#facc15', c: '#6b7280', f: '#c4b5fd' };

// A canvas texture that "types" the code above, line by line, forever.
function useCodeTexture() {
  const { canvas, ctx, tex } = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024; canvas.height = 640;
    const ctx = canvas.getContext('2d');
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return { canvas, ctx, tex };
  }, []);
  const state = useRef({ chars: 0, t: 0, hold: 0 });
  const total = CODE.reduce((n, [, s]) => n + (s ? s.length : 1), 0);

  const draw = (count, blink) => {
    ctx.fillStyle = '#0b0f14'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#141a22'; ctx.fillRect(0, 0, canvas.width, 56);
    ['#ff5f57', '#febc2e', '#28c840'].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(36 + i * 30, 28, 9, 0, 7); ctx.fill(); });
    ctx.fillStyle = '#6b7280'; ctx.font = '22px "JetBrains Mono", monospace'; ctx.fillText('portfolio.ts', 150, 36);
    ctx.font = '30px "JetBrains Mono", monospace';
    let x = 70, y = 110, left = count, line = 1;
    ctx.fillStyle = '#374151'; ctx.fillText(String(line), 22, y);
    for (const [k, s] of CODE) {
      if (left <= 0) break;
      if (k === '\n') { x = 70; y += 46; line++; left--; ctx.fillStyle = '#374151'; ctx.fillText(String(line), 22, y); continue; }
      const part = s.slice(0, left); left -= part.length;
      ctx.fillStyle = COLORS[k]; ctx.fillText(part, x, y); x += ctx.measureText(part).width;
    }
    if (blink) { ctx.fillStyle = '#00df9a'; ctx.fillRect(x + 2, y - 26, 14, 32); }
    tex.needsUpdate = true;
  };

  useFrame((_, dt) => {
    const s = state.current;
    s.t += dt;
    if (s.chars >= total) { s.hold += dt; if (s.hold > 3) { s.chars = 0; s.hold = 0; } }
    else s.chars += dt * 38;
    draw(Math.floor(s.chars), Math.floor(s.t * 2) % 2 === 0);
  });
  return tex;
}

function Laptop(props) {
  const lid = useRef();
  const [open, setOpen] = useState(true);
  const [hover, setHover] = useState(false);
  const tex = useCodeTexture();
  useFrame((_, dt) => {
    const target = open ? -0.25 : Math.PI / 2 - 0.03;
    lid.current.rotation.x = THREE.MathUtils.damp(lid.current.rotation.x, target, 5, dt);
  });
  return (
    <group
      {...props}
      onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
      onPointerOver={() => { setHover(true); document.body.dataset.scene = 'hover'; }}
      onPointerOut={() => { setHover(false); delete document.body.dataset.scene; }}
    >
      {/* base */}
      <RoundedBox args={[3.2, 0.14, 2.1]} radius={0.06} smoothness={4} position={[0, -0.07, 0]}>
        <meshStandardMaterial color="#1b2128" metalness={0.8} roughness={0.32} />
      </RoundedBox>
      {/* keyboard + trackpad */}
      <mesh position={[0, 0.005, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.7, 1.05]} />
        <meshStandardMaterial color="#0d1116" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.006, 0.62]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.0, 0.55]} />
        <meshStandardMaterial color={hover ? '#00df9a' : '#232a33'} roughness={0.5} emissive={hover ? '#00df9a' : '#000'} emissiveIntensity={0.25} />
      </mesh>
      {/* lid, hinged at the back edge */}
      <group ref={lid} position={[0, 0.06, -1.05]} rotation={[-0.25, 0, 0]}>
        <RoundedBox args={[3.2, 2.05, 0.08]} radius={0.05} smoothness={4} position={[0, 1.02, -0.04]}>
          <meshStandardMaterial color="#1b2128" metalness={0.8} roughness={0.32} />
        </RoundedBox>
        <mesh position={[0, 1.02, 0.002]}>
          <planeGeometry args={[2.98, 1.86]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function Shapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.6}>
        <mesh position={[2.6, 1.9, -1.2]}>
          <torusKnotGeometry args={[0.42, 0.14, 160, 24]} />
          <meshStandardMaterial color="#00df9a" metalness={0.6} roughness={0.15} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2.4, 2.1, -2.5]}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#f472b6" wireframe />
        </mesh>
      </Float>
      <Float speed={2.4} rotationIntensity={1} floatIntensity={2.2}>
        <mesh position={[2.8, -0.9, 0.6]}>
          <sphereGeometry args={[0.28, 48, 48]} />
          <meshPhysicalMaterial color="#ffffff" transmission={1} thickness={0.6} roughness={0.05} ior={1.4} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={2.5} floatIntensity={1.4}>
        <mesh position={[-2.2, -1.2, 0.4]} rotation={[0.4, 0.4, 0]}>
          <boxGeometry args={[0.45, 0.45, 0.45]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.3} roughness={0.4} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
        <mesh position={[0.6, 2.2, -3]} rotation={[1.2, 0, 0]}>
          <torusGeometry args={[0.5, 0.05, 16, 80]} />
          <meshStandardMaterial color="#facc15" metalness={0.9} roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
}

// Tilts the whole rig toward the pointer.
function Rig({ children }) {
  const g = useRef();
  useFrame((state, dt) => {
    const { x, y } = state.pointer;
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, x * 0.45, 3, dt);
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, -y * 0.18, 3, dt);
  });
  return <group ref={g}>{children}</group>;
}

export default function HeroScene() {
  return (
    <SceneCanvas className="hero-scene" camera={{ position: [0, 1.6, 7.2], fov: 38 }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} />
      <pointLight position={[-4, 2, 2]} intensity={20} color="#00df9a" />
      <Rig>
        <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.5}>
          <Laptop position={[0.4, -0.75, 0]} rotation={[0.2, -0.45, 0]} scale={0.82} />
        </Float>
        <Shapes />
        <Sparkles count={70} scale={[10, 6, 6]} size={2.2} speed={0.35} color="#00df9a" />
      </Rig>
      <ContactShadows position={[0, -1.75, 0]} opacity={0.5} scale={12} blur={2.6} far={4} />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, -6]} scale={[10, 3, 1]} />
        <Lightformer form="rect" intensity={2} color="#00df9a" position={[-6, 1, 1]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#f472b6" position={[6, 1, 1]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
      </Environment>
    </SceneCanvas>
  );
}
