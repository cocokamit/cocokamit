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
      <div className="cover-icon"><Icon name={project.icon} size={88} /></div>
      {project.confidential && <span className="cover-badge"><Icon name="lock" size={14} /> Confidential — internal system</span>}
    </div>
  );
}
