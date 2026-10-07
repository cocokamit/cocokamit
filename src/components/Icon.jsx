// Hand-drawn duotone icon set. Stroke uses currentColor, fill uses the accent tint.
const paths = {
  flask: (
    <>
      <path className="fill" d="M7 14h10l3 5.5A1.6 1.6 0 0 1 18.6 22H5.4A1.6 1.6 0 0 1 4 19.5Z" />
      <path d="M9 3h6M10 3v6.5L4 19.5A1.6 1.6 0 0 0 5.4 22h13.2a1.6 1.6 0 0 0 1.4-2.5L14 9.5V3" />
      <circle cx="10" cy="17.5" r="1" /><circle cx="14" cy="15.5" r=".6" />
    </>
  ),
  mortar: (
    <>
      <path className="fill" d="m12 4 10 5-10 5L2 9Z" />
      <path d="m12 4 10 5-10 5L2 9Z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </>
  ),
  gear: (
    <>
      <circle className="fill" cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  mesh: (
    <>
      <path className="fill" d="m12 3 8 5v8l-8 5-8-5V8Z" />
      <path d="m12 3 8 5v8l-8 5-8-5V8ZM12 3v18M4 8l16 8M20 8 4 16" />
    </>
  ),
  people: (
    <>
      <circle className="fill" cx="9" cy="8" r="4" />
      <circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c.8-3.4 3.4-5.5 6.5-5.5s5.7 2.1 6.5 5.5" />
      <path d="M16 4.6a3.2 3.2 0 0 1 0 6.3M18 14.8c1.8.8 3 2.6 3.5 5.2" />
    </>
  ),
  magnet: (
    <>
      <path className="fill" d="M4 4h5v4H4zM15 4h5v4h-5z" />
      <path d="M4 4h5v8a3 3 0 0 0 6 0V4h5v8a8 8 0 0 1-16 0ZM4 8h5M15 8h5" />
    </>
  ),
  bolt: (
    <>
      <path className="fill" d="M13 2 4 14h7l-1 8 9-12h-7Z" />
      <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />
    </>
  ),
  chip: (
    <>
      <rect className="fill" x="6" y="6" width="12" height="12" rx="2" />
      <rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  coins: (
    <>
      <ellipse className="fill" cx="9" cy="7" rx="6" ry="3" />
      <ellipse cx="9" cy="7" rx="6" ry="3" /><path d="M3 7v5c0 1.7 2.7 3 6 3M15 7v2" />
      <ellipse cx="15" cy="14" rx="6" ry="3" /><path d="M9 14v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
    </>
  ),
  finger: (
    <>
      <path className="fill" d="M12 4a7 7 0 0 1 7 7v2H5v-2a7 7 0 0 1 7-7Z" />
      <path d="M5 11a7 7 0 0 1 14 0M8 11a4 4 0 0 1 8 0v3M12 11v5c0 2 1 4 2 5M8 14c0 3 1 5 2.5 7M16 17c0 1.5.3 2.5.8 3.5M5 15c.3 2 1 3.5 2 5" />
    </>
  ),
  radar: (
    <>
      <path className="fill" d="M12 12 19 5a10 10 0 0 0-7-3Z" />
      <circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="12" r="5.5" /><path d="m12 12 7-7" />
      <circle cx="15.5" cy="15" r="1.2" />
    </>
  ),
  pulse: (
    <>
      <rect className="fill" x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 12h4l2-5 4 10 2-5h8" />
    </>
  ),
  compass: (
    <>
      <path className="fill" d="m15.5 8.5-2 5-5 2 2-5Z" />
      <circle cx="12" cy="12" r="9.5" /><path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </>
  ),
  rocket: (
    <>
      <path className="fill" d="M12 2c3 2 5 6 5 10l-2 4H9l-2-4c0-4 2-8 5-10Z" />
      <path d="M12 2c3 2 5 6 5 10l-2 4H9l-2-4c0-4 2-8 5-10ZM7 12l-3 3 1 4 4-3M17 12l3 3-1 4-4-3M10 19l2 3 2-3" />
      <circle cx="12" cy="9" r="1.6" />
    </>
  ),
  cloud: (
    <>
      <path className="fill" d="M7 19a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 19 10a4.5 4.5 0 0 1-1 9Z" />
      <path d="M7 19a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 19 10a4.5 4.5 0 0 1-1 9Z" />
    </>
  ),
  brain: (
    <>
      <path className="fill" d="M12 5a3.5 3.5 0 0 0-6.5 1.5A3.5 3.5 0 0 0 4 13a3.5 3.5 0 0 0 4 6 3 3 0 0 0 4-1Z" />
      <path d="M12 5v13M12 5a3.5 3.5 0 0 0-6.5 1.5A3.5 3.5 0 0 0 4 13a3.5 3.5 0 0 0 4 6 3 3 0 0 0 4-1M12 5a3.5 3.5 0 0 1 6.5 1.5A3.5 3.5 0 0 1 20 13a3.5 3.5 0 0 1-4 6 3 3 0 0 1-4-1M8 9.5h1.5M14.5 12H16M8 14h1.5" />
    </>
  ),
  cube: (
    <>
      <path className="fill" d="m12 12 8-4.5v9L12 21Z" />
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9ZM12 12l8-4.5M12 12 4 7.5M12 12v9" />
    </>
  ),
  ledger: (
    <>
      <path className="fill" d="M5 3h11l3 3v15H5Z" />
      <path d="M5 3h11l3 3v15H5ZM16 3v3h3M8.5 10h7M8.5 13.5h7M8.5 17h4" />
    </>
  ),
  clipboard: (
    <>
      <rect className="fill" x="4.5" y="4.5" width="15" height="17" rx="2.5" />
      <rect x="4.5" y="4.5" width="15" height="17" rx="2.5" /><rect x="8.5" y="2.5" width="7" height="4" rx="1.2" />
      <path d="m8.5 14 2.5 2.5 4.5-5" />
    </>
  ),
  atom: (
    <>
      <circle className="fill" cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-60 12 12)" />
    </>
  ),
  arrow: <path d="M5 19 19 5M8 5h11v11" />,
  back: <path d="M19 12H5M11 6l-6 6 6 6" />,
  mail: (
    <>
      <rect className="fill" x="2.5" y="5" width="19" height="14" rx="2.5" />
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="m3 7 9 6 9-6" />
    </>
  ),
  download: <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />,
  copy: (
    <>
      <rect className="fill" x="8" y="8" width="13" height="13" rx="2.5" />
      <rect x="8" y="8" width="13" height="13" rx="2.5" /><path d="M16 8V5.5A2.5 2.5 0 0 0 13.5 3h-8A2.5 2.5 0 0 0 3 5.5v8A2.5 2.5 0 0 0 5.5 16H8" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  pin: (
    <>
      <path className="fill" d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" />
    </>
  ),
  spark: (
    <>
      <path className="fill" d="M12 2c.6 4.6 2.4 6.9 7 8-4.6 1.1-6.4 3.4-7 8-.6-4.6-2.4-6.9-7-8 4.6-1.1 6.4-3.4 7-8Z" />
      <path d="M12 2c.6 4.6 2.4 6.9 7 8-4.6 1.1-6.4 3.4-7 8-.6-4.6-2.4-6.9-7-8 4.6-1.1 6.4-3.4 7-8ZM19 17l.6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6Z" />
    </>
  ),
  lock: (
    <>
      <rect className="fill" x="4" y="10" width="16" height="11" rx="2.5" />
      <rect x="4" y="10" width="16" height="11" rx="2.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
    </>
  ),
  phone: (
    <>
      <rect className="fill" x="6" y="2" width="12" height="20" rx="3" />
      <rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 18.5h4" />
    </>
  ),
};

export default function Icon({ name, size = 24, className = '', title }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {paths[name] ?? paths.spark}
    </svg>
  );
}
