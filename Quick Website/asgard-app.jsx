/* global React, Nav, Footer, Announcement, RingsArt */
/* global TWEAK_DEFAULTS, useApplyTweaks, SharedTweaks */

const STACK_LAYERS = [
  { num: "01", name: "Datacenter & physical fabric", desc: "Hardened to defence standards. Tamper sensors, supply‑chain attestation, perimeter and personnel controls verified continuously.", tag: "DEF‑STAN · BSI C5" },
  { num: "02", name: "Network fabric", desc: "Zero‑trust segmentation, encrypted east‑west traffic, real‑time anomaly detection across every flow in the cluster.", tag: "Continuous threat intel" },
  { num: "03", name: "Compute & GPU integrity", desc: "Hardware‑rooted attestation. GPU firmware verified before workloads load. Built for NVIDIA H200 and LPX.", tag: "Hardware attest" },
  { num: "04", name: "Cloud platform & orchestration", desc: "Sovereign Kubernetes, hypervisor isolation, signed images, audit‑mapped to FedRAMP, EUCS, IRAP, CMMC L2.", tag: "Compliance mapped" },
  { num: "05", name: "Model & inference governance", desc: "Adversarial defence against Mythos‑class autonomous models. Red‑teaming, prompt firewalls, weight integrity.", tag: "AI threat modelling" },
  { num: "06", name: "Cyber‑Secure Compute Token", desc: "Every inference call emits a tamper‑evident, residency‑proven, audit‑mapped token. Procurable like any cloud SKU.", tag: "Per‑transaction" },
];

const MARKETS = [
  { name: "Viking Digital", region: "Norway", status: "Final negotiations", statusKind: "signing", mw: "300 MW", customers: "Norwegian government — defence & health departments." },
  { name: "BW Velora", region: "Norway · Canada", status: "Live · Norway", statusKind: "live", mw: "120 MW", customers: "Norwegian energy & shipping. Canadian sovereign AI infrastructure." },
  { name: "Digital Energy", region: "Netherlands", status: "Engaged", statusKind: "signing", mw: "30 MW planned", customers: "Shell, Adyen, Dutch enterprise pipeline." },
  { name: "GlobusAccess", region: "Vietnam", status: "Discovery", statusKind: "", mw: "30 MW planned", customers: "Government departments identified. 30MW datacenter target." },
];

const COMPLIANCE = ["FedRAMP", "CMMC L2", "EUCS", "ISO 27001", "IRAP", "BSI C5", "DEF‑STAN", "UK Cyber Essentials+"];

