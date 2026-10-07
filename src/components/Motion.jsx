import { Fragment, useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, animate, useScroll } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Fade + rise when scrolled into view.
export function Reveal({ children, delay = 0, y = 40, className = '', as = 'div', ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

// Masked word-by-word headline reveal.
export function SplitText({ text, className = '', delay = 0, as = 'h1', stagger = 0.06 }) {
  const M = motion[as];
  const words = text.split(' ');
  return (
    <M className={`split ${className}`} initial="hidden" whileInView="show" viewport={{ once: true }} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split-mask" aria-hidden="true">
            <motion.span
              className="split-word"
              variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: '0%', rotate: 0 } }}
              transition={{ duration: 1, ease, delay: delay + i * stagger }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </M>
  );
}

// Each word lights up as you scroll through the paragraph.
export function ScrollWords({ text, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] });
  const words = text.split(' ');
  return (
    <p ref={ref} className={`scroll-words ${className}`}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
      ))}
    </p>
  );
}
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

// Pulls toward the pointer while hovered.
export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} className={`magnetic ${className}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}

// 3D tilt + a spotlight that follows the pointer (uses CSS vars --mx/--my).
export function TiltCard({ children, className = '', max = 8, ...rest }) {
  const ref = useRef(null);
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    ref.current.style.setProperty('--mx', `${px * 100}%`);
    ref.current.style.setProperty('--my', `${py * 100}%`);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div
      ref={ref}
      className={`tilt spotlight ${className}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Number that counts up when visible.
export function Counter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, ease, onUpdate: setDisplay });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{prefix}{display.toFixed(decimals)}{suffix}</span>;
}

// Infinite ticker whose speed reacts to scroll velocity.
export function Marquee({ items, speed = 40, reverse = false, className = '' }) {
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const ref = useRef(null);
  useEffect(() => {
    let raf, prev = performance.now(), lastY = scrollY.get();
    const tick = (t) => {
      const dt = (t - prev) / 1000; prev = t;
      const y = scrollY.get();
      const boost = Math.min(Math.abs(y - lastY) * 0.6, 40);
      lastY = y;
      const w = ref.current ? ref.current.scrollWidth / 2 : 1;
      let next = x.get() + (reverse ? 1 : -1) * (speed + boost * 6) * dt;
      if (next <= -w) next += w;
      if (next > 0) next -= w;
      x.set(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed, reverse, scrollY, x]);
  return (
    <div className={`marquee ${className}`}>
      <motion.div className="marquee-track" ref={ref} style={{ x }}>
        {[...items, ...items].map((it, i) => (
          <span className="marquee-item" key={i}>{it}<i aria-hidden="true">✦</i></span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export { ease };
