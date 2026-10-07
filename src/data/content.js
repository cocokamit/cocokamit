// Every word on the site lives in this file. Edit freely — components read from here.

import hrisHome from '../assets/work/hris/homepage.webp';
import hrisDash from '../assets/work/hris/admin-dashboard.webp';
import hrisId from '../assets/work/hris/employee-identity.webp';
import hrisLogin from '../assets/work/hris/cli-login.webp';
import hrisMobile from '../assets/work/hris/dashboard.webp';
import recRecruits from '../assets/work/recruitment/recruits.webp';
import recApplicant from '../assets/work/recruitment/applicant-info.webp';
import recReference from '../assets/work/recruitment/reference.webp';
import recManpower from '../assets/work/recruitment/manpower-request.webp';
import gfScreen from '../assets/work/gamefowl/screen.webp';
import gfAgent from '../assets/work/gamefowl/agent-view.webp';
import gfLogin from '../assets/work/gamefowl/login.webp';
import gfMonton from '../assets/work/gamefowl/monton.webp';
import gfDirector from '../assets/work/gamefowl/director.webp';
import nimsHome from '../assets/work/nims/home.webp';
import nimsInfo from '../assets/work/nims/info.webp';
import nimsPet from '../assets/work/nims/pet-info.webp';
import nimsSearch from '../assets/work/nims/search.webp';
import nimsLogin from '../assets/work/nims/login.webp';
import triAgent from '../assets/work/tricoins/agent-view.webp';
import triStats from '../assets/work/tricoins/admin-statistics.webp';
import triWin from '../assets/work/tricoins/admin-winning.webp';
import triNav from '../assets/work/tricoins/admin-nav.webp';
import amsRun from '../assets/work/ams/running-app-ams.webp';
import amsDesign from '../assets/work/ams/ams-design.webp';
import amsChoose from '../assets/work/ams/choosing.webp';
import pulse1a from '../assets/work/pulse-v1/1.webp';
import pulse1b from '../assets/work/pulse-v1/2.webp';
import pulse1c from '../assets/work/pulse-v1/3.webp';
import pulse1d from '../assets/work/pulse-v1/4.webp';
import pulse2a from '../assets/work/pulse-v2/1.webp';
import pulse2b from '../assets/work/pulse-v2/2.webp';
import pulse2c from '../assets/work/pulse-v2/3.webp';
import pulse2d from '../assets/work/pulse-v2/4.webp';
import weber1 from '../assets/work/weberson/1.webp';
import weber2 from '../assets/work/weberson/2.webp';
import weber3 from '../assets/work/weberson/3.webp';
import weber4 from '../assets/work/weberson/4.webp';

export const profile = {
  name: 'Heherson A. Amit',
  short: 'Heherson',
  handle: 'cocokamit',
  role: 'Software Engineer & Web Developer',
  location: 'Cebu, Philippines',
  email: 'cocokamit@gmail.com',
  phone: '+63 931 027 8248',
  linkedin: 'https://www.linkedin.com/in/heherson-amit-it',
  github: 'https://github.com/cocokamit',
  resume: '/Heherson_Amit_Resume.pdf',
  available: 'Open to freelance web projects',
  intro:
    'I build web, desktop and mobile systems that real teams use every day — from HR portals and recruitment platforms to an enterprise chemical-management system that saved $1.5M in its first year.',
  statement:
    'Seven years of shipping software for factories, hotels, developers and shipyards taught me one thing: the best interface is the one people stop noticing because it simply works.',
};

export const stats = [
  { value: 7, suffix: '+', label: 'Years shipping software' },
  { value: 1.5, prefix: '$', suffix: 'M', decimals: 1, label: 'Saved in year one at Lear' },
  { value: 15, suffix: '+', label: 'Systems built & deployed' },
  { value: 10, suffix: '+', label: 'Clients & companies served' },
];

