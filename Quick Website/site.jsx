/* global React */
// Shared site chrome: announcement, nav, footer, decorative SVG art

const { useState, useEffect } = React;

// ---------- Brand mark (uses the uploaded sparkle PNG, tinted via CSS filter) ----------
const BrandMark = ({ size = 24, color = "ink" }) => {
  // color: "ink" = black (default), "cream" = inverted to near-white
  const filter = color === "cream" ?
  "invert(94%) sepia(8%) saturate(259%) hue-rotate(13deg) brightness(99%) contrast(89%)" :
  "none";
  return (
    <img
      src="assets/frontierone-mark.png"
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", filter, display: "block" }}
      aria-hidden="true" />);


};

// Announcement bar removed in favor of Anthropic-style centered nav.
const Announcement = () => null;

const Nav = ({ active = "home" }) =>
<nav className="nav nav-anthropic">
    <div className="nav-inner">
      <a href="index.html" className="brand" aria-label="FrontierOne home">
        <span className="brand-wordmark">FRONTIER<span className="brand-stylized-1">/1</span></span>
      </a>
      <div className="nav-spacer" />
      <div className="nav-links">
        {/* <a href="index.html" className={active === "home" ? "is-active" : ""}>Home</a> */}
        {/* <a href="asgard.html" className={active === "asgard" ? "is-active" : ""}>ASGARD</a> */}
        {/* <a href="company.html" className={active === "company" ? "is-active" : ""}>Company <span className="nav-caret">⌄</span></a> */}
      </div>
      <div className="nav-spacer" />
    </div>
  </nav>;


const Footer = () =>
<footer className="footer">
    <div className="footer-inner">
      <div className="footer-bottom">
        <span>© 2026 FRONTIER/1</span>
        <span>
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
        </span>
      </div>
    </div>
  </footer>;


// ---------- Decorative art used in featured story / cta ----------
const RingsArt = () =>
<svg className="featured-art-inner" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="rg-glow" cx="0.7" cy="0.4" r="0.7">
        <stop offset="0%" stopColor="rgba(232,152,120,0.35)" />
        <stop offset="60%" stopColor="rgba(184,85,61,0.08)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>
    <rect width="600" height="600" fill="url(#rg-glow)" />
    {/* concentric rings — sovereign latitude lines */}
    <g className="art-rings" transform="translate(440 240)">
      {Array.from({ length: 14 }).map((_, i) =>
    <circle key={i} r={20 + i * 22} />
    )}
    </g>
    {/* horizontal threads */}
    <g className="art-grid">
      {Array.from({ length: 22 }).map((_, i) =>
    <line key={i} x1="0" y1={40 + i * 26} x2="600" y2={40 + i * 26 - 30} />
    )}
    </g>
    {/* token glyph */}
    <g transform="translate(440 240)" opacity="0.85">
      <circle r="36" fill="#0A0807" />
      <circle r="36" fill="none" stroke="#E89878" strokeWidth="1" />
      <text textAnchor="middle" y="6" fontFamily="var(--font-mono)" fontSize="11" fill="#E89878" letterSpacing="2">CSC</text>
      <circle r="3" cx="0" cy="-22" fill="#E89878" />
    </g>
  </svg>;


const HeroSpark = () =>
<svg className="hero-spark" viewBox="0 0 200 200" aria-hidden="true">
    <BrandMarkLarge />
  </svg>;


const BrandMarkLarge = () =>
<g fill="var(--ink)">
    {[
  [100, 32, 1.0],
  [54, 56, 0.62],
  [146, 56, 0.62],
  [32, 100, 0.78],
  [100, 100, 1.0],
  [168, 100, 0.78],
  [54, 144, 0.62],
  [146, 144, 0.62],
  [100, 168, 1.0]].
  map(([cx, cy, s], i) =>
  <path
    key={i}
    transform={`translate(${cx} ${cy}) scale(${s * 0.18}) translate(-50 -50)`}
    d="M50 0 C 52 30, 70 48, 100 50 C 70 52, 52 70, 50 100 C 48 70, 30 52, 0 50 C 30 48, 48 30, 50 0 Z" />

  )}
  </g>;


