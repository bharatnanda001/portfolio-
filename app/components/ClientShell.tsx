'use client';

import dynamic from 'next/dynamic';

const CursorGlow = dynamic(() => import('./CursorGlow'), { ssr: false });
const SmoothScroll = dynamic(() => import('./SmoothScroll'), { ssr: false });
const Scene = dynamic(() => import('./Scene'), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CursorGlow />
      <Scene />
      {children}
    </SmoothScroll>
  );
}
