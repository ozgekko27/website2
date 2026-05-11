/* global React, Nav, Footer, Announcement */
/* global TWEAK_DEFAULTS, useApplyTweaks, SharedTweaks */

const TEAM = [
{ name: "Tee Ganbold", role: "CEO", initials: "TG", bio: "Cambridge Analytica Business Lead at 23. Hired by Joe Lubin to lead BD at ConsenSys at 25. CMO and Co-Founder at Clear AI." },
{ name: "Frank Meehan", role: "CSO", initials: "FM", bio: "Sovereign Relations at Nebius. Co-founder Equilibrium AI (NYSE IPO 2022). Led early DeepMind investment. Investor in Anthropic and Groq." },
{ name: "Amit Gupta", role: "CTO", initials: "AG", bio: "Scaled core engineering at Benchling ($6B) and Lookout ($2B). Drives ASGARD architecture, NVIDIA LPX integration, and the CSC Token engine." },
{ name: "Zach Powers", role: "CISO", initials: "ZP", bio: "Built enterprise security at Benchling and One Medical. Prior VP Security at Salesforce, serving 30+ governments worldwide." },
{ name: "Sameer Chishty", role: "CFO", initials: "SC", bio: "Co-Founder of AsiaPak Investments ($4B platform). Investor in OpenAI, Anthropic, Groq. Former Partner at McKinsey and Morgan Stanley." },
{ name: "Jesse Coffey", role: "Product / Engineering", initials: "JC", bio: "Defence and aerospace platforms for DARPA, AFRL, and SPAWAR. Cyber challenge developer at DEFCON with US Air Force Research Lab." },
{ name: "Stacy Gorelik", role: "HPC / Software Lead", initials: "SG", bio: "VP Engineering at Seqera. Head of Engineering at Flatiron Health. 20+ years delivering mission‑critical software in finance and health‑tech." },
{ name: "Colin Rand", role: "Security / Software Lead", initials: "CR", bio: "EVP R&D at SonicWall. Former VP Engineering at Banyan Security, leading zero‑trust SSE and AI‑powered defence against spearphishing." },
{ name: "Dr. David Khachaturov", role: "Lead AI Security", initials: "DK", bio: "Cambridge PhD in adversarial machine learning. Harding Distinguished Scholar. Bye‑Fellow at St Catharine's College, Cambridge." },
{ name: "Ricardo Velez", role: "Chief Legal Officer", initials: "RV", bio: "Former Deputy General Counsel at Skype. General Counsel at Benchling ($6B). Capital markets, M&A, and regulatory compliance." },
{ name: "Paul Dufays", role: "Head of Financing", initials: "PD", bio: "Energy finance specialist. Senior roles at Amni International, Energean Oil & Gas, and Standard Chartered. Two decades in structured debt and capital markets." }];


const VALUES = [
{ num: "01", t: "Security as the default", b: "We don't bolt security on. It's the operating system. Every layer can be tracked, monitored and managed." },
{ num: "02", t: "Sovereign by construction", b: "Jurisdiction is a first‑class property of compute, not a contractual afterthought. On‑prem and air‑gapped capable." },
{ num: "03", t: "Datacenter Partners", b: "We partner with major datacenters globally to together deliver Secure Compute to enterprises and governments." },
{ num: "04", t: "Extensive Experience", b: "Our deep experience in Cyber-Security, Infrastructure, AI and Cloud enables us to deliver to your requirements." }];


const PageHero = () =>
<section className="page-hero" data-screen-label="About hero">
    <div className="container">
      <div className="page-hero-grid">
        <div>
          <div className="eyebrow"><span className="dot"></span>Company</div>
          <h1 className="page-hero-title display" style={{ marginTop: 18 }}>
            We are building the <em>trust layer</em> for sovereign AI.
          </h1>
        </div>
        <div>
          <p className="page-hero-sub">
            FrontierOne is the Avengers Assemble of cybersecurity and AI: DARPA‑grade defence engineers, Cambridge AI security researchers, CISOs who have secured 30+ governments, HPC infrastructure leaders, and operators with multiple high‑value exits.
          </p>
        </div>
      </div>
    </div>
  </section>;


