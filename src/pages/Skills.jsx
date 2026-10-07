import { motion } from 'framer-motion';
import Page from '../components/Page';
import { SplitText, Reveal, TiltCard } from '../components/Motion';
import SkillIcon, { brand } from '../components/SkillIcon';
import { skillGroups } from '../data/content';

function Ring({ value }) {
  const r = 26, c = 2 * Math.PI * r;
  return (
    <svg className="ring" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r={r} className="ring-bg" />
      <motion.circle
        cx="32" cy="32" r={r} className="ring-fg"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c * (1 - value / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items);
  return (
    <Page title="Skills">
      <section className="container page-head">
        <p className="eyebrow">Skills · {all.length} tools</p>
        <SplitText as="h1" className="display" text="The toolbox." />
        <Reveal as="p" className="lede" delay={0.2}>
          Seven years across .NET, Android, the web and data platforms. Hover a card to see how deep each one goes.
        </Reveal>
      </section>

      <section className="container icon-cloud" aria-hidden="true">
        {all.map((s, i) => (
          <motion.span
            key={s.name}
            className="floaty"
            style={{ '--d': `${(i % 7) * 0.4}s`, '--brand': brand[s.icon] }}
            whileHover={{ scale: 1.35, rotate: i % 2 ? 10 : -10 }}
            data-cursor={s.name}
          >
            <SkillIcon name={s.icon} size={30} />
          </motion.span>
        ))}
      </section>

      {skillGroups.map((g, gi) => (
        <section key={g.title} className="container skill-group">
          <Reveal className="skill-group-head">
            <span className="muted">0{gi + 1}</span>
            <h2 className="h2">{g.title}</h2>
            <p className="muted">{g.blurb}</p>
          </Reveal>
          <div className="skill-grid">
            {g.items.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <TiltCard className="card skill" max={10} style={{ '--brand': brand[s.icon] }}>
                  <div className="skill-icon">
                    <Ring value={s.level} />
                    <SkillIcon name={s.icon} size={28} />
                  </div>
                  <h3>{s.name}</h3>
                  <span className="skill-level">{s.level}%</span>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </Page>
  );
}
