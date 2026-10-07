import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { profile } from '../data/content';
import { Magnetic } from './Motion';
import Icon from './Icon';
import { routes } from './Nav';

function SpringyWord({ text }) {
  return (
    <span className="springy" aria-label={text}>
      {text.split('').map((c, i) => (
        <motion.span key={i} aria-hidden="true" whileHover={{ y: -18, rotate: i % 2 ? 8 : -8, color: 'var(--accent)' }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          {c === ' ' ? ' ' : c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="eyebrow">Have a project in mind?</p>
        <h2 className="footer-title"><SpringyWord text="Let’s build it." /></h2>
        <div className="footer-cta">
          <Magnetic strength={0.5}>
            <Link to="/contact" className="orb" data-cursor="Go">
              <Icon name="arrow" size={34} />
            </Link>
          </Magnetic>
          <a className="footer-mail" href={`mailto:${profile.email}`} data-cursor="Email">{profile.email}</a>
        </div>
        <div className="footer-grid">
          <nav aria-label="Footer">
            {routes.map((r) => <Link key={r.to} to={r.to}>{r.label}</Link>)}
          </nav>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-cursor="GitHub"><SiGithub size={22} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor="LinkedIn"><FaLinkedin size={22} /></a>
            <a href={profile.resume} target="_blank" rel="noreferrer" aria-label="Résumé" data-cursor="CV"><Icon name="download" size={22} /></a>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, Three.js & Framer Motion · {profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
