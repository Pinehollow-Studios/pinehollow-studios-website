import { COMPANY, EMAIL, VESTIGE_URL } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ph-foot">
      <div className="lp-container">
        <div className="ph-foot-top">
          <span>Pinehollow Studios</span>
          <nav className="ph-foot-links" aria-label="Footer">
            <a href="#vestige">Vestige</a>
            <a href="#contact">Contact</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`${VESTIGE_URL}/privacy`} target="_blank" rel="noopener noreferrer">
              Vestige privacy policy
            </a>
          </nav>
        </div>
        <div className="ph-foot-legal">
          <p>
            © {year} {COMPANY.name}. Registered in {COMPANY.jurisdiction}, company
            number {COMPANY.number}. Registered office: {COMPANY.address}.
          </p>
          <p>
            No cookies, no analytics. If you email us we keep your message so we can reply,
            and nothing else. Vestige has its own privacy policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