// Text wordmarks only (no trademarked logos).
export const clients = [
  'Lear Corporation',
  'NPAX Cebu',
  'Mesh Networks',
  'Cebu Landmasters',
  'Two Futures Inc.',
  'Wingers',
  'Mövenpick',
  'Tsuneishi Shipbuilding',
  'Gateway',
  'University of Cebu',
];

export const experience = [
  {
    role: 'IT Specialist',
    company: 'Lear Corporation LPEB',
    period: '2023 — Present',
    icon: 'flask',
    points: [
      'Pioneered an enterprise Chemical Management System on Palantir Foundry, automating Safety Data Sheet workflows for EHS — $1.5M in operational savings in the first year.',
      'Built an AI agent bot for reporting and standardized the annual chemical inventory declaration across all sites globally.',
      'Developed in-house automotive compliance apps — the PPAP Operation Database and IMDS Solutions Central — on ASP.NET Core and SQL Server.',
      'Partnered with a C# ASP.NET team to architect and deploy modules across three workstreams.',
      'Manages Azure DevOps for the team and writes SRS / FRD documentation that keeps pace with Agile releases.',
    ],
    tags: ['Palantir Foundry', 'AI agents', 'ASP.NET Core', 'PPAP / IMDS', 'Azure DevOps'],
  },
  {
    role: 'Instructor (Part-time)',
    company: 'University of Cebu — Lapu-Lapu & Mandaue',
    period: '2024',
    icon: 'mortar',
    points: [
      'Taught Software Quality Assurance and Testing with industry-aligned lectures.',
      'Used mind mapping to teach structured test-case design and requirement traceability.',
      'Instructed automated testing with Selenium, focusing on framework architecture and script maintenance.',
    ],
    tags: ['QA', 'Selenium', 'Mind mapping'],
  },
  {
    role: 'Software Engineer',
    company: 'NPAX Cebu Corporation',
    period: '2022 — 2023',
    icon: 'gear',
    points: [
      'Designed and developed an integrated ERP, Accounting and Inventory system used across NPAX client companies.',
      'Shipped desktop (C# Windows Forms) and Android (Java) applications for multiple clients.',
      'Planned and ran UAT so every release was proven before it reached users.',
    ],
    tags: ['C#', 'WinForms', 'DevExpress', 'Android', 'ERP'],
  },
  {
    role: 'Web Developer',
    company: 'Mesh Networks Inc.',
    period: '2019 — 2022',
    icon: 'mesh',
    points: [
      'Built full-stack apps with ASP.NET, Windows Forms, Android (Java) and MS SQL Server.',
      'Core contributor to HUMAN HRIS and solo lead on Online Recruitment, Orange Gamefowl, NIMS and Tricoins.',
      'Met clients on-site, gathered requirements, presented solutions and wrote the user manuals.',
    ],
    tags: ['ASP.NET', 'SQL Server', 'Java', 'SignalR'],
  },
];

export const education = {
  degree: 'BS Information Technology',
  school: 'University of Cebu — Lapu-Lapu & Mandaue',
  period: '2015 — 2019',
};

