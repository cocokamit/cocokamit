import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Page from '../components/Page';
import { SplitText, Reveal, Magnetic, Marquee, Counter, ScrollWords, TiltCard } from '../components/Motion';
import Icon from '../components/Icon';
import ProjectCover from '../components/ProjectCover';
import { profile, stats, clients, projects, future } from '../data/content';

const HeroScene = lazy(() => import('../three/HeroScene'));

const services = [
  { icon: 'compass', title: 'Websites & web apps', text: 'Fast, accessible React and ASP.NET sites with motion that serves the message.' },
  { icon: 'mesh', title: 'Enterprise systems', text: 'HRIS, ERP, inventory and compliance platforms that survive real operations.' },
  { icon: 'phone', title: 'Mobile apps', text: 'Android (Java) and React Native apps built for agents and staff in the field.' },
  { icon: 'flask', title: 'Data & automation', text: 'Palantir Foundry pipelines, AI agents and dashboards that replace spreadsheets.' },
];

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  return (
    <section ref={ref} className="hero">
      <div className="hero-bg" aria-hidden="true"><div className="grid-lines" /></div>
      <motion.div className="hero-3d" style={{ scale, opacity }} data-cursor="Click the laptop">
        <Suspense fallback={<div className="scene-fallback" />}><HeroScene /></Suspense>
      </motion.div>
      <motion.div className="container hero-inner" style={{ y, opacity }}>
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <span className="pulse-dot" /> {profile.role} · {profile.location}
        </motion.p>
        <SplitText as="h1" className="hero-title" text="I build software" delay={0.5} />
        <SplitText as="h1" className="hero-title outline" text="people rely on." delay={0.7} />
        <motion.p className="hero-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
          {profile.intro}
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }}>
          <Magnetic><Link to="/work" className="btn btn-primary" data-cursor="Explore">See my work <Icon name="arrow" size={18} /></Link></Magnetic>
          <Magnetic><a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-ghost" data-cursor="PDF"><Icon name="download" size={18} /> Résumé</a></Magnetic>
        </motion.div>
      </motion.div>
      <div className="scroll-hint" aria-hidden="true"><span>Scroll</span><i /></div>
    </section>
  );
}

// Vertical scroll drives a horizontal track of featured projects (desktop).
function FeaturedRail() {
  const ref = useRef(null);
  const featured = projects.filter((p) => p.featured);
  const track = useRef(null);
  const [dist, setDist] = useState(0);
  useEffect(() => {
    const measure = () => setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -dist]);
  return (
    <section ref={ref} className="rail" style={{ height: `${featured.length * 70}vh` }}>
      <div className="rail-sticky">
        <div className="container rail-head">
          <p className="eyebrow">Selected work</p>
          <h2 className="h2">Things I’ve shipped</h2>
        </div>
        <motion.div className="rail-track" ref={track} style={{ x }}>
          {featured.map((p, i) => (
            <Link to={`/work/${p.slug}`} className="rail-card" key={p.slug} data-cursor="View" style={{ '--c': p.color }}>
              <TiltCard className="rail-inner" max={5}>
                <ProjectCover project={p} />
                <div className="rail-meta">
                  <span className="rail-n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.kind} · {p.client}</p>
                  </div>
                  <Icon name="arrow" size={26} />
                </div>
              </TiltCard>
            </Link>
          ))}
          <Link to="/work" className="rail-card rail-more" data-cursor="All work">
            <span>All {projects.length} projects</span><Icon name="arrow" size={48} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Page title="Home">
      <Hero />

      <section className="clients" aria-label="Clients and companies">
        <p className="eyebrow center">Trusted by teams at</p>
        <Marquee items={clients} speed={45} />
        <Marquee items={[...clients].reverse()} speed={30} reverse className="ghost" />
      </section>

      <section className="container stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="stat">
            <strong><Counter {...s} /></strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </section>

      <FeaturedRail />

      <section className="container statement">
        <p className="eyebrow">Philosophy</p>
        <ScrollWords text={profile.statement} />
      </section>

      <section className="container services">
        <div className="section-head">
          <p className="eyebrow">What I do</p>
          <SplitText as="h2" className="h2" text="Full-stack, end to end." />
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <TiltCard className="card service">
                <span className="icon-badge"><Icon name={s.icon} size={30} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container teaser">
        <Reveal>
          <Link to="/future" className="teaser-card" data-cursor="Next">
            <div>
              <p className="eyebrow">What’s next</p>
              <h2 className="h2">{future.roadmap[0].title} →</h2>
              <p>{future.intro}</p>
            </div>
            <span className="teaser-orbit" aria-hidden="true"><i /><i /><i /><Icon name="rocket" size={40} /></span>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
