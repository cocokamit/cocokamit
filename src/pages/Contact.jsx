import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import Page from '../components/Page';
import { SplitText, Reveal, Magnetic, TiltCard } from '../components/Motion';
import Icon from '../components/Icon';
import { profile } from '../data/content';

// EmailJS keys from the previous version of this site (public by design).
const EMAILJS = { service: 'service_57d8cnp', template: 'template_598goas', key: 'TgxtXbowzJwaXRhR_' };
const types = ['Website', 'Web app', 'Mobile app', 'Enterprise system', 'Something else'];
const budgets = ['< ₱50k', '₱50k – 150k', '₱150k+', 'Let’s discuss'];

function CebuClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const id = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(id); }, []);
  return <span>{now.toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>;
}

export default function Contact() {
  const [type, setType] = useState(types[0]);
  const [budget, setBudget] = useState(budgets[3]);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* clipboard blocked */ }
  };

  const submit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const params = {
      from_name: f.get('name'),
      reply_to: f.get('email'),
      subject_text: `${type} · ${budget}`,
      message: f.get('message'),
    };
    setStatus('sending');
    try {
      await emailjs.send(EMAILJS.service, EMAILJS.template, params, { publicKey: EMAILJS.key });
      setStatus('sent');
      e.target.reset();
    } catch {
      setStatus('failed');
      const body = encodeURIComponent(`${params.message}\n\n— ${params.from_name} (${params.reply_to})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(params.subject_text)}&body=${body}`;
    }
  };

  return (
    <Page title="Contact">
      <section className="container page-head">
        <p className="eyebrow"><span className="pulse-dot" /> {profile.available}</p>
        <SplitText as="h1" className="display" text="Let’s make something." />
        <Reveal as="p" className="lede" delay={0.2}>Tell me about your idea. I usually reply within a day.</Reveal>
      </section>

      <section className="container contact">
        <Reveal>
          <form className="card form" onSubmit={submit}>
            <fieldset>
              <legend>What are we building?</legend>
              <div className="choices">
                {types.map((t) => (
                  <button type="button" key={t} className={t === type ? 'active' : ''} onClick={() => setType(t)} aria-pressed={t === type}>{t}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Budget</legend>
              <div className="choices">
                {budgets.map((b) => (
                  <button type="button" key={b} className={b === budget ? 'active' : ''} onClick={() => setBudget(b)} aria-pressed={b === budget}>{b}</button>
                ))}
              </div>
            </fieldset>
            <div className="field-row">
              <label className="field"><input name="name" required placeholder=" " autoComplete="name" /><span>Your name</span></label>
              <label className="field"><input name="email" type="email" required placeholder=" " autoComplete="email" /><span>Email</span></label>
            </div>
            <label className="field"><textarea name="message" rows="5" required placeholder=" " /><span>Tell me about the project</span></label>
            <Magnetic>
              <button className="btn btn-primary" disabled={status === 'sending'} data-cursor="Send">
                {status === 'sending' ? 'Sending…' : 'Send message'} <Icon name="arrow" size={18} />
              </button>
            </Magnetic>
            <AnimatePresence>
              {status === 'sent' && <motion.p className="form-note ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><Icon name="check" size={18} /> Sent! I’ll get back to you soon.</motion.p>}
              {status === 'failed' && <motion.p className="form-note" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>Couldn’t send from here, so I opened your email app instead.</motion.p>}
            </AnimatePresence>
          </form>
        </Reveal>

        <div className="contact-side">
          <Reveal delay={0.1}>
            <TiltCard className="card contact-card">
              <small>Email</small>
              <a href={`mailto:${profile.email}`} className="big-link">{profile.email}</a>
              <button className="btn btn-ghost sm" onClick={copy} data-cursor={copied ? 'Copied!' : 'Copy'}>
                <Icon name={copied ? 'check' : 'copy'} size={16} /> {copied ? 'Copied' : 'Copy email'}
              </button>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.15}>
            <TiltCard className="card contact-card">
              <small>Local time in Cebu</small>
              <span className="big-link mono"><CebuClock /></span>
              <span className="muted">GMT+8 · {profile.phone}</span>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.2} className="contact-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" className="card" data-cursor="GitHub"><SiGithub size={26} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="card" data-cursor="LinkedIn"><FaLinkedin size={26} /> LinkedIn</a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="card" data-cursor="PDF"><Icon name="download" size={26} /> Résumé</a>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