// icon keys map to react-icons in components/SkillIcon.jsx
export const skillGroups = [
  {
    title: 'Languages',
    blurb: 'What I think in.',
    items: [
      { name: 'C#', icon: 'csharp', level: 95 },
      { name: 'TypeScript', icon: 'ts', level: 80 },
      { name: 'JavaScript', icon: 'js', level: 85 },
      { name: 'Java (Android)', icon: 'java', level: 80 },
      { name: 'SQL', icon: 'sql', level: 90 },
    ],
  },
  {
    title: 'Web & Frontend',
    blurb: 'Interfaces people enjoy.',
    items: [
      { name: 'React', icon: 'react', level: 80 },
      { name: 'Vite', icon: 'vite', level: 75 },
      { name: 'SCSS', icon: 'sass', level: 85 },
      { name: 'Bootstrap', icon: 'bootstrap', level: 90 },
      { name: 'Framer Motion', icon: 'framer', level: 70 },
      { name: 'Three.js', icon: 'three', level: 55 },
    ],
  },
  {
    title: 'Backend & Platforms',
    blurb: 'Where the work gets done.',
    items: [
      { name: 'ASP.NET Core', icon: 'dotnet', level: 92 },
      { name: 'Windows Forms', icon: 'windows', level: 92 },
      { name: 'SignalR', icon: 'signal', level: 75 },
      { name: 'Palantir Foundry', icon: 'palantir', level: 88 },
      { name: 'MS SQL Server', icon: 'mssql', level: 90 },
      { name: 'React Native / Expo', icon: 'expo', level: 65 },
    ],
  },
  {
    title: 'Tools & Delivery',
    blurb: 'How it ships safely.',
    items: [
      { name: 'Azure DevOps', icon: 'azuredevops', level: 88 },
      { name: 'Git', icon: 'git', level: 88 },
      { name: 'Visual Studio', icon: 'vs', level: 95 },
      { name: 'Android Studio', icon: 'androidstudio', level: 82 },
      { name: 'Selenium', icon: 'selenium', level: 80 },
      { name: 'Agile / Scrum', icon: 'agile', level: 90 },
      { name: 'UAT & QA', icon: 'qa', level: 90 },
      { name: 'Mind mapping', icon: 'mindmap', level: 85 },
    ],
  },
];

