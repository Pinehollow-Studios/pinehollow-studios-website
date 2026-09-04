import Link from "next/link";
import { PinehollowMark } from "@/components/mark";

export function Nav() {
  return (
    <header className="ph-nav">
      <div className="ph-pill">
        <Link href="/" className="ph-brand" aria-label="Pinehollow Studios, home">
          <PinehollowMark size={20} colour="var(--lp-fg)" />
          <span>Pinehollow</span>
        </Link>
        <nav className="ph-pill-links" aria-label="Primary">
          <a href="#vestige" data-spy>Vestige</a>
          <a href="#contact" data-spy>Contact</a>
        </nav>
        <a href="#contact" className="ph-pill-cta">Say hello</a>
      </div>
    </header>
  );
}
