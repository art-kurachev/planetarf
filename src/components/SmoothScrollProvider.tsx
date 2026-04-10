"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = window.requestAnimationFrame(raf);
    };

    rafIdRef.current = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafIdRef.current);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Keep route transitions deterministic: always start new pages at top.
    if (typeof window === "undefined") return;

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      // Lenis keeps an internal scroll limit; after client navigation the DOM height
      // can change without a window resize. Without resize(), wheel scroll may stop
      // short of the real document bottom (e.g. long /isk page).
      let cancelled = false;
      const remeasure = () => {
        if (!cancelled) lenis.resize();
      };
      const raf1 = requestAnimationFrame(() => {
        remeasure();
        requestAnimationFrame(remeasure);
      });
      const t = window.setTimeout(remeasure, 350);
      return () => {
        cancelled = true;
        cancelAnimationFrame(raf1);
        window.clearTimeout(t);
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return <>{children}</>;
}