const PageHero = () => (
  <section className="page-hero" data-screen-label="ASGARD hero">
    <div className="container">
      <div className="page-hero-grid">
        <div>
          <div className="eyebrow"><span className="dot"></span>The product</div>
          <h1 className="page-hero-title display" style={{ marginTop: 18 }}>
            <em>ASGARD</em><br/>The assurance layer for sovereign AI.
          </h1>
        </div>
        <div>
          <p className="page-hero-sub">
            ASGARD is not a security tool bolted onto a cloud. It is the operating system that secures every layer of the AI compute stack — from concrete to silicon to inference — and emits a verifiable Cyber‑Secure Compute Token on every transaction.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-primary">Request a brief <span className="btn-arrow">→</span></a>
            <a href="#stack" className="btn btn-ghost">See the stack</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PILLARS = [
  { num: "01", title: "Datacenter & network fabric", body: "Hardened to defence standards. Physical, firmware, and supply‑chain attestation from the concrete up.", tag: "Layer 1–2" },
  { num: "02", title: "Compute & cloud platform", body: "GPU cluster integrity, hypervisor isolation, zero‑trust orchestration — verified before a model loads.", tag: "Layer 3–4" },
  { num: "03", title: "Model governance", body: "Continuous threat intel, red‑teaming, and adversarial defence against Mythos‑class autonomous models.", tag: "Layer 5" },
  { num: "04", title: "Per‑transaction attestation", body: "Every inference call emits a Cyber‑Secure Compute Token. Tamper‑evident. Audit‑mapped. Procurable.", tag: "Token engine" },
  { num: "05", title: "Sovereign jurisdiction", body: "On‑prem and air‑gapped capable. Outside US CLOUD Act. Mapped to FedRAMP, EUCS, IRAP, BSI C5, DEF‑STAN.", tag: "Compliance" },
  { num: "06", title: "Asset‑light by design", body: "We assure your infrastructure — we don't build it. Capital flows to security, not concrete.", tag: "Model" },
];

const Transformation = () => (
  <section className="section section-warm" data-screen-label="Transformation">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>The product</div>
          <h2 className="section-title display">
            ASGARD takes <em>electrons</em> and delivers <em>Cyber‑Secure Tokens</em>.
          </h2>
        </div>
        <p className="section-intro">
          Not a security tool bolted onto a cloud, ASGARD is built as a Cyber‑Secure Sovereign AI Cloud across every layer of the AI compute stack — datacenter, compute, cloud, model, inference — producing Cyber‑Secure Tokens.
        </p>
      </div>

      <div className="pillars">
        {PILLARS.map((p) => (
          <div className="pillar" key={p.num}>
            <div className="pillar-num">{p.num}</div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-body">{p.body}</p>
            <span className="pillar-tag">→ {p.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stack = () => (
  <section className="section" id="stack" data-screen-label="Stack">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>The stack</div>
          <h2 className="section-title display">
            <em>Six layers</em>, one assurance backplane.
          </h2>
        </div>
        <p className="section-intro">
          The ASGARD Security Backplane operates across all layers simultaneously — providing real‑time threat detection, tamper‑evident audit logs, and continuous compliance mapping to every major framework.
        </p>
      </div>

      <div className="stack">
        {STACK_LAYERS.map((l) => (
          <div className="stack-row" key={l.num}>
            <div className="stack-num">{l.num}</div>
            <div className="stack-name">{l.name}</div>
            <div className="stack-desc">{l.desc}</div>
            <div className="stack-tag">{l.tag}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Token = () => (
  <section className="section section-dark" id="token" data-screen-label="Token">
    <div className="container">
      <div className="section-head" style={{ marginBottom: 48 }}>
        <div>
          <div className="eyebrow"><span className="dot"></span>The output</div>
          <h2 className="section-title display" style={{ color: "#F2EDE3" }}>
            The <em>Cyber‑Secure Compute Token</em>.
          </h2>
        </div>
        <p className="section-intro" style={{ color: "#B0A294" }}>
          Our core technical output. The CSC Token is what allows governments and enterprises to procure sovereign AI inference with the same confidence they apply to standard cloud services.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div style={{ position: "relative", aspectRatio: "1 / 1", background: "linear-gradient(135deg, #14100D, #3D1F12 70%, var(--terra))", borderRadius: 12, overflow: "hidden", display: "grid", placeItems: "center" }}>
          <RingsArt />
          <div style={{ position: "relative", textAlign: "center", color: "#F2EDE3", zIndex: 2 }}>
            <div style={{ width: 200, height: 200, borderRadius: "50%", background: "rgba(10,8,7,0.95)", border: "1px solid rgba(232,152,120,0.5)", display: "grid", placeItems: "center", margin: "0 auto" }}>
              <div>
                <div className="kicker" style={{ color: "#E89878", fontSize: 10 }}>CSC TOKEN</div>
                <div className="display" style={{ fontSize: 36, color: "#F2EDE3", marginTop: 10, fontStyle: "italic" }}>v1.0</div>
                <div className="kicker" style={{ color: "#B0A294", fontSize: 9, marginTop: 12 }}>NO‑08742 · ATTESTED</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gap: 24 }}>
          {[
            { k: "Tamper‑evident", v: "Cryptographically signed at issue. Any modification post‑emission breaks the signature chain." },
            { k: "Residency‑proven", v: "GPU, region, and jurisdiction baked into the token. Verifiable on‑chain or off." },
            { k: "Audit‑mapped", v: "Maps the inference event to the customer's compliance framework — FedRAMP, EUCS, IRAP, BSI C5." },
            { k: "Procurable", v: "Issued like any cloud SKU. Procurement officers can buy assurance, not just compute." },
          ].map((f) => (
            <div key={f.k} style={{ borderTop: "1px solid #2C2520", paddingTop: 20 }}>
              <div className="display" style={{ fontSize: 22, color: "#F2EDE3", letterSpacing: "-0.01em" }}>{f.k}</div>
              <p style={{ color: "#B0A294", fontSize: 14.5, lineHeight: 1.55, marginTop: 6 }}>{f.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Compliance = () => (
  <section className="section" id="compliance" data-screen-label="Compliance">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>Compliance</div>
          <h2 className="section-title display">
            <em>Every</em> framework that matters.
          </h2>
        </div>
        <p className="section-intro">
          ASGARD is the only sovereign AI cloud assembling these certifications simultaneously — and mapping every inference to them automatically.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--hairline)", border: "1px solid var(--hairline)", borderRadius: 4, overflow: "hidden" }}>
        {COMPLIANCE.map((c) => (
          <div key={c} style={{ background: "var(--bg)", padding: "32px 28px", display: "grid", placeItems: "center" }}>
            <span className="display" style={{ fontSize: 22, letterSpacing: "-0.01em" }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Markets = () => (
  <section className="section section-warm" id="partners" data-screen-label="Markets">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>Jurisdictions</div>
          <h2 className="section-title display">
            One platform. <em>Any jurisdiction</em>.
          </h2>
        </div>
        <p className="section-intro">
          ASGARD solves the same trust problem in every market globally. Partner with us.
        </p>
      </div>
    </div>
  </section>
);

const CtaBand = () => (
  <section className="cta-band" id="contact">
    <div className="container">
      <div className="cta-band-inner">
        <h2 className="cta-band-title">
          Sovereign AI is procurable today — <em>if you have ASGARD</em>.
        </h2>
        <a href="mailto:partners@frontierone.ai" className="btn btn-primary">Talk to sovereign sales <span className="btn-arrow">→</span></a>
      </div>
    </div>
  </section>
);

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useApplyTweaks(tweaks);
  return (
    <>
      <Announcement />
      <Nav active="asgard" />
      <main>
        <PageHero />
        <Stack />
        <Token />
        <Compliance />
        <Markets />
        <CtaBand />
      </main>
      <Footer />
      <SharedTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
