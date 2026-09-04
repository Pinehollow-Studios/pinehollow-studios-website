"use client";

import { useEffect, useRef, useState } from "react";

type State = "idle" | "copied" | "error";

/** mailto link as the primary action, with a copy-to-clipboard button beside it. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 1200);
  };

  const label = state === "copied" ? "Copied" : state === "error" ? "Couldn't copy" : "Copy";

  return (
    <div className="ph-mail-row">
      <a href={`mailto:${email}`} className="ph-mail">
        {email}
      </a>
      <button
        type="button"
        className="ph-copy"
        onClick={copy}
        data-state={state}
        aria-label={state === "copied" ? "Copied email address" : "Copy email address"}
        aria-live="polite"
      >
        <span className="ph-copy-icon" aria-hidden="true">
          {state === "copied" ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8.5 6.5 12 13 4.5" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5.5" y="5.5" width="8" height="8" rx="2" />
              <path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
            </svg>
          )}
        </span>
        <span>{label}</span>
      </button>
    </div>
  );
}
