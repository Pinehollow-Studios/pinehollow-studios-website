"use client";

import { useEffect } from "react";

/**
 * The page's only client-side behaviour. Renders nothing; wires up:
 *  - html[data-scrolled] once the page has scrolled past 8px (nav background)
 *  - [data-reveal] → [data-in] on first intersection (scroll reveals, once)
 *  - aria-current="page" on nav links whose section sits in the reading band
 *  - .ph-hero[data-offstage] to pause the ambient glow when the hero is gone
 *  - --gx/--gy on [data-spot] surfaces for a pointer spotlight (mouse only)
 * Everything degrades to a static page: without JS nothing is hidden, and
 * under prefers-reduced-motion the observers just mark everything visible.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    root.classList.add("js");

    const cleanups: Array<() => void> = [];

    // ── nav state + scroll-spy (one rAF-throttled scroll handler) ──────
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[data-spy]"));
    const spyTargets = links
      .map((a) => ({ a, el: document.querySelector<HTMLElement>(a.getAttribute("href") ?? "") }))
      .filter((t): t is { a: HTMLAnchorElement; el: HTMLElement } => t.el !== null);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        root.toggleAttribute("data-scrolled", window.scrollY > 8);

        // the section whose top has crossed a reading line 40% down the
        // viewport is the active one — exactly one link, or none in the hero
        const line = window.innerHeight * 0.4;
        let active: HTMLAnchorElement | null = null;
        for (const { a, el } of spyTargets) {
          const r = el.getBoundingClientRect();
          if (r.top <= line && r.bottom > line * 0.5) active = a;
        }
        for (const { a } of spyTargets) {
          if (a === active) a.setAttribute("aria-current", "page");
          else a.removeAttribute("aria-current");
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    // ── scroll reveals (once) ──────────────────────────────────────────
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const showAll = () => reveals.forEach((el) => el.setAttribute("data-in", ""));
    if (reduce || !("IntersectionObserver" in window)) {
      showAll();
    } else {
      const inset = window.innerWidth < 600 ? "-20%" : "-10%";
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        },
        { threshold: 0.15, rootMargin: `0px 0px ${inset} 0px` },
      );
      reveals.forEach((el) => io.observe(el));
      const safety = window.setTimeout(showAll, 3000);
      cleanups.push(() => {
        io.disconnect();
        window.clearTimeout(safety);
      });
    }

    // ── pause ambient glow when the hero is off-screen ─────────────────
    const hero = document.querySelector<HTMLElement>(".ph-hero");
    if (hero && "IntersectionObserver" in window) {
      const stage = new IntersectionObserver(
        ([e]) => hero.toggleAttribute("data-offstage", !(e?.isIntersecting ?? true)),
        { threshold: 0 },
      );
      stage.observe(hero);
      cleanups.push(() => stage.disconnect());
    }

    // ── pointer spotlight on surfaces (mouse only, never under reduce) ──
    if (finePointer && !reduce) {
      let raf = 0;
      const onMove = (ev: PointerEvent) => {
        if (ev.pointerType !== "mouse") return;
        const el = ev.currentTarget as HTMLElement;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--gx", `${ev.clientX - r.left}px`);
          el.style.setProperty("--gy", `${ev.clientY - r.top}px`);
        });
      };
      const spots = Array.from(document.querySelectorAll<HTMLElement>("[data-spot]"));
      spots.forEach((el) => el.addEventListener("pointermove", onMove));
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        spots.forEach((el) => el.removeEventListener("pointermove", onMove));
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
