import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// A dot that follows the pointer exactly and a ring that trails on a spring.
// Any element with data-cursor="Label" grows the ring and shows the label.
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });
  const [label, setLabel] = useState('');
  const [state, setState] = useState('idle'); // idle | hover | label | down | hidden
  const [enabled, setEnabled] = useState(false);
  const last = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener('change', update);
    return () => fine.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-cursor');
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target.closest?.('[data-cursor], a, button, input, textarea, select, [role="button"]');
      if (t === last.current) return;
      last.current = t;
      if (!t) { setState('idle'); setLabel(''); return; }
      const l = t.getAttribute('data-cursor');
      if (l) { setLabel(l); setState('label'); }
      else if (t.matches('input, textarea, select')) { setLabel(''); setState('text'); }
      else { setLabel(''); setState('hover'); }
    };
    const down = () => document.documentElement.classList.add('cursor-down');
    const up = () => document.documentElement.classList.remove('cursor-down');
    const leave = () => setState('hidden');
    const enter = () => setState('idle');
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.addEventListener('pointerleave', leave);
    document.addEventListener('pointerenter', enter);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerenter', enter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div className={`cursor-ring is-${state}`} style={{ x: rx, y: ry }} aria-hidden="true">
        <span className="cursor-label">{label}</span>
      </motion.div>
      <motion.div className={`cursor-dot is-${state}`} style={{ x, y }} aria-hidden="true" />
    </>
  );
}
