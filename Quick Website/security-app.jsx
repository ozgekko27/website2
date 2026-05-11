/* global React, ReactDOM, LegalLayout, L */

const SecurityApp = () =>
<LegalLayout
    active="security"
    kicker="Legal · Security"
    title="Security at FrontierOne"
    effective="May 10, 2026">

    <L.P>
      Security is foundational to everything FrontierOne builds. Our ASGARD platform is designed for the highest-assurance environments, and our internal program reflects the same standards. This page outlines our approach, controls, and how to report a vulnerability.
    </L.P>

    <L.H2 id="program">1. Security Program</L.H2>
    <L.P>
      We operate a defense-in-depth security program aligned to <L.Placeholder>NIST SP 800-53 / ISO/IEC 27001</L.Placeholder>. The program is overseen by our Chief Security Officer and reviewed by the Board on a recurring basis.
    </L.P>

    <L.H2 id="compliance">2. Compliance & Attestations</L.H2>
    <L.UL>
      <L.LI><strong>SOC 2 Type II</strong> — <L.Placeholder>in progress / target Q4 2026</L.Placeholder></L.LI>
      <L.LI><strong>ISO/IEC 27001</strong> — <L.Placeholder>in progress</L.Placeholder></L.LI>
      <L.LI><strong>FedRAMP</strong> — <L.Placeholder>roadmap</L.Placeholder></L.LI>
      <L.LI><strong>GDPR / UK GDPR</strong> — operational controls in place for EU and UK customer data.</L.LI>
    </L.UL>
    <L.P>
      Reports and attestations are available to customers and prospects under NDA. Contact <L.Placeholder>trust@frontierone.ai</L.Placeholder> to request.
    </L.P>

    <L.H2 id="encryption">3. Encryption</L.H2>
    <L.UL>
      <L.LI><strong>In transit</strong> — TLS 1.2+ for all external endpoints; mTLS between internal services.</L.LI>
      <L.LI><strong>At rest</strong> — AES-256 encryption for production data stores and backups.</L.LI>
      <L.LI><strong>Key management</strong> — keys managed via dedicated KMS with role separation and rotation.</L.LI>
    </L.UL>

    <L.H2 id="access">4. Access Control</L.H2>
    <L.UL>
      <L.LI>Least-privilege access enforced through role-based access control.</L.LI>
      <L.LI>SSO with mandatory phishing-resistant multi-factor authentication for all employees.</L.LI>
      <L.LI>Just-in-time elevation with full audit logging for production access.</L.LI>
      <L.LI>Quarterly access reviews and prompt deprovisioning on role change or departure.</L.LI>
    </L.UL>

    <L.H2 id="sdlc">5. Secure Development</L.H2>
    <L.UL>
      <L.LI>Mandatory peer review for all production changes.</L.LI>
      <L.LI>Static analysis, software-composition analysis, and secret scanning in CI.</L.LI>
      <L.LI>Dependency-pinning and reproducible builds.</L.LI>
      <L.LI>Security training for all engineers, with role-specific training for those handling sensitive systems.</L.LI>
    </L.UL>

    <L.H2 id="testing">6. Vulnerability Management & Testing</L.H2>
    <L.UL>
      <L.LI>Continuous vulnerability scanning across infrastructure and applications.</L.LI>
      <L.LI>Independent penetration tests at least annually.</L.LI>
      <L.LI>Defined SLAs for remediation by severity.</L.LI>
    </L.UL>

    <L.H2 id="ir">7. Incident Response</L.H2>
    <L.P>
      We maintain a documented incident-response plan that is tested at least annually. In the event of a security incident affecting your data, we will notify you in accordance with applicable law and our contractual commitments.
    </L.P>

    <L.H2 id="resilience">8. Business Continuity & Disaster Recovery</L.H2>
    <L.P>
      Production systems are deployed across availability zones with documented RPO and RTO objectives. Backups are encrypted, monitored, and restoration-tested on a regular schedule.
    </L.P>

    <L.H2 id="subprocessors">9. Subprocessors</L.H2>
    <L.P>
      A current list of subprocessors that may process customer data on our behalf is available at <L.Placeholder>frontierone.ai/subprocessors</L.Placeholder>. We give advance notice of material changes.
    </L.P>

    <L.H2 id="disclosure">10. Responsible Disclosure</L.H2>
    <L.P>
      We welcome reports of security issues from researchers and the broader community. If you believe you have found a vulnerability, please contact us at <L.Placeholder>security@frontierone.ai</L.Placeholder> with:
    </L.P>
    <L.UL>
      <L.LI>A description of the issue and its potential impact.</L.LI>
      <L.LI>Steps to reproduce, including proof-of-concept if possible.</L.LI>
      <L.LI>Any relevant logs, screenshots, or supporting material.</L.LI>
    </L.UL>
    <L.P>
      We commit to acknowledging valid reports within <L.Placeholder>3 business days</L.Placeholder>, working with you on remediation, and providing public credit when desired. Please do not access data beyond what is necessary to demonstrate the issue, and refrain from public disclosure until we have had a reasonable opportunity to remediate.
    </L.P>

    <L.H2 id="contact">11. Contact</L.H2>
    <L.P>
      <L.Placeholder>security@frontierone.ai</L.Placeholder> &nbsp;·&nbsp; <L.Placeholder>trust@frontierone.ai</L.Placeholder>
    </L.P>
  </LegalLayout>;


ReactDOM.createRoot(document.getElementById("root")).render(<SecurityApp />);
