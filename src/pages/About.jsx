import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Page from '../components/Page';
import { SplitText, Reveal, TiltCard, ScrollWords } from '../components/Motion';
import Icon from '../components/Icon';
import photo from '../assets/heherson.webp';
import { profile, experience, education } from '../data/content';

const values = [
  { icon: 'people', title: 'Users first', text: 'I sit with the people who will use the system before I open Visual Studio.' },
  { icon: 'check', title: 'Proven, then shipped', text: 'UAT and test cases are part of the build, not an afterthought — I used to teach QA.' },
  { icon: 'pulse', title: 'Measured impact', text: 'Savings, hours and errors removed are how I judge whether the work mattered.' },
];

function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  return (
    <div className="timeline" ref={ref}>
      <div className="timeline-line" aria-hidden="true"><motion.span style={{ scaleY }} /></div>
      {experience.map((e, i) => (
        <Reveal key={e.company} className="tl-item" delay={0.05}>
          <span className="tl-node"><Icon name={e.icon} size={22} /></span>
          <div className="tl-card card spotlight">
            <div className="tl-head">
              <div><h3>{e.role}</h3><p className="accent">{e.company}</p></div>
              <span className="chip">{e.period}</span>
            </div>
            <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            <div className="tags">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        </Reveal>
      ))}
      <Reveal className="tl-item">
        <span className="tl-node"><Icon name="mortar" size={22} /></span>
        <div className="tl-card card">
          <div className="tl-head">
            <div><h3>{education.degree}</h3><p className="accent">{education.school}</p></div>
            <span className="chip">{education.period}</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function About() {
  return (
    <Page title="About">
      <section className="container about-hero">
        <div>
          <p className="eyebrow">About me</p>
          <SplitText as="h1" className="display" text="Hi, I’m Heherson." />
          <Reveal as="p" className="lede" delay={0.2}>
            A software engineer from Cebu who has spent seven years building HR portals, recruitment platforms, real-time boards,
            Android apps and enterprise data systems. Friends call me Coco.
          </Reveal>
          <Reveal className="about-facts" delay={0.3}>
            <span><Icon name="pin" size={18} /> {profile.location}</span>
            <span><Icon name="mortar" size={18} /> BS IT, University of Cebu</span>
            <span><Icon name="flask" size={18} /> IT Specialist @ Lear</span>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <TiltCard className="portrait" max={10}>
            <img src={photo} alt="Portrait of Heherson Amit" />
            <span className="portrait-badge"><span className="pulse-dot" /> {profile.available}</span>
          </TiltCard>
        </Reveal>
      </section>

      <section className="container statement">
        <ScrollWords text="I started with Windows Forms and SQL Server, fell for the web, and now build everything from Android apps to AI agents on Palantir Foundry. The tools change. The job — making work easier for the people on the other side of the screen — doesn’t." />
      </section>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <SplitText as="h2" className="h2" text="Where I’ve worked." />
        </div>
        <Timeline />
      </section>

      <section className="container values">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1}>
            <TiltCard className="card value">
              <span className="icon-badge"><Icon name={v.icon} size={28} /></span>
              <h3>{v.title}</h3><p>{v.text}</p>
            </TiltCard>
          </Reveal>
        ))}
      </section>
    </Page>
  );
}
