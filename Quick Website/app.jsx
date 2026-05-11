/* global React, Nav, Footer, Announcement, BrandMark, RingsArt, HeroSpark, ReleaseArt1, ReleaseArt2, ReleaseArt3 */
/* global TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor */

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "terracotta",
  "fontPair": "newsreader-geist",
  "primary": "#B8553D"
} /*EDITMODE-END*/;

const PALETTES = {
  terracotta: { primary: "#B8553D", deep: "#8E3F2B", umber: "#704A2E", glow: "#E89878", bg: "#FDFCFA", warm: "#F4F1EA", deepBg: "#0A0807", sand: "#EDE3CC", hairline: "#ECE4D2" },
  ink: { primary: "#1A1614", deep: "#000000", umber: "#3D332C", glow: "#B8553D", bg: "#FDFCFA", warm: "#F2EDE2", deepBg: "#050403", sand: "#EDE3CC", hairline: "#E8DECC" },
  forest: { primary: "#3F5E3D", deep: "#2A4128", umber: "#5C6B4A", glow: "#A8B788", bg: "#FBFAF4", warm: "#EFEDDF", deepBg: "#0B100A", sand: "#E2DCC4", hairline: "#E1DCC4" },
  ocean: { primary: "#1E5A7A", deep: "#13405A", umber: "#2A4252", glow: "#7FB3CC", bg: "#FAFAF6", warm: "#EAEAE0", deepBg: "#050B11", sand: "#D9E1DE", hairline: "#DBDBCF" },
  ember: { primary: "#D4541C", deep: "#A03806", umber: "#5A2410", glow: "#FFA070", bg: "#FEFAF2", warm: "#F8EDD9", deepBg: "#0C0604", sand: "#F0DEC1", hairline: "#EBDABA" }
};

const FONT_PAIRS = {
  "newsreader-geist": {
    display: '"Newsreader", "Source Serif 4", Georgia, serif',
    body: '"Geist", "IBM Plex Sans", system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, monospace',
    weight: 380
  },
  "playfair-dmsans": {
    display: '"Playfair Display", Georgia, serif',
    body: '"DM Sans", system-ui, sans-serif',
    mono: '"DM Mono", ui-monospace, monospace',
    weight: 400
  },
  "ibmplex": {
    display: '"IBM Plex Serif", Georgia, serif',
    body: '"IBM Plex Sans", system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
    weight: 400
  },
  "instrument": {
    display: '"Instrument Serif", Georgia, serif',
    body: '"Geist", system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, monospace',
    weight: 400
  }
};

function applyTokens(palette, fontPair, primaryOverride) {
  const p = PALETTES[palette] || PALETTES.terracotta;
  const f = FONT_PAIRS[fontPair] || FONT_PAIRS["newsreader-geist"];
  const root = document.documentElement.style;
  const primary = primaryOverride || p.primary;
  root.setProperty("--terra", primary);
  root.setProperty("--terra-deep", p.deep);
  root.setProperty("--umber", p.umber);
  root.setProperty("--bg", p.bg);
  root.setProperty("--bg-warm", p.warm);
  root.setProperty("--bg-deep", p.deepBg);
  root.setProperty("--sand", p.sand);
  root.setProperty("--hairline", p.hairline);
  root.setProperty("--font-display", f.display);
  root.setProperty("--font-body", f.body);
  root.setProperty("--font-mono", f.mono);
  root.setProperty("--display-weight", f.weight);
}

function useApplyTweaks(tweaks) {
  useEffect(() => {
    applyTokens(tweaks.palette, tweaks.fontPair, tweaks.primary);
  }, [tweaks.palette, tweaks.fontPair, tweaks.primary]);
}

// ---------- Page sections ----------
const Hero = () =>
<section className="hero" data-screen-label="Hero">
    <div className="hero-grid">
      <h1 className="hero-headline">
        Full Stack Cyber‑<span className="underline">Secure</span> <span className="underline">Sovereign AI</span>
      </h1>
      <div className="hero-right">
        <p className="hero-sub-anth">
          AI is now critical infrastructure. ASGARD is the assurance layer for Sovereign AI — track, monitor, and deter cyber‑threats across the full AI stack, from concrete to cloud. <span style={{ color: "var(--terra)", fontWeight: 700 }}>Because secure enough is not good enough from your cloud provider.</span>
        </p>
      </div>
    </div>
  </section>;


const FeaturedStory = () =>
<section className="section featured-section" id="featured" data-screen-label="Featured">
    <div className="featured-wide">
      <article className="featured featured-anthropic">
        <div className="featured-content">
          <h3 className="featured-title-anth">
            Full stack Cyber‑Security<br />in a Mythos world
          </h3>
        </div>
        <div className="featured-art">
          <HexMesh />
        </div>
      </article>
    </div>
  </section>;