// ---------- Editorial illustration placeholders for releases ----------
const ReleaseArt1 = () =>
// Topographic / threat-map feel
<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
    <rect width="400" height="300" fill="#704A2E" />
    <g stroke="rgba(250,247,242,0.18)" fill="none" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => {
      const r = 30 + i * 28;
      return <ellipse key={i} cx="280" cy="180" rx={r * 0.9} ry={r * 0.6} />;
    })}
    </g>
    <g fill="#F2EDE3" opacity="0.9">
      <circle cx="280" cy="180" r="4" />
    </g>
    <g stroke="#E89878" strokeWidth="1" opacity="0.6">
      <line x1="280" y1="180" x2="120" y2="80" />
      <line x1="280" y1="180" x2="60" y2="220" />
      <line x1="280" y1="180" x2="160" y2="260" />
    </g>
    <g fill="#E89878">
      <circle cx="120" cy="80" r="3" />
      <circle cx="60" cy="220" r="3" />
      <circle cx="160" cy="260" r="3" />
    </g>
  </svg>;


const ReleaseArt2 = () =>
// Stratified bands — compute layers
<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
    <rect width="400" height="300" fill="#E8DCC4" />
    {[
  { y: 0, h: 60, c: "#0A0807" },
  { y: 60, h: 50, c: "#704A2E" },
  { y: 110, h: 44, c: "#B8553D" },
  { y: 154, h: 50, c: "#E89878" },
  { y: 204, h: 96, c: "#F2EDE3" }].
  map((b, i) =>
  <rect key={i} x="0" y={b.y} width="400" height={b.h} fill={b.c} />
  )}
    {/* token disk overlay */}
    <g transform="translate(200 150)">
      <circle r="64" fill="rgba(26,22,20,0.85)" />
      <circle r="64" fill="none" stroke="#E89878" strokeWidth="1" />
      <circle r="50" fill="none" stroke="rgba(232,152,120,0.3)" strokeWidth="1" />
      <text textAnchor="middle" y="5" fontFamily="var(--font-mono)" fontSize="13" fill="#E89878" letterSpacing="2">TOKEN</text>
    </g>
  </svg>;


const ReleaseArt3 = () =>
// Map dots / sovereign jurisdictions
<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
    <rect width="400" height="300" fill="#0A0807" />
    {/* dot grid suggesting world map */}
    <g fill="#2D2520">
      {Array.from({ length: 18 }).map((_, row) =>
    Array.from({ length: 26 }).map((__, col) => {
      const x = 20 + col * 14;
      const y = 20 + row * 14;
      // Crude continent silhouette mask
      const inMask =
      col > 4 && col < 12 && row > 3 && row < 12 ||
      col > 12 && col < 19 && row > 4 && row < 11 ||
      col > 19 && col < 24 && row > 6 && row < 14;
      if (!inMask) return null;
      return <circle key={`${row}-${col}`} cx={x} cy={y} r="1.6" />;
    })
    )}
    </g>
    {/* highlighted markets */}
    {[
  [148, 90, "Norway"],
  [180, 100, "NL"],
  [110, 110, "Canada"],
  [298, 160, "VN"]].
  map(([x, y], i) =>
  <g key={i}>
        <circle cx={x} cy={y} r="14" fill="rgba(184,85,61,0.18)" />
        <circle cx={x} cy={y} r="4" fill="#E89878" />
      </g>
  )}
  </svg>;


