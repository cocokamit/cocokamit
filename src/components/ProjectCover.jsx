import Icon from './Icon';

// Screenshot cover, or a generated one for projects without public screenshots.
export default function ProjectCover({ project, index = 0, className = '' }) {
  const img = project.images[index];
  if (img) {
    return (
      <div className={`cover ${project.phone ? 'cover-phone' : 'cover-shot'} ${className}`} style={{ '--c': project.color }}>
        {project.phone ? (
          <div className="phone-frame"><img src={img} alt={`${project.title} screenshot`} loading="lazy" /></div>
        ) : (
          <div className="browser-frame">
            <div className="browser-bar"><i /><i /><i /></div>
            <img src={img} alt={`${project.title} screenshot`} loading="lazy" />
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={`cover cover-gen ${className}`} style={{ '--c': project.color }}>
      <div className="cover-grid" aria-hidden="true" />
      <div className="cover-glow" aria-hidden="true" />
      {project.confidential && (
        <div className="cover-mock" aria-hidden="true">
          <div className="mock-bar"><i /><i /><i /><span>{project.title}</span></div>
          <div className="mock-body">
            <div className="mock-side">{Array.from({ length: 6 }, (_, k) => <b key={k} />)}</div>
            <div className="mock-main">
              <div className="mock-kpis">{project.impact.map((m) => <span key={m.label}><strong>{m.value}</strong><em>{m.label}</em></span>)}</div>
              {Array.from({ length: 5 }, (_, k) => <div className="mock-row" key={k}><b /><b /><b /><i className={`st st-${k % 3}`} /></div>)}
            </div>
          </div>
        </div>
      )}
      <div className="cover-icon"><Icon name={project.icon} size={project.confidential ? 56 : 88} /></div>
      {project.confidential && <span className="cover-badge"><Icon name="lock" size={14} /> Confidential — internal system</span>}
    </div>
  );
}
