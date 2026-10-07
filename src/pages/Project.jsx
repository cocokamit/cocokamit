import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import Page from '../components/Page';
import { SplitText, Reveal, Magnetic } from '../components/Motion';
import ProjectCover from '../components/ProjectCover';
import Icon from '../components/Icon';
import NotFound from './NotFound';
import { projects, profile } from '../data/content';
import { category } from './Work';

export default function Project() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(null);
  if (i < 0) return <NotFound />;
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <Page title={p.title}>
      <section className="container project-hero" style={{ '--c': p.color }}>
        <Link to="/work" className="back" data-cursor="Back"><Icon name="back" size={18} /> All work</Link>
        <p className="eyebrow"><span className="dot" /> {p.kind} · {p.year}</p>
        <SplitText as="h1" className="display" text={p.title} />
        <Reveal as="p" className="lede" delay={0.2}>{p.summary}</Reveal>
        <Reveal className="project-facts" delay={0.3}>
          <div><small>Client</small><span>{p.client}</span></div>
          <div><small>Type</small><span>{category(p)}</span></div>
          <div><small>Stack</small><span>{p.stack.join(' · ')}</span></div>
          {p.repo && (
            <Magnetic>
              <a className="btn btn-ghost" href={`${profile.github}/${p.repo}`} target="_blank" rel="noreferrer" data-cursor="Code">
                <SiGithub size={18} /> Source
              </a>
            </Magnetic>
          )}
        </Reveal>
      </section>

      <section className="container" style={{ '--c': p.color }}>
        <Reveal className="project-stage">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.45 }}
              onClick={() => p.images.length && setZoom(p.images[active])} data-cursor={p.images.length ? 'Zoom' : undefined}>
              <ProjectCover project={p} index={active} className="big" />
            </motion.div>
          </AnimatePresence>
        </Reveal>
        {p.images.length > 1 && (
          <div className={`thumbs ${p.phone ? 'thumbs-phone' : ''}`}>
            {p.images.map((img, k) => (
              <button key={k} className={k === active ? 'active' : ''} onClick={() => setActive(k)} aria-label={`Screenshot ${k + 1}`}>
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="container impact" style={{ '--c': p.color }}>
        {p.impact.map((m, k) => (
          <Reveal key={m.label} delay={k * 0.1} className="impact-item">
            <strong>{m.value}</strong><span>{m.label}</span>
          </Reveal>
        ))}
      </section>

      <section className="container story">
        <p className="eyebrow">The story</p>
        <div>{p.story.map((s, k) => <Reveal as="p" key={k} delay={k * 0.1}>{s}</Reveal>)}</div>
      </section>

      <section className="container">
        <Link to={`/work/${next.slug}`} className="next-project" data-cursor="Next" style={{ '--c': next.color }}>
          <small>Next project</small>
          <span>{next.title}</span>
          <Icon name="arrow" size={48} />
        </Link>
      </section>

      <AnimatePresence>
        {zoom && (
          <motion.div className="lightbox" onClick={() => setZoom(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} data-cursor="Close">
            <motion.img src={zoom} alt="" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  );
}