// Cyber-security illustration: secure Norwegian mountains under attestation
// rings, with the F1 mark at the secured core.
const HexMesh = () =>
<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
    <defs>
      <radialGradient id="cy-glow" cx="0.5" cy="0.5" r="0.6">
        <stop offset="0%" stopColor="rgba(232,152,120,0.28)" />
        <stop offset="55%" stopColor="rgba(184,85,61,0.06)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      <pattern id="cy-dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <circle cx="4" cy="4" r="0.55" fill="rgba(232,152,120,0.2)" />
      </pattern>
      <clipPath id="cy-mountain-clip">
        <rect x="0" y="380" width="600" height="220" />
      </clipPath>
    </defs>

    <rect width="600" height="600" fill="url(#cy-dots)" />
    <rect width="600" height="600" fill="url(#cy-glow)" />

    {/* concentric attestation rings */}
    <g fill="none" stroke="#F2EDE3" strokeWidth="1" opacity="0.7">
      <circle cx="300" cy="300" r="60" />
      <circle cx="300" cy="300" r="120" strokeDasharray="2 5" opacity="0.55" />
      <circle cx="300" cy="300" r="200" strokeDasharray="1 6" opacity="0.4" />
      <circle cx="300" cy="300" r="280" strokeDasharray="1 8" opacity="0.25" />
    </g>

    {/* crosshair guides */}
    <g stroke="#F2EDE3" strokeWidth="0.6" opacity="0.22">
      <line x1="0" y1="300" x2="600" y2="300" />
      <line x1="300" y1="0" x2="300" y2="600" />
    </g>

    {/* tick marks at cardinal points on outer ring */}
    <g stroke="#E89878" strokeWidth="1.2" opacity="0.85">
      <line x1="300" y1="14" x2="300" y2="30" />
      <line x1="300" y1="570" x2="300" y2="586" />
      <line x1="14" y1="300" x2="30" y2="300" />
      <line x1="570" y1="300" x2="586" y2="300" />
    </g>

    {/* connected node graph — ASGARD attestation mesh */}
    <g fill="none" stroke="#F2EDE3" strokeWidth="0.9" opacity="0.5">
      <line x1="300" y1="300" x2="120" y2="140" />
      <line x1="300" y1="300" x2="480" y2="140" />
      <line x1="300" y1="300" x2="500" y2="380" />
      <line x1="300" y1="300" x2="140" y2="440" />
    </g>
    <g fill="#0A0807" stroke="#F2EDE3" strokeWidth="1" opacity="0.85">
      <circle cx="120" cy="140" r="4.5" />
      <circle cx="480" cy="140" r="4.5" />
      <circle cx="500" cy="380" r="4.5" />
      <circle cx="140" cy="440" r="4.5" />
    </g>

    {/* Norwegian mountain range — sharp triangular peaks across the lower band */}
    <g clipPath="url(#cy-mountain-clip)" fill="none" stroke="#F2EDE3" strokeLinejoin="miter" strokeLinecap="round">
      {/* far range — distant peaks, slightly softer */}
      <path d="M -20 470 L 50 410 L 120 460 L 200 405 L 260 455 L 340 400 L 420 450 L 490 405 L 560 455 L 620 425 L 620 600 L -20 600 Z"
    strokeWidth="0.9" opacity="0.4" />
      {/* mid range — more dramatic peaks with snow-cap detail */}
      <path d="M -20 510 L 30 460 L 90 500 L 160 430 L 230 495 L 300 425 L 370 495 L 440 430 L 510 495 L 580 460 L 620 495 L 620 600 L -20 600 Z"
    strokeWidth="1.2" opacity="0.65" />
      {/* snow-cap chevrons just below each mid-range peak crown */}
      <g strokeWidth="0.8" opacity="0.55">
        <path d="M 148 442 L 160 430 L 172 442" />
        <path d="M 218 507 L 230 495 L 242 507" />
        <path d="M 288 437 L 300 425 L 312 437" />
        <path d="M 358 507 L 370 495 L 382 507" />
        <path d="M 428 442 L 440 430 L 452 442" />
      </g>
      {/* near range — bold, sharp dark silhouette closest to viewer */}
      <path d="M -20 565 L 20 525 L 80 555 L 140 510 L 210 555 L 280 505 L 350 555 L 420 510 L 490 555 L 560 520 L 620 550 L 620 600 L -20 600 Z"
    strokeWidth="1.4" opacity="0.95" />
      {/* tiny peak details on near range to hint snow ridges */}
      <g strokeWidth="0.7" opacity="0.7">
        <path d="M 130 520 L 140 510 L 150 520" />
        <path d="M 270 515 L 280 505 L 290 515" />
        <path d="M 410 520 L 420 510 L 430 520" />
      </g>
    </g>

    {/* secured core: framing brackets around the F1 mark */}
    <g stroke="#E89878" strokeWidth="1.5" fill="none" opacity="0.95">
      <path d="M 232 240 L 220 240 L 220 252" />
      <path d="M 368 240 L 380 240 L 380 252" />
      <path d="M 232 360 L 220 360 L 220 348" />
      <path d="M 368 360 L 380 360 L 380 348" />
    </g>

    {/* F1 logomark — uses the actual brand mark PNG */}
    <image href="assets/frontierone-mark-cream.png" x="232" y="232" width="136" height="136" />

    {/* coordinate readout — Norway lat/lon */}
    <g fill="#B0A294" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" opacity="0.6">
      <text x="22" y="294">N 60°</text>
      <text x="540" y="294">E 10°</text>
      <text x="270" y="22">SECURED</text>
    </g>
  </svg>;


Object.assign(window, {
  BrandMark, Announcement, Nav, Footer,
  RingsArt, HeroSpark,
  ReleaseArt1, ReleaseArt2, ReleaseArt3,
  HexMesh
});