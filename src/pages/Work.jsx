import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import Page from '../components/Page';
import { SplitText, Reveal, TiltCard } from '../components/Motion';
import ProjectCover from '../components/ProjectCover';
import Icon from '../components/Icon';
import { projects } from '../data/content';

export const category = (p) =>
  /Android|Cross/.test(p.kind) ? 'Mobile' : /Desktop/.test(p.kind) ? 'Desktop' : /Enterprise/.test(p.kind) ? 'Enterprise' : 'Web';
const filters = ['All', 'Web', 'Mobile', 'Desktop', 'Enterprise'];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const list = projects.filter((p) => filter === 'All' || category(p) === filter);
  return (
    <Page title="Work">
      <section className="container page-head">
        <p className="eyebrow">Work · {projects.length} projects</p>
        <SplitText as="h1" className="display" text="Systems, sites & apps." />
        <Reveal as="p" className="lede" delay={0.3}>
          From a $1.5M enterprise platform to Android apps for veterinarians — every project here was used by real people.
        </Reveal>
      </section>

      <section className="container">
        <LayoutGroup>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
                {filter === f && <motion.span layoutId="pill" className="pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span>{f}</span>
              </button>
            ))}
          </div>
          <motion.div layout className="work-grid">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/work/${p.slug}`} className="work-card" data-cursor="Open" style={{ '--c': p.color }}>
                    <TiltCard className="work-inner" max={6}>
                      <ProjectCover project={p} />
                      <div className="work-meta">
                        <div className="work-top">
                          <span className="chip"><Icon name={p.icon} size={16} /> {category(p)}</span>
                          <span className="muted">{p.year}</span>
                        </div>
                        <h3>{p.title}</h3>
                        <p>{p.summary}</p>
                        <div className="tags">{p.stack.slice(0, 4).map((t) => <span key={t}>{t}</span>)}</div>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </section>
    </Page>
  );
}