const Pillars = () =>
<section className="section section-warm" id="product" data-screen-label="Product pillars">
    <div className="container">
      <div className="section-head">
        <div>
          <h2 className="section-title display">
            ASGARD turns commodity compute into <em>assured sovereign compute</em>.
          </h2>
        </div>
        <p className="section-intro">
          Raw infrastructure goes in. Verified, attestable inference comes out. The transformation happens at every layer — and is provable to any regulator, any procurement officer, any auditor.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, alignItems: "stretch" }}>
        <div style={{ background: "var(--bg)", padding: 36, borderRadius: 8, border: "1px solid var(--hairline)" }}>
          <div className="kicker" style={{ marginBottom: 18 }}>Input</div>
          <h3 className="display" style={{ fontSize: 28, letterSpacing: "-0.015em", margin: 0, lineHeight: 1.1 }}>Electrons in</h3>
          <p style={{ color: "var(--ink-3)", fontSize: 14.5, lineHeight: 1.55, marginTop: 14 }}>
            Raw power, silicon, and GPU cycles. Commodity compute in a sovereign datacenter — unattested, unverified, undifferentiated.
          </p>
        </div>
        <div style={{ background: "var(--bg-deep)", color: "#F2EDE3", padding: 36, borderRadius: 8, position: "relative", overflow: "hidden" }}>
          <div className="kicker" style={{ color: "#B0A294", marginBottom: 18 }}>The assurance layer</div>
          <h3 className="display" style={{ fontSize: 28, letterSpacing: "-0.015em", margin: 0, lineHeight: 1.1, color: "#F2EDE3" }}>F1 ASGARD</h3>
          <p style={{ color: "#B0A294", fontSize: 14.5, lineHeight: 1.55, marginTop: 14 }}>
            Secured to defence standards. Security ontology enabling attestation at every layer. Continuous threat intel and model governance.
          </p>
          <div style={{ position: "absolute", right: -20, bottom: -20, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,152,120,0.25), transparent 70%)" }} />
        </div>
        <div style={{ background: "var(--bg)", padding: 36, borderRadius: 8, border: "1px solid var(--hairline)" }}>
          <div className="kicker" style={{ marginBottom: 18, color: "var(--terra)" }}>Output</div>
          <h3 className="display" style={{ fontSize: 28, letterSpacing: "-0.015em", margin: 0, lineHeight: 1.1 }}>Secure tokens out</h3>
          <p style={{ color: "var(--ink-3)", fontSize: 14.5, lineHeight: 1.55, marginTop: 14 }}>
            Every inference emits a Cyber‑Secure Compute Token — tamper‑evident, residency‑proven, audit‑mapped, procurable by sovereign buyers.
          </p>
        </div>
      </div>
    </div>
  </section>;


const StatsStrip = () =>
<section className="section" data-screen-label="Platform">
    <div className="container" style={{ marginBottom: 28 }}>
      <div className="eyebrow"><span className="dot"></span>The ASGARD Platform</div>
      <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 56px)", margin: "16px 0 0", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
        Full Stack Security in a <em>Mythos</em> World.
      </h2>
    </div>
    <div className="container" style={{ marginTop: 36 }}>
      <img
      src="assets/asgard-platform.png"
      alt="ASGARD Platform — sovereign secure AI factory architecture"
      style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, border: "1px solid var(--hairline)" }} />
    
    </div>
  </section>;


const RELEASES = [
{ art: () => <ReleaseArt1 />, tag: "Announcements", date: "Apr 28, 2026", title: "ASGARD goes live with BW Velora across 120MW of Norwegian capacity.", href: "news.html" },
{ art: () => <ReleaseArt2 />, tag: "Engineering", date: "Apr 14, 2026", title: "Inside the Cyber‑Secure Compute Token — what an attested inference looks like in production.", href: "#" },
{ art: () => <ReleaseArt3 />, tag: "Markets", date: "Mar 30, 2026", title: "Four jurisdictions, one platform: how ASGARD scales sovereign assurance simultaneously.", href: "#" },
{ art: () => <ReleaseArt2 />, tag: "Policy", date: "Mar 18, 2026", title: "Comments to the EU Commission on the Cyber Resilience Act and sovereign AI procurement.", href: "#" },
{ art: () => <ReleaseArt3 />, tag: "Research", date: "Mar 04, 2026", title: "Adversarial defence against Mythos‑class autonomous models: a layered evaluation framework.", href: "#" },
{ art: () => <ReleaseArt1 />, tag: "Announcements", date: "Feb 19, 2026", title: "FrontierOne emerges from stealth with a $130M Series A led by ex‑DARPA and Cambridge engineers.", href: "#" }];


const NEWS_FILTERS = ["All", "Announcements", "Policy", "Product", "Engineering", "Research", "Markets"];

