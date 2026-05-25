'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let raf: number;
    (async () => {
      const Lenis = (await import('lenis')).default;
      const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      lenisRef.current = lenis;
      function animate(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      }
      raf = requestAnimationFrame(animate);
    })();
    return () => {
      cancelAnimationFrame(raf);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
