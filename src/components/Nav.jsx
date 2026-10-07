import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { profile } from '../data/content';
import { Magnetic } from './Motion';

export const routes = [
  { to: '/', label: 'Home', n: '01' },
  { to: '/work', label: 'Work', n: '02' },
  { to: '/about', label: 'About', n: '03' },
  { to: '/skills', label: 'Skills', n: '04' },
  { to: '/future', label: 'Future', n: '05' },
  { to: '/contact', label: 'Contact', n: '06' },
];

// Swaps letters for random glyphs, then resolves to the real word.
function Scramble({ text }) {
  const [out, setOut] = useState(text);
  const run = () => {
    const chars = '!<>-_\\/[]{}=+*^?#';
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      setOut(text.split('').map((c, i) => (i < frame / 2 ? c : chars[Math.floor(Math.random() * chars.length)])).join(''));
      if (frame / 2 >= text.length) { clearInterval(id); setOut(text); }
    }, 28);
  };
  return <span onPointerEnter={run}>{out}</span>;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
    setScrolled(y > 30);
  });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'is-scrolled' : ''}`}
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" className="brand" data-cursor="Home" aria-label="Heherson Amit — home">
          <span className="brand-mark"><span>H<em>A</em></span></span>
          <span className="brand-name">heherson<span>.dev</span></span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {routes.slice(1).map((r) => (
            <NavLink key={r.to} to={r.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              <Scramble text={r.label} />
            </NavLink>
          ))}
        </nav>
        <div className="nav-right">
          <span className="status-dot" title={profile.available}><i /> Available</span>
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span /><span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 36px)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {routes.map((r, i) => (
                <motion.li
                  key={r.to}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink to={r.to} end className={({ isActive }) => (isActive ? 'active' : '')}>
                    <small>{r.n}</small>{r.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="menu-foot">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function NavCta() {
  return (
    <Magnetic>
      <Link to="/contact" className="btn btn-primary" data-cursor="Say hi">Let’s talk</Link>
    </Magnetic>
  );
}
