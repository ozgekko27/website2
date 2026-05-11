/* global React, ReactDOM, LegalLayout, L */

const TermsApp = () =>
<LegalLayout
    active="terms"
    kicker="Legal · Terms"
    title="Terms of Service"
    effective="May 10, 2026">

    <L.P>
      These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to and use of the websites, products, and services (collectively, the &ldquo;Services&rdquo;) provided by FrontierOne Inc. (&ldquo;<strong>FrontierOne</strong>,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the Services, you agree to be bound by these Terms.
    </L.P>

    <L.H2 id="eligibility">1. Eligibility</L.H2>
    <L.P>
      You must be at least 18 years old and authorized to enter into these Terms on behalf of yourself or your organization. The Services are intended for business and government use.
    </L.P>

    <L.H2 id="accounts">2. Accounts</L.H2>
    <L.P>
      You are responsible for safeguarding your account credentials and for all activities that occur under your account. Notify us promptly of any unauthorized use.
    </L.P>

    <L.H2 id="acceptable-use">3. Acceptable Use</L.H2>
    <L.P>You agree not to, and not to permit anyone to:</L.P>
    <L.UL>
      <L.LI>Use the Services to violate any law, regulation, or third-party right.</L.LI>
      <L.LI>Reverse engineer, decompile, or otherwise attempt to derive source code, except as expressly permitted by law.</L.LI>
      <L.LI>Interfere with or disrupt the integrity or performance of the Services.</L.LI>
      <L.LI>Use the Services to develop a competing product or to benchmark without our prior written consent.</L.LI>
      <L.LI>Upload or transmit malware, or use the Services for any unlawful, infringing, harmful, or fraudulent purpose.</L.LI>
      <L.LI>Bypass security or authentication measures.</L.LI>
    </L.UL>

    <L.H2 id="ip">4. Intellectual Property</L.H2>
    <L.P>
      FrontierOne and its licensors own all right, title, and interest in and to the Services, including all related intellectual property. Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for their intended business purpose.
    </L.P>

    <L.H2 id="content">5. Your Content</L.H2>
    <L.P>
      You retain ownership of content you submit. You grant FrontierOne a worldwide, royalty-free license to host, process, and display your content solely as necessary to provide the Services. You represent that you have all necessary rights to grant this license.
    </L.P>

    <L.H2 id="confidentiality">6. Confidentiality</L.H2>
    <L.P>
      Each party will protect the other&rsquo;s confidential information using the same degree of care it uses to protect its own confidential information of like importance (and no less than a reasonable degree of care), and will use such information only as necessary to perform under these Terms.
    </L.P>

    <L.H2 id="fees">7. Fees & Payment</L.H2>
    <L.P>
      Fees, payment terms, and any service-level commitments will be set forth in an order form or written agreement between you and FrontierOne. Except as expressly stated, all fees are non-refundable.
    </L.P>

    <L.H2 id="disclaimers">8. Disclaimers</L.H2>
    <L.P>
      THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY LAW, FRONTIERONE DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
    </L.P>

    <L.H2 id="liability">9. Limitation of Liability</L.H2>
    <L.P>
      TO THE MAXIMUM EXTENT PERMITTED BY LAW, FRONTIERONE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY. FRONTIERONE&rsquo;S AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO FRONTIERONE IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
    </L.P>

    <L.H2 id="indemnification">10. Indemnification</L.H2>
    <L.P>
      You will defend, indemnify, and hold harmless FrontierOne and its affiliates from and against any third-party claims, damages, liabilities, and costs (including reasonable attorneys&rsquo; fees) arising out of your use of the Services, your content, or your breach of these Terms.
    </L.P>

    <L.H2 id="termination">11. Termination</L.H2>
    <L.P>
      We may suspend or terminate your access to the Services if you breach these Terms or if required to protect the Services, our users, or third parties. You may stop using the Services at any time. Sections that by their nature should survive termination will survive.
    </L.P>

    <L.H2 id="governing-law">12. Governing Law & Venue</L.H2>
    <L.P>
      These Terms are governed by the laws of the State of <L.Placeholder>Delaware</L.Placeholder>, without regard to conflict-of-laws principles. Any dispute will be brought exclusively in the state or federal courts located in <L.Placeholder>San Francisco County, California</L.Placeholder>, and the parties consent to personal jurisdiction there.
    </L.P>

    <L.H2 id="disputes">13. Dispute Resolution</L.H2>
    <L.P>
      The parties will first attempt to resolve any dispute informally. If unresolved within 30 days, either party may bring a claim in the courts identified above. Each party waives any right to a jury trial and to participate in any class action.
    </L.P>

    <L.H2 id="export">14. Export & Sanctions</L.H2>
    <L.P>
      You agree to comply with all U.S. and foreign export-control and sanctions laws, including those administered by the U.S. Department of Commerce and the Office of Foreign Assets Control.
    </L.P>

    <L.H2 id="changes">15. Changes to these Terms</L.H2>
    <L.P>
      We may modify these Terms from time to time. Changes will be posted with an updated Effective date. Continued use of the Services after changes constitutes acceptance.
    </L.P>

    <L.H2 id="contact">16. Contact</L.H2>
    <L.P>
      <L.Placeholder>FrontierOne Inc.</L.Placeholder><br />
      <L.Placeholder>550 California Street, San Francisco, CA 94104</L.Placeholder><br />
      <L.Placeholder>legal@frontierone.ai</L.Placeholder>
    </L.P>
  </LegalLayout>;


ReactDOM.createRoot(document.getElementById("root")).render(<TermsApp />);
