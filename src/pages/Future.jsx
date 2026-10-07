import { lazy, Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Page from '../components/Page';
import { SplitText, Reveal, TiltCard } from '../components/Motion';
import Icon from '../components/Icon';
import SkillIcon, { brand } from '../components/SkillIcon';
import { future } from '../data/content';

const FutureScene = lazy(() => import('../three/FutureScene'));

function Roadmap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 50%'] });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div className="roadmap" ref={ref}>
      <div className="roadmap-line" aria-hidden="true"><motion.span style={{ width }} /></div>
      {future.roadmap.map((r, i) => (
        <Reveal key={r.title} className="road-item" delay={i * 0.08}>
          <span className="road-node"><Icon name={r.icon} size={22} /></span>
          <span className="road-when">{r.when}</span>
          <h3>{r.title}</h3>
          <p>{r.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default function Future() {
  const half = Math.ceil(future.skills.length / 2);
  return (
    <Page title="Future">
      <section className="future-hero">
        <div className="future-3d" data-cursor="Hover a skill">
          <Suspense fallback={<div className="scene-fallback" />}>
            <FutureScene inner={future.skills.slice(0, half).map((s) => s.name)} outer={future.skills.slice(half).map((s) => s.name)} />
          </Suspense>
        </div>
        <div className="container future-copy">
          <p className="eyebrow">2026 → 2029</p>
          <SplitText as="h1" className="display" text="What’s next." />
          <Reveal as="p" className="lede" delay={0.2}>{future.intro}</Reveal>
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Roadmap</p>
          <SplitText as="h2" className="h2" text="Plans, in order." />
        </div>
        <Roadmap />
      </section>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Future projects</p>
          <SplitText as="h2" className="h2" text="On the drawing board." />
        </div>
        <div className="future-grid">
          {future.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="card idea">
                <div className="idea-top">
                  <span className="icon-badge"><Icon name={p.icon} size={28} /></span>
                  <span className="chip status">{p.status}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Future skills</p>
          <SplitText as="h2" className="h2" text="Currently learning." />
        </div>
        <div className="learning">
          {future.skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04} className="learn-row">
              <span className="learn-icon" style={{ color: brand[s.icon] }}><SkillIcon name={s.icon} size={24} /></span>
              <span className="learn-name">{s.name}</span>
              <span className="learn-bar"><motion.i initial={{ width: 0 }} whileInView={{ width: `${s.progress}%` }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} /></span>
              <span className="learn-pct">{s.progress}%</span>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}
