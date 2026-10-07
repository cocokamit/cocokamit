import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const ease = [0.76, 0, 0.24, 1];

// Wraps every route: a curtain wipes in with the page name, then lifts away.
export default function Page({ title, children, footer = true }) {
  useEffect(() => {
    document.title = title === 'Home' ? 'Heherson Amit — Software Engineer & Web Developer' : `${title} — Heherson Amit`;
  }, [title]);
  return (
    <>
      <motion.div className="curtain" aria-hidden="true"
        initial={{ scaleY: 1 }} animate={{ scaleY: 0, transition: { duration: 0.8, ease, delay: 0.15 } }}
        exit={{ scaleY: 1, transition: { duration: 0.55, ease } }}
        style={{ originY: 0 }}
      >
        <motion.span initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { duration: 0.2 } }} exit={{ opacity: 0 }}>{title}</motion.span>
      </motion.div>
      <motion.main
        id="main"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 } }}
        exit={{ opacity: 0, y: -40, transition: { duration: 0.4 } }}
      >
        {children}
      </motion.main>
      {footer && <Footer />}
    </>
  );
}
