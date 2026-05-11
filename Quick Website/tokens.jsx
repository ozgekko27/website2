/* global React, Nav, Footer, Announcement, BrandMark, RingsArt */
/* global TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor */

const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "terracotta",
  "fontPair": "newsreader-geist",
  "primary": "#B8553D"
}/*EDITMODE-END*/;

const PALETTES = {
  terracotta: { primary: "#B8553D", deep: "#8E3F2B", umber: "#704A2E", glow: "#E89878", bg: "#FDFCFA", warm: "#F4F1EA", deepBg: "#0A0807", sand: "#EDE3CC", hairline: "#ECE4D2" },
  ink:        { primary: "#1A1614", deep: "#000000", umber: "#3D332C", glow: "#B8553D", bg: "#FDFCFA", warm: "#F2EDE2", deepBg: "#050403", sand: "#EDE3CC", hairline: "#E8DECC" },
  forest:     { primary: "#3F5E3D", deep: "#2A4128", umber: "#5C6B4A", glow: "#A8B788", bg: "#FBFAF4", warm: "#EFEDDF", deepBg: "#0B100A", sand: "#E2DCC4", hairline: "#E1DCC4" },
  ocean:      { primary: "#1E5A7A", deep: "#13405A", umber: "#2A4252", glow: "#7FB3CC", bg: "#FAFAF6", warm: "#EAEAE0", deepBg: "#050B11", sand: "#D9E1DE", hairline: "#DBDBCF" },
  ember:      { primary: "#D4541C", deep: "#A03806", umber: "#5A2410", glow: "#FFA070", bg: "#FEFAF2", warm: "#F8EDD9", deepBg: "#0C0604", sand: "#F0DEC1", hairline: "#EBDABA" },
};

const FONT_PAIRS = {
  "newsreader-geist": { display: '"Newsreader", Georgia, serif', body: '"Geist", system-ui, sans-serif', mono: '"Geist Mono", ui-monospace, monospace', weight: 380 },
  "playfair-dmsans": { display: '"Playfair Display", Georgia, serif', body: '"DM Sans", system-ui, sans-serif', mono: '"DM Mono", ui-monospace, monospace', weight: 400 },
  "ibmplex": { display: '"IBM Plex Serif", Georgia, serif', body: '"IBM Plex Sans", system-ui, sans-serif', mono: '"IBM Plex Mono", ui-monospace, monospace', weight: 400 },
  "instrument": { display: '"Instrument Serif", Georgia, serif', body: '"Geist", system-ui, sans-serif', mono: '"Geist Mono", ui-monospace, monospace', weight: 400 },
};

function applyTokens(palette, fontPair, primaryOverride) {
  const p = PALETTES[palette] || PALETTES.terracotta;
  const f = FONT_PAIRS[fontPair] || FONT_PAIRS["newsreader-geist"];
  const r = document.documentElement.style;
  r.setProperty("--terra", primaryOverride || p.primary);
  r.setProperty("--terra-deep", p.deep);
  r.setProperty("--umber", p.umber);
  r.setProperty("--bg", p.bg);
  r.setProperty("--bg-warm", p.warm);
  r.setProperty("--bg-deep", p.deepBg);
  r.setProperty("--sand", p.sand);
  r.setProperty("--hairline", p.hairline);
  r.setProperty("--font-display", f.display);
  r.setProperty("--font-body", f.body);
  r.setProperty("--font-mono", f.mono);
  r.setProperty("--display-weight", f.weight);
}

function useApplyTweaks(t) {
  useEffect(() => { applyTokens(t.palette, t.fontPair, t.primary); }, [t.palette, t.fontPair, t.primary]);
}

const SharedTweaks = ({ tweaks, setTweak }) => (
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
          { value: "ocean", label: "Ocean" },
        ]}
      />
      <TweakColor label="Accent override" value={tweaks.primary} onChange={(v) => setTweak("primary", v)} />
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
          { value: "ibmplex", label: "IBM Plex" },
        ]}
      />
    </TweakSection>
  </TweaksPanel>
);

Object.assign(window, { TWEAK_DEFAULTS, PALETTES, FONT_PAIRS, applyTokens, useApplyTweaks, SharedTweaks });
