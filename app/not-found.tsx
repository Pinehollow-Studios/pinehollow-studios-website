import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="lp-container ph-404">
      <span className="ph-k">404</span>
      <h1 className="ph-h2">Nothing here.</h1>
      <div>
        <Link href="/" className="ph-btn ph-btn-ghost">Back to the studio</Link>
      </div>
    </section>
  );
}
