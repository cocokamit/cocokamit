import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Cursor from './components/Cursor';
import SmoothScroll, { useLenis } from './components/SmoothScroll';
import { ScrollProgress } from './components/Motion';
import Home from './pages/Home';

const Work = lazy(() => import('./pages/Work'));
const Project = lazy(() => import('./pages/Project'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Future = lazy(() => import('./pages/Future'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  const lenis = useLenis();
  const toTop = () => (lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0));
  return (
    <AnimatePresence mode="wait" onExitComplete={toTop}>
      <Suspense fallback={<div className="route-loading" />} key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/future" element={<Future />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <a href="#main" className="skip">Skip to content</a>
      <ScrollProgress />
      <Nav />
      <AnimatedRoutes />
      <Cursor />
      <div className="grain" aria-hidden="true" />
    </SmoothScroll>
  );
}
