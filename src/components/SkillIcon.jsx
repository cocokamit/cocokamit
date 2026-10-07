import {
  SiDotnet, SiTypescript, SiJavascript, SiReact, SiVite, SiSass, SiBootstrap, SiFramer, SiThreedotjs,
  SiPalantir, SiExpo, SiGit, SiAndroidstudio, SiSelenium, SiNextdotjs, SiNestjs, SiPostgresql, SiDocker,
  SiBlender, SiGreensock, SiFigma,
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandVisualStudio, TbBrandWindows, TbSql, TbBrandAzure, TbBroadcast } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { FaJava } from 'react-icons/fa6';
import { VscAzureDevops } from 'react-icons/vsc';
import Icon from './Icon';

// Custom glyphs for practices that have no brand logo.
const Agile = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v4h-4" /><circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);
const QA = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6Z" /><path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);
const Mindmap = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <circle cx="12" cy="12" r="3" /><circle cx="4" cy="5" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="20" cy="19" r="2" />
    <path d="m5.5 6.5 4.3 3.7M18.5 6.5l-4.3 3.7M5.5 17.5l4.3-3.7M18.5 17.5l-4.3-3.7" />
  </svg>
);

const map = {
  csharp: TbBrandCSharp, ts: SiTypescript, js: SiJavascript, java: FaJava, sql: TbSql,
  react: SiReact, vite: SiVite, sass: SiSass, bootstrap: SiBootstrap, framer: SiFramer, three: SiThreedotjs,
  dotnet: SiDotnet, windows: TbBrandWindows, signal: TbBroadcast, palantir: SiPalantir, mssql: DiMsqlServer, expo: SiExpo,
  azuredevops: VscAzureDevops, git: SiGit, vs: TbBrandVisualStudio, androidstudio: SiAndroidstudio, selenium: SiSelenium,
  agile: Agile, qa: QA, mindmap: Mindmap,
  next: SiNextdotjs, nest: SiNestjs, postgres: SiPostgresql, docker: SiDocker, azure: TbBrandAzure, ai: ({ size }) => <Icon name="brain" size={size} />,
  blender: SiBlender, gsap: SiGreensock, figma: SiFigma,
};

export const brand = {
  csharp: '#a179dc', ts: '#3178c6', js: '#f7df1e', java: '#f89820', sql: '#e38c00', react: '#61dafb', vite: '#a78bfa',
  sass: '#cc6699', bootstrap: '#8a5cf6', framer: '#0099ff', three: '#ffffff', dotnet: '#8f6ff0', windows: '#00a4ef',
  signal: '#00df9a', palantir: '#d1d5db', mssql: '#e2453c', expo: '#ffffff', azuredevops: '#2f8cf0', git: '#f05032',
  vs: '#a074c4', androidstudio: '#3ddc84', selenium: '#43b02a', agile: '#00df9a', qa: '#f472b6', mindmap: '#facc15',
  next: '#ffffff', nest: '#e0234e', postgres: '#4f8fd0', docker: '#2496ed', azure: '#0089d6', ai: '#d97757',
  blender: '#f5792a', gsap: '#88ce02', figma: '#a259ff',
};

export default function SkillIcon({ name, size = 28 }) {
  const C = map[name];
  if (!C) return <Icon name="spark" size={size} />;
  return <C size={size} width={size} height={size} aria-hidden="true" />;
}
