import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from 'framer-motion';

const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }) {
  const reduce = useReducedMotion();
  const [lenis, setLenis] = useState(null);
  const raf = useRef(0);

  useEffect(() => {
    if (reduce) return;
    const l = new Lenis({ duration: 1.15, smoothWheel: true });
    setLenis(l);
    const loop = (t) => { l.raf(t); raf.current = requestAnimationFrame(loop); };
    raf.current = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf.current); l.destroy(); setLenis(null); };
  }, [reduce]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
