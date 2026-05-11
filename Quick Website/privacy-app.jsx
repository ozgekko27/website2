/* global React, ReactDOM, LegalLayout, L */

const PrivacyApp = () =>
<LegalLayout
    active="privacy"
    kicker="Legal · Privacy"
    title="Privacy Policy"
    effective="May 10, 2026">

    <L.P>
      FrontierOne Inc. (&ldquo;<strong>FrontierOne</strong>,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit <L.Placeholder>frontierone.ai</L.Placeholder>, contact us, or otherwise interact with our products, services, and content (collectively, the &ldquo;Services&rdquo;).
    </L.P>

    <L.H2 id="information">1. Information We Collect</L.H2>
    <L.P>We collect the following categories of personal information:</L.P>
    <L.UL>
      <L.LI><strong>Identifiers</strong> — name, email address, employer, role, phone number, IP address, and similar identifiers you provide when you request a brief, submit a form, or correspond with us.</L.LI>
      <L.LI><strong>Commercial information</strong> — records of interest in our Services, products requested, and procurement-related correspondence.</L.LI>
      <L.LI><strong>Internet or network activity</strong> — browser type, device information, pages viewed, referring URLs, and interactions with our Services, collected through cookies and similar technologies.</L.LI>
      <L.LI><strong>Professional information</strong> — information about your organization and your role within it, including when you submit job applications.</L.LI>
      <L.LI><strong>Inferences</strong> — inferences drawn from the above to understand interest in our Services.</L.LI>
    </L.UL>

    <L.H2 id="use">2. How We Use Information</L.H2>
    <L.UL>
      <L.LI>To provide, operate, and maintain the Services.</L.LI>
      <L.LI>To respond to inquiries, partner briefs, and procurement requests.</L.LI>
      <L.LI>To send transactional, administrative, and (where permitted) marketing communications.</L.LI>
      <L.LI>To improve the Services, develop new features, and conduct research and analytics.</L.LI>
      <L.LI>To detect, investigate, and prevent fraud, abuse, and security incidents.</L.LI>
      <L.LI>To comply with legal obligations and enforce our agreements.</L.LI>
    </L.UL>

    <L.H2 id="sharing">3. How We Share Information</L.H2>
    <L.P>We do not sell personal information. We may share information with:</L.P>
    <L.UL>
      <L.LI><strong>Service providers</strong> who process information on our behalf under written contracts (e.g., hosting, analytics, email delivery, CRM).</L.LI>
      <L.LI><strong>Affiliates</strong> within the FrontierOne corporate family.</L.LI>
      <L.LI><strong>Professional advisors</strong> such as legal, audit, and compliance counsel.</L.LI>
      <L.LI><strong>Government, regulators, and law enforcement</strong> as required by law or to protect our rights, property, and safety.</L.LI>
      <L.LI><strong>In a corporate transaction</strong>, such as a merger, acquisition, or financing.</L.LI>
    </L.UL>

    <L.H2 id="cookies">4. Cookies & Similar Technologies</L.H2>
    <L.P>
      We use cookies and similar technologies to operate the Services, remember preferences, analyze traffic, and measure campaign effectiveness. You can control cookies through your browser settings; disabling cookies may affect site functionality.
    </L.P>

    <L.H2 id="rights">5. Your Privacy Rights</L.H2>
    <L.H3>California Residents (CCPA / CPRA)</L.H3>
    <L.P>Subject to verification and statutory limits, California residents have the right to:</L.P>
    <L.UL>
      <L.LI>Know what personal information we collect, use, disclose, and (if applicable) sell or share.</L.LI>
      <L.LI>Request deletion of personal information we have collected.</L.LI>
      <L.LI>Request correction of inaccurate personal information.</L.LI>
      <L.LI>Opt out of the sale or sharing of personal information (we do not sell or share for cross-context behavioral advertising).</L.LI>
      <L.LI>Limit use and disclosure of sensitive personal information.</L.LI>
      <L.LI>Be free from retaliation for exercising your rights.</L.LI>
    </L.UL>
    <L.P>
      You may exercise these rights by emailing <L.Placeholder>privacy@frontierone.ai</L.Placeholder>. You may designate an authorized agent in writing. We will respond within the timeframes required by law.
    </L.P>
    <L.H3>Other U.S. State Residents</L.H3>
    <L.P>
      Residents of Colorado, Connecticut, Utah, Virginia, and other states with comprehensive privacy laws may have similar rights to access, delete, correct, and opt out. Submit requests to the address above.
    </L.P>

    <L.H2 id="children">6. Children&rsquo;s Privacy</L.H2>
    <L.P>
      Our Services are directed to businesses and government entities. We do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, please contact us so we can delete it.
    </L.P>

    <L.H2 id="security">7. Data Security</L.H2>
    <L.P>
      We maintain administrative, technical, and physical safeguards designed to protect personal information. No system is perfectly secure; we cannot guarantee absolute security. See our <a href="security.html">Security Policy</a> for more.
    </L.P>

    <L.H2 id="retention">8. Retention</L.H2>
    <L.P>
      We retain personal information for as long as needed to provide the Services and for legitimate business or legal purposes, then delete or anonymize it.
    </L.P>

    <L.H2 id="international">9. International Transfers</L.H2>
    <L.P>
      We are headquartered in the United States. If you access the Services from outside the U.S., your information will be transferred to and processed in the U.S. and other jurisdictions where we or our service providers operate.
    </L.P>

    <L.H2 id="changes">10. Changes to this Policy</L.H2>
    <L.P>
      We may update this Privacy Policy from time to time. We will post the updated version with a new Effective date and, where appropriate, notify you.
    </L.P>

    <L.H2 id="contact">11. Contact</L.H2>
    <L.P>
      <L.Placeholder>FrontierOne Inc.</L.Placeholder><br />
      <L.Placeholder>550 California Street, San Francisco, CA 94104</L.Placeholder><br />
      <L.Placeholder>privacy@frontierone.ai</L.Placeholder>
    </L.P>
  </LegalLayout>;


ReactDOM.createRoot(document.getElementById("root")).render(<PrivacyApp />);