const Releases = () => {
  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? RELEASES : RELEASES.filter((r) => r.tag === filter);
  return (
    <section className="section" id="news" data-screen-label="News">
      <div className="container">
        <div className="news-head">
          <h2 className="news-page-title display">News</h2>
          <a href="#all-news" className="btn-text">View all <span>→</span></a>
        </div>

        <div className="news-filters" role="tablist" aria-label="Filter news by category">
          {NEWS_FILTERS.map((f) =>
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={"news-chip" + (filter === f ? " is-active" : "")}
            onClick={() => setFilter(f)}>
            
              {f}
            </button>
          )}
        </div>

        <div className="releases">
          {filtered.map((r, i) =>
          <a className="release" key={i} href={r.href}>
              <div className="release-art">{r.art()}</div>
              <div className="release-meta">
                <span className="tag">{r.tag}</span>
                <span className="dot"></span>
                <span>{r.date}</span>
              </div>
              <h3 className="release-title">{r.title}</h3>
            </a>
          )}
        </div>

        {filtered.length === 0 &&
        <p style={{ color: "var(--ink-3)", textAlign: "center", padding: "48px 0" }}>No posts in this category yet.</p>
        }
      </div>
    </section>);

};

const PRESS = [
{ src: "Financial Times", date: "Apr 30, 2026", headline: "FrontierOne emerges with sovereign AI security thesis backed by ex‑DARPA, Cambridge engineers." },
{ src: "The Information", date: "Apr 22, 2026", headline: "Inside ASGARD: the bet that the sovereign AI market is held back by trust, not capacity." },
{ src: "Bloomberg", date: "Apr 12, 2026", headline: "Norway's BW Velora picks FrontierOne as security layer for 120MW NATO‑jurisdiction AI buildout." },
{ src: "TechCrunch", date: "Mar 28, 2026", headline: "Why an asset‑light security cloud may be the most defensible play in sovereign infrastructure." },
{ src: "Politico EU", date: "Mar 14, 2026", headline: "Brussels watches as EU member states move on sovereign AI compute outside US CLOUD Act reach." }];


const Press = () =>
<section className="section section-warm" id="press" data-screen-label="Press">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>Press & media</div>
          <h2 className="section-title display">
            <em>In the press</em>.
          </h2>
        </div>
        <p className="section-intro">
          Coverage of FrontierOne, ASGARD, and the emergence of the sovereign AI security layer.
        </p>
      </div>
      <div className="press-list">
        {PRESS.map((p, i) =>
      <a className="press-item" href="#" key={i}>
            <div className="press-source">{p.src}</div>
            <div className="press-headline">{p.headline}</div>
            <div className="press-date">{p.date}</div>
          </a>
      )}
      </div>
    </div>
  </section>;


const CtaBand = () =>
<section className="cta-band" id="contact" data-screen-label="CTA">
    <svg className="cta-band-spark" viewBox="0 0 200 200" aria-hidden="true">
      <g fill="#E89878">
        {[
      [100, 32, 1.0], [54, 56, 0.62], [146, 56, 0.62],
      [32, 100, 0.78], [100, 100, 1.0], [168, 100, 0.78],
      [54, 144, 0.62], [146, 144, 0.62], [100, 168, 1.0]].
      map(([cx, cy, s], i) =>
      <path
        key={i}
        transform={`translate(${cx} ${cy}) scale(${s * 0.18}) translate(-50 -50)`}
        d="M50 0 C 52 30, 70 48, 100 50 C 70 52, 52 70, 50 100 C 48 70, 30 52, 0 50 C 30 48, 48 30, 50 0 Z" />

      )}
      </g>
    </svg>
    <div className="container">
      <div className="cta-band-inner">
        <h2 className="cta-band-title">
          If you're building sovereign infrastructure — <em>let's talk</em>.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
          <a href="#brief" className="btn btn-primary">Request a partner brief <span className="btn-arrow">→</span></a>
          <a href="company.html" className="btn-text" style={{ color: "#DDD3C0", borderColor: "rgba(232,152,120,0.4)" }}>
            About FrontierOne <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>;


// ---------- App ----------
const Tweaks = ({ tweaks, setTweak }) =>
<TweaksPanel>
    <TweakSection title="Color palette">
      <TweakRadio
      label="Direction"
      value={tweaks.palette}
      onChange={(v) => setTweak({ palette: v, primary: PALETTES[v]?.primary })}
      options={[
      { value: "terracotta", label: "Terracotta" },
      { value: "ember", label: "Ember" },
      { value: "ink", label: "Ink" },
      { value: "forest", label: "Forest" },
      { value: "ocean", label: "Ocean" }]
      } />
    
      <TweakColor
      label="Accent override"
      value={tweaks.primary}
      onChange={(v) => setTweak("primary", v)} />
    
    </TweakSection>
    <TweakSection title="Typography">
      <TweakRadio
      label="Font pair"
      value={tweaks.fontPair}
      onChange={(v) => setTweak("fontPair", v)}
      options={[
      { value: "newsreader-geist", label: "Newsreader · Geist" },
      { value: "instrument", label: "Instrument · Geist" },
      { value: "playfair-dmsans", label: "Playfair · DM Sans" },
      { value: "ibmplex", label: "IBM Plex" }]
      } />
    
    </TweakSection>
  </TweaksPanel>;


const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useApplyTweaks(tweaks);

  return (
    <>
      <Nav active="home" />
      <main>
        <Hero />
      </main>
      <Footer />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>);

};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);