export const projects = [
  {
    slug: 'chemical-management-system',
    featured: true,
    title: 'Chemical Management System',
    client: 'Lear Corporation',
    year: '2023 — now',
    kind: 'Enterprise platform',
    color: '#00df9a',
    icon: 'flask',
    summary:
      'A global platform on Palantir Foundry that automates Safety Data Sheet workflows, chemical approvals and annual inventory declarations for EHS teams.',
    impact: [
      { value: '$1.5M', label: 'saved in year one' },
      { value: 'Global', label: 'sites on one source of truth' },
      { value: 'AI', label: 'agent bot for reporting' },
    ],
    stack: ['Palantir Foundry', 'TypeScript', 'AI agents', 'Azure DevOps'],
    story: [
      'Chemical approvals used to move by email and spreadsheet. Each site kept its own copy of the truth, and finding a current SDS took longer than it should.',
      'I designed the ontology, approval pipelines and dashboards in Foundry so a request flows from submission to EHS sign-off in one place. An AI agent bot drafts every form of reporting, and the annual inventory declaration is standardized across sites.',
    ],
    confidential: true,
    images: [],
  },
  {
    slug: 'ppap-operation-database',
    title: 'PPAP Operation Database',
    client: 'Lear Corporation',
    year: '2023 — now',
    kind: 'Enterprise web app',
    color: '#60a5fa',
    icon: 'clipboard',
    summary:
      'The in-house system of record for the Production Part Approval Process — every automotive part submission, its required elements, owners, due dates and approval status in one place.',
    impact: [
      { value: '1', label: 'source of truth for PPAP' },
      { value: 'Live', label: 'status per part & customer' },
      { value: 'Audit', label: 'ready document trail' },
    ],
    stack: ['ASP.NET Core', 'C#', 'MS SQL Server', 'MaterialPro', 'jQuery'],
    story: [
      'Before a car part can ship to an automaker it has to pass PPAP: a package of evidence such as the Part Submission Warrant, control plan, PFMEA, dimensional results and material certifications. Tracking those packages across programs, plants and customers in spreadsheets made it hard to see what was missing or late.',
      'The PPAP Operation Database gives engineering and quality teams one workspace. Each part number carries its submission level, required elements, responsible owners, due dates and customer approval status, with dashboards that surface overdue items before they block a launch.',
      'I built it on ASP.NET Core with SQL Server, using the MaterialPro admin template and jQuery for fast, familiar screens: searchable tables, filters, document uploads and role-based access.',
    ],
    confidential: true,
    images: [],
  },
  {
    slug: 'imds-solutions-central',
    title: 'IMDS Solutions Central',
    client: 'Lear Corporation',
    year: '2023 — now',
    kind: 'Enterprise web app',
    color: '#2dd4bf',
    icon: 'atom',
    summary:
      'A central hub for IMDS material-data compliance: it tracks the Material Data Sheets behind every automotive part, from supplier request to customer acceptance.',
    impact: [
      { value: 'Central', label: 'IMDS request tracking' },
      { value: 'Admin', label: 'console for compliance team' },
      { value: 'Clear', label: 'status from supplier to OEM' },
    ],
    stack: ['ASP.NET Core', 'C#', 'MS SQL Server', 'Admin dashboard', 'jQuery'],
    story: [
      'Automakers require a Material Data Sheet in the International Material Data System (IMDS) for every part, declaring what it is made of down to the substance level, so restricted and declarable substances can be controlled. Each finished part depends on MDS submissions from many suppliers.',
      'IMDS Solutions Central brings that work into one place. The compliance team logs requests, follows each part’s supplier submissions and customer acceptance or rejection, and sees at a glance which parts are still blocking a submission.',
      'It runs on ASP.NET Core and SQL Server with an admin console for managing users, suppliers, parts and statuses, and jQuery-powered tables for searching and bulk updates.',
    ],
    confidential: true,
    images: [],
  },
  {
    slug: 'erp-accounting-inventory',
    title: 'ERP + Accounting + Inventory',
    client: 'NPAX Cebu Corporation',
    year: '2022 — 2023',
    kind: 'Enterprise desktop & mobile',
    color: '#fbbf24',
    icon: 'ledger',
    summary:
      'An integrated business suite for NPAX clients: purchasing, sales, accounting and multi-warehouse inventory on a C# desktop app, with Android handhelds for work on the floor.',
    impact: [
      { value: '3-in-1', label: 'ERP, accounting & inventory' },
      { value: '2', label: 'platforms: desktop + Android' },
      { value: 'UAT', label: 'proven before every release' },
    ],
    stack: ['C# Windows Forms', 'DevExpress', 'Java (Android)', 'MS SQL Server', 'REST API', 'jQuery'],
    story: [
      'Clients ran purchasing, sales, books and stock in separate tools, so the numbers never matched at month-end. The suite connects them: a purchase order becomes a receipt, then stock on hand, then a payable; a sale reduces inventory and posts to the ledger automatically.',
      'The desktop client is C# Windows Forms with DevExpress grids, reports and dashboards for heavy data entry. Android handhelds talk to the same SQL Server through a REST API for stock counts, receiving and transfers, and lightweight jQuery web pages cover quick lookups.',
      'I designed and built modules across all three areas, ran UAT with each client before release, and handled the support, debugging and documentation after go-live.',
    ],
    confidential: true,
    images: [],
  },
  {
    slug: 'human-hris',
    featured: true,
    title: 'HUMAN HRIS',
    client: 'Mesh Networks · Cebu Landmasters (myCLI)',
    year: '2019 — 2022',
    kind: 'Web application',
    color: '#4ade80',
    icon: 'people',
    repo: 'HUMANHRIS',
    summary:
      'A Human Resource Information System with employee self-service, leave management, approvers, payroll identity and greeting automation.',
    impact: [
      { value: 'Less', label: 'manual data entry' },
      { value: '1', label: 'portal for every employee' },
      { value: 'Auto', label: 'birthday & anniversary greetings' },
    ],
    stack: ['ASP.NET Web Forms', 'C#', 'MS SQL Server', 'Bootstrap'],
    story: [
      'HR teams were re-typing the same employee data into several spreadsheets. HUMAN HRIS gave them one portal for identity, leave, approvals and announcements.',
      'I worked on the employee-facing dashboard, leave loading and approver flows, templates and the automated greetings module.',
    ],
    images: [hrisHome, hrisDash, hrisId, hrisMobile, hrisLogin],
  },
  {
    slug: 'online-recruitment',
    featured: true,
    title: 'HUMAN Online Recruitment',
    client: 'Mesh Networks',
    year: '2020 — 2021',
    kind: 'Web platform',
    color: '#f472b6',
    icon: 'magnet',
    repo: 'Recruitment',
    summary:
      'A customizable recruitment platform: manpower requests, applicant profiles, exams, references and captcha-protected sign-up.',
    impact: [
      { value: 'Faster', label: 'hiring workflow' },
      { value: 'Custom', label: 'flows per business' },
      { value: 'Solo', label: 'end-to-end build' },
    ],
    stack: ['ASP.NET Web Forms', 'C#', 'MS SQL Server', 'jQuery'],
    story: [
      'Recruiters and applicants talked past each other in the first phase of hiring. The platform puts manpower requests, applications, examinations and reference checks in one shared timeline.',
      'I led it alone from requirements to deployment, including the image-crop upload, captcha and email notifications.',
    ],
    images: [recRecruits, recApplicant, recReference, recManpower],
  },
  {
    slug: 'orange-gamefowl',
    featured: true,
    title: 'Orange Gamefowl',
    client: 'Mesh Networks',
    year: '2021',
    kind: 'Real-time web system',
    color: '#fb923c',
    icon: 'bolt',
    repo: 'OrangeGamefowl',
    summary:
      'A live arena management system with real-time match boards, agent consoles and a director control panel powered by SignalR.',
    impact: [
      { value: 'Real-time', label: 'SignalR updates' },
      { value: '3', label: 'roles: director, agent, admin' },
      { value: 'Live', label: 'match board & reports' },
    ],
    stack: ['ASP.NET', 'SignalR', 'C#', 'MS SQL Server'],
    story: [
      'Every second counts on a live board. The director opens and closes rounds, and every agent screen and public display updates instantly over SignalR.',
      'I tuned the queries and hub messages so the board stays responsive with many agents online.',
    ],
    images: [gfScreen, gfAgent, gfMonton, gfDirector, gfLogin],
  },
  {
    slug: 'nims',
    featured: true,
    title: 'NIMS',
    client: 'National Integrated Microchip System',
    year: '2021',
    kind: 'Android app',
    color: '#38bdf8',
    icon: 'chip',
    repo: 'NIMS',
    phone: true,
    summary:
      'An Android inventory system for veterinarians to register pets, assign microchips and look up owners in seconds.',
    impact: [
      { value: 'Fewer', label: 'manual tracking errors' },
      { value: 'Instant', label: 'microchip lookup' },
      { value: 'Field', label: 'ready for clinics' },
    ],
    stack: ['Java', 'Android', 'REST API', 'MS SQL Server'],
    story: [
      'Vets tracked microchips on paper. NIMS lets them register a pet, attach its chip and search the national list from a phone.',
    ],
    images: [nimsHome, nimsPet, nimsSearch, nimsInfo, nimsLogin],
  },
  {
    slug: 'tricoins',
    title: 'Tricoins',
    client: 'Mesh Networks',
    year: '2021',
    kind: 'Android app',
    color: '#a78bfa',
    icon: 'coins',
    repo: 'Tricoins',
    phone: true,
    summary:
      'A distributed data-collection app for field agents with encrypted sync, statistics dashboards and Bluetooth receipt printing.',
    impact: [
      { value: 'Many', label: 'agents in sync' },
      { value: 'Charts', label: 'per-agent statistics' },
      { value: 'BT', label: 'thermal receipt printing' },
    ],
    stack: ['Java', 'Android', 'MPAndroidChart', 'Printooth'],
    story: [
      'Agents in the field recorded entries on paper and reported at day’s end. Tricoins syncs every entry, prints a receipt over Bluetooth and gives admins live statistics.',
    ],
    images: [triAgent, triStats, triWin, triNav],
  },
  {
    slug: 'ams',
    title: 'AMS — Attendance',
    client: 'Mesh Networks',
    year: '2022',
    kind: 'Desktop app',
    color: '#facc15',
    icon: 'finger',
    repo: 'AMS',
    summary:
      'A Windows attendance manager that connects to ZKTeco biometric devices, pulls logs by branch and date and syncs users.',
    impact: [
      { value: 'Biometric', label: 'device integration' },
      { value: 'Multi', label: 'branch log pulls' },
      { value: 'Zero', label: 'manual time sheets' },
    ],
    stack: ['C#', 'Windows Forms', 'zkemkeeper SDK', 'SQL Server'],
    story: ['Pulls attendance logs straight from fingerprint terminals and hands HR a clean range to process — no more copying from device screens.'],
    images: [amsRun, amsDesign, amsChoose],
  },
  {
    slug: 'subscription-tracker',
    title: 'Subscription Tracker',
    client: 'Personal product',
    year: '2026',
    kind: 'Cross-platform app',
    color: '#22d3ee',
    icon: 'radar',
    repo: 'Subscription-tracker',
    summary:
      'Finds every recurring subscription hiding in your Gmail inboxes — iOS, Android and web from one Expo codebase. Private by design: no backend.',
    impact: [
      { value: '3', label: 'platforms, one codebase' },
      { value: '0', label: 'servers — on-device parsing' },
      { value: 'Multi', label: 'Gmail accounts merged' },
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Gmail API', 'Vitest'],
    story: [
      'Scans receipts, renewals and trial emails from the last 13 months, detects merchant, price and billing cycle, then predicts the next renewal.',
    ],
    images: [],
  },
  {
    slug: 'pulse-v1',
    featured: true,
    title: 'Pulse — Marketing Command Center',
    client: 'Marketing app · v1',
    year: '2026',
    kind: 'React web app',
    color: '#d9f99d',
    icon: 'pulse',
    repo: 'Marketing-v1',
    summary:
      'A loud, Awwwards-style marketing management app: plan, launch and measure campaigns across social, email, search, video and events on one living board.',
    impact: [
      { value: 'CRUD', label: 'campaigns saved locally' },
      { value: 'Pinned', label: 'scroll-driven funnel' },
      { value: 'DnD', label: 'content calendar (mouse & touch)' },
    ],
    stack: ['React', 'Vite', 'Framer Motion', 'Lenis'],
    story: [
      'Pulse treats a marketing dashboard like a product launch page. The hero has masked line reveals, a pointer-chasing gradient blob and a 3D tilt card; a ticker reacts to scroll velocity; KPIs count up and sparklines draw themselves.',
      'Under the motion it is a working tool: create, edit, pause and delete campaigns with search and filters, follow a pinned funnel where vertical scroll drives a horizontal track, compare channels on linked bar and donut charts, and drag posts between days on the content calendar.',
      'Global touches include a preloader curtain, a blend-mode cursor with contextual labels, magnetic buttons, nav text scramble, film grain and a circular-reveal mobile menu — all switched off for prefers-reduced-motion.',
    ],
    images: [pulse1a, pulse1b, pulse1c, pulse1d],
  },
  {
    slug: 'pulse-v2',
    title: 'Pulse v2 — Marketing, quietly',
    client: 'Marketing app · v2',
    year: '2026',
    kind: 'React web app',
    color: '#e5e7eb',
    icon: 'pulse',
    repo: 'Marketing-v2',
    summary:
      'The same marketing app, redesigned minimal: every feature from v1 with far less visual noise, light and dark themes, and calm tables that stack on phones.',
    impact: [
      { value: 'Same', label: 'features as v1' },
      { value: '2', label: 'themes, follows the system' },
      { value: 'Calm', label: 'one typeface, hairline UI' },
    ],
    stack: ['React', 'Vite', 'Framer Motion'],
    story: [
      'v2 is an exercise in restraint. I removed the preloader, custom cursor, grain, marquee, tilt and pinned scroll, and kept one typeface, hairline borders, a muted channel palette and short fade-and-rise reveals.',
      'Nothing was lost functionally: campaigns, the funnel, channel isolation, the drag-and-drop calendar and team cards all remain, and the campaign table becomes stacked rows and the modal a bottom sheet on phones.',
    ],
    images: [pulse2a, pulse2b, pulse2c, pulse2d],
  },
  {
    slug: 'weberson',
    title: 'Weberson',
    client: 'My web studio',
    year: '2026',
    kind: 'Marketing site',
    color: '#f59e0b',
    icon: 'compass',
    repo: 'Weberson',
    summary:
      'The marketing site for my freelance web studio — an ink-drop cursor, self-drawing process timeline and a contact “project builder”.',
    impact: [
      { value: '8', label: 'social assets rendered' },
      { value: '20s', label: 'promo reel from code' },
      { value: 'Any', label: 'device, any screen' },
    ],
    stack: ['React', 'Vite', 'Playwright', 'ffmpeg'],
    story: [
      'Weberson is how I offer websites to small businesses, restaurants and creators. The palette is cream, deep green, terracotta and sage, with a custom “ink drop” pointer that stretches as it moves and becomes a label over buttons.',
      'Even the social posts and the promo reel are generated from HTML with Playwright and ffmpeg, so the brand stays in code.',
    ],
    images: [weber1, weber2, weber3, weber4],
  },
];

export const future = {
  intro:
    'Where I’m heading next: from building systems for companies to building products and helping small businesses in Cebu and beyond look world-class online.',
  roadmap: [
    {
      when: 'Q4 2026',
      title: 'Launch Weberson studio',
      text: 'Open bookings for websites for small businesses, restaurants and creators — fast, accessible and built by hand.',
      icon: 'rocket',
    },
    {
      when: 'Q1 2027',
      title: 'Ship Subscription Tracker to the stores',
      text: 'Publish on Google Play and the App Store, add budgets, renewal reminders and shared family plans.',
      icon: 'radar',
    },
    {
      when: '2027',
      title: 'Certify in the cloud',
      text: 'Azure Developer (AZ-204) then Solutions Architect (AZ-305) to design systems end-to-end, not just modules.',
      icon: 'cloud',
    },
    {
      when: '2027 — 2028',
      title: 'AI-native enterprise tools',
      text: 'Bring what I learned with Foundry agents to smaller teams: compliance assistants, document parsing, RAG over SOPs.',
      icon: 'brain',
    },
    {
      when: '2028+',
      title: 'Mentor & teach again',
      text: 'A free QA + web workshop series for IT students in Cebu — the classroom was too fun to leave.',
      icon: 'mortar',
    },
  ],
  projects: [
    {
      title: 'Weberson Kits',
      text: 'Ready-to-launch site templates for Filipino SMEs with booking, menus and GCash-friendly payment flows.',
      status: 'Designing',
      icon: 'compass',
    },
    {
      title: 'SDS Copilot',
      text: 'An AI assistant that reads Safety Data Sheets and answers “can I store these two together?” — for smaller factories.',
      status: 'Researching',
      icon: 'flask',
    },
    {
      title: 'Open HRIS Lite',
      text: 'A modern, open-source rebuild of HRIS lessons in .NET 9 + React for small companies that can’t afford enterprise HR.',
      status: 'Planning',
      icon: 'people',
    },
    {
      title: '3D Showroom',
      text: 'A WebGL product showroom for local developers and resorts — walk a condo or a hotel room in the browser.',
      status: 'Prototyping',
      icon: 'cube',
    },
  ],
  skills: [
    { name: 'Next.js', icon: 'next', progress: 45 },
    { name: 'Node.js / NestJS', icon: 'nest', progress: 35 },
    { name: 'PostgreSQL', icon: 'postgres', progress: 40 },
    { name: 'Docker & Kubernetes', icon: 'docker', progress: 30 },
    { name: 'Azure Architecture', icon: 'azure', progress: 50 },
    { name: 'LLM & AI agents', icon: 'ai', progress: 60 },
    { name: 'Three.js / WebGL', icon: 'three', progress: 55 },
    { name: 'Blender', icon: 'blender', progress: 20 },
    { name: 'GSAP', icon: 'gsap', progress: 35 },
    { name: 'Figma', icon: 'figma', progress: 50 },
  ],
};
