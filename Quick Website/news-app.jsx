/* global React, ReactDOM, Nav, Footer, Announcement, ReleaseArt1, ReleaseArt2, ReleaseArt3 */
/* global TWEAK_DEFAULTS, useApplyTweaks, SharedTweaks, useTweaks */

const RELEASES = [
  { art: () => <ReleaseArt1 />, tag: "Announcements", date: "Apr 28, 2026", title: "ASGARD goes live with BW Velora across 120MW of Norwegian capacity.", href: "#" },
  { art: () => <ReleaseArt2 />, tag: "Engineering", date: "Apr 14, 2026", title: "Inside the Cyber‑Secure Compute Token — what an attested inference looks like in production.", href: "#" },
  { art: () => <ReleaseArt3 />, tag: "Markets", date: "Mar 30, 2026", title: "Four jurisdictions, one platform: how ASGARD scales sovereign assurance simultaneously.", href: "#" },
  { art: () => <ReleaseArt2 />, tag: "Policy", date: "Mar 18, 2026", title: "Comments to the EU Commission on the Cyber Resilience Act and sovereign AI procurement.", href: "#" },
  { art: () => <ReleaseArt3 />, tag: "Research", date: "Mar 04, 2026", title: "Adversarial defence against Mythos‑class autonomous models: a layered evaluation framework.", href: "#" },
  { art: () => <ReleaseArt1 />, tag: "Announcements", date: "Feb 19, 2026", title: "FrontierOne emerges from stealth with a $130M Series A led by ex‑DARPA and Cambridge engineers.", href: "#" },
];

const NEWS_FILTERS = ["All", "Announcements", "Policy", "Product", "Engineering", "Research", "Markets"];

const PRESS = [
  { src: "Financial Times", date: "Apr 30, 2026", headline: "FrontierOne emerges with sovereign AI security thesis backed by ex‑DARPA, Cambridge engineers." },
  { src: "The Information", date: "Apr 22, 2026", headline: "Inside ASGARD: the bet that the sovereign AI market is held back by trust, not capacity." },
  { src: "Bloomberg", date: "Apr 12, 2026", headline: "Norway's BW Velora picks FrontierOne as security layer for 120MW NATO‑jurisdiction AI buildout." },
  { src: "TechCrunch", date: "Mar 28, 2026", headline: "Why an asset‑light security cloud may be the most defensible play in sovereign infrastructure." },
  { src: "Politico EU", date: "Mar 14, 2026", headline: "Brussels watches as EU member states move on sovereign AI compute outside US CLOUD Act reach." },
];

const Press = () => (
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
        {PRESS.map((p, i) => (
          <a className="press-item" href="#" key={i}>
            <div className="press-source">{p.src}</div>
            <div className="press-headline">{p.headline}</div>
            <div className="press-date">{p.date}</div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const NewsPage = () => {
  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? RELEASES : RELEASES.filter((r) => r.tag === filter);
  return (
    <section className="section" id="news" data-screen-label="News" style={{ paddingTop: "clamp(56px, 7vw, 96px)" }}>
      <div className="container">
        <div className="news-head">
          <h1 className="news-page-title display">News</h1>
          <a href="#" className="btn-text">RSS feed <span>→</span></a>
        </div>

        <div className="news-filters" role="tablist" aria-label="Filter news by category">
          {NEWS_FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={"news-chip" + (filter === f ? " is-active" : "")}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="releases">
          {filtered.map((r, i) => (
            <a className="release" key={i} href={r.href}>
              <div className="release-art">{r.art()}</div>
              <div className="release-meta">
                <span className="tag">{r.tag}</span>
                <span className="dot"></span>
                <span>{r.date}</span>
              </div>
              <h3 className="release-title">{r.title}</h3>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "var(--ink-3)", textAlign: "center", padding: "48px 0" }}>No posts in this category yet.</p>
        )}
      </div>
    </section>
  );
};

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useApplyTweaks(tweaks);
  return (
    <>
      <Announcement />
      <Nav active="news" />
      <main>
        <NewsPage />
      </main>
      <Footer />
      <SharedTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