const Mission = () =>
<section className="section section-warm" data-screen-label="Mission">
    <div className="container">
      <div style={{ maxWidth: 980 }}>
        <div className="eyebrow"><span className="dot"></span>Our mission</div>
        <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: "20px 0 0" }}>
          Nations will increasingly rely on AI. AI needs infrastructure. Nations need their infrastructure to be sovereign. <em>Sovereign infrastructure needs to be secured from the electron to the token.</em>
        </h2>
        <p style={{ fontSize: 17, color: "var(--ink-3)", lineHeight: 1.6, marginTop: 28, maxWidth: 720 }}>
          With the release of Mythos and additional cyber‑focused models emerging from China, enterprises and governments cannot deploy AI at scale into national functions — energy, finance, health — if they cannot trust the full AI stack: datacenter, compute, cloud, storage, models. The trust layer in between does not yet exist. We are building it.
        </p>
      </div>
    </div>
  </section>;


const Values = () =>
<section className="section" data-screen-label="Values">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>How we operate</div>
          <h2 className="section-title display">Four <em>commitments</em>.</h2>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--hairline)", border: "1px solid var(--hairline)", borderRadius: 4, overflow: "hidden" }}>
        {VALUES.map((v) =>
      <div key={v.num} style={{ background: "var(--bg)", padding: "40px 36px", minHeight: 220 }}>
            <div className="kicker">{v.num}</div>
            <h3 className="display" style={{ fontSize: 28, letterSpacing: "-0.015em", margin: "12px 0 14px", lineHeight: 1.1 }}>{v.t}</h3>
            <p style={{ color: "var(--ink-3)", fontSize: 15, lineHeight: 1.55, maxWidth: 460 }}>{v.b}</p>
          </div>
      )}
      </div>
    </div>
  </section>;


const Team = () =>
<section className="section section-warm" id="team" data-screen-label="Team">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>Team</div>
          <h2 className="section-title display">
            World‑class in <em>their domains</em>.
          </h2>
        </div>
        <p className="section-intro">DARPA, Cambridge, Salesforce, McKinsey, Benchling, Banyan, Skype. We are operators who have built and exited at the highest levels of tech and capital markets.

      </p>
      </div>
      <div className="team-grid">
        {TEAM.map((p) =>
      <div className="team-card" key={p.name}>
            <div className="team-portrait">{p.initials}</div>
            <div className="team-role">{p.role}</div>
            <div className="team-name">{p.name}</div>
            <p className="team-bio">{p.bio}</p>
          </div>
      )}
      </div>
    </div>
  </section>;


const Address = () =>
<section className="section" data-screen-label="Address">
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div className="kicker">Headquarters</div>
          <p className="display" style={{ fontSize: 22, letterSpacing: "-0.01em", marginTop: 12, lineHeight: 1.4 }}>
            550 California Street<br />San Francisco, CA 94104
          </p>
        </div>
        <div>
          <div className="kicker">Active markets</div>
          <p className="display" style={{ fontSize: 22, letterSpacing: "-0.01em", marginTop: 12, lineHeight: 1.4 }}>
            Norway · Netherlands<br />Canada · Vietnam
          </p>
        </div>
        <div>
          <div className="kicker">Get in touch</div>
          <p className="display" style={{ fontSize: 22, letterSpacing: "-0.01em", marginTop: 12, lineHeight: 1.4 }}>
            <a href="mailto:partners@frontierone.ai" style={{ borderBottom: "1px solid var(--hairline-2)" }}>partners@frontierone.ai</a><br />
            <a href="mailto:press@frontierone.ai" style={{ borderBottom: "1px solid var(--hairline-2)" }}>press@frontierone.ai</a>
          </p>
        </div>
      </div>
    </div>
  </section>;


const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useApplyTweaks(tweaks);
  return (
    <>
      <Announcement />
      <Nav active="company" />
      <main>
        <PageHero />
        <Mission />
        <Values />
        <Team />
        <Address />
      </main>
      <Footer />
      <SharedTweaks tweaks={tweaks} setTweak={setTweak} />
    </>);

};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);