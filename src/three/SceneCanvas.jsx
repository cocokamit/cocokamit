import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

// Canvas that stops rendering when scrolled out of view, to save battery.
export default function SceneCanvas({ children, className = '', camera, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '100px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`scene ${className}`}>
      <Canvas
        dpr={[1, 1.75]}
        frameloop={visible ? 'always' : 'never'}
        camera={camera ?? { position: [0, 0.6, 7], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        {...rest}
      >
        {children}
      </Canvas>
    </div>
  );
}
