import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-white/80">
        At EtherIgnis, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our Web3 ecosystem.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4 text-white/80">
        EtherIgnis is a decentralized platform and does not collect personal data unless explicitly provided by the user (e.g., contact forms or newsletter sign-ups).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Blockchain Transparency</h2>
      <p className="mb-4 text-white/80">
        All on-chain activity is public and immutable. Your wallet address and transactions are visible on the blockchain but are not directly linked to your real-world identity.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies and Analytics</h2>
      <p className="mb-4 text-white/80">
        We may use privacy-friendly analytics tools (like Plausible or Fathom) to understand how users interact with the platform. No personally identifiable information is collected.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4 text-white/80">
        Some DApps or services on EtherIgnis may use third-party APIs or smart contracts. We are not responsible for their privacy practices.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Updates</h2>
      <p className="mb-4 text-white/80">
        We may update this policy periodically. Changes will be reflected on this page with a revised “Last Updated” date.
      </p>

      <p className="mt-6 text-sm text-white/60">Last Updated: July 1, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
