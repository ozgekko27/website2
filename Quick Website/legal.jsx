/* global React, Nav, Footer */

const LegalLayout = ({ title, effective, kicker, children, active }) =>
<>
    <Nav active={active} />
    <main>
      <section className="legal-hero">
        <div className="legal-container">
          <div className="legal-kicker">{kicker}</div>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-effective">Effective {effective}</p>
        </div>
      </section>
      <section className="legal-body">
        <div className="legal-container legal-prose">
          {children}
          <hr className="legal-rule" />
          <p className="legal-meta">

        </p>
        </div>
      </section>
    </main>
    <Footer />
  </>;


const L = {
  H2: ({ children, id }) => <h2 className="legal-h2" id={id}>{children}</h2>,
  H3: ({ children }) => <h3 className="legal-h3">{children}</h3>,
  P: ({ children }) => <p className="legal-p">{children}</p>,
  UL: ({ children }) => <ul className="legal-ul">{children}</ul>,
  LI: ({ children }) => <li>{children}</li>,
  Placeholder: ({ children }) => <span className="legal-placeholder">[{children}]</span>
};

Object.assign(window, { LegalLayout, L });