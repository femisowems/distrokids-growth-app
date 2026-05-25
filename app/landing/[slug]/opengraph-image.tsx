import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, #07111f 0%, #0d1b31 50%, #111827 100%)', color: 'white', padding: 64 }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: 24, background: 'linear-gradient(135deg, #7df9ff, #ff7a59)' }} />
          <div style={{ fontSize: 28, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.7 }}>DistroKid Growth OS</div>
        </div>
        <div style={{ fontSize: 96, lineHeight: 1, fontWeight: 600, maxWidth: 900 }}>{params.slug}</div>
        <div style={{ fontSize: 32, opacity: 0.72 }}>Launch pages built for conversion, attribution, and cinematic motion.</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
