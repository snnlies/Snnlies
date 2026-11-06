import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Snnlies - Enterprise Discord Automation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          {/* Cloud Logo SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#7bd0ff" />
                <stop offset="100%" stop-color="#3b99ff" />
              </linearGradient>
            </defs>
            <g fill="url(#blueGrad)">
              <circle cx="50" cy="30" r="18" /><circle cx="68" cy="40" r="18" /><circle cx="68" cy="60" r="18" />
              <circle cx="50" cy="70" r="18" /><circle cx="32" cy="60" r="18" /><circle cx="32" cy="40" r="18" />
            </g>
            <circle cx="42" cy="45" r="4.5" fill="#1a4066" /><circle cx="60" cy="48" r="4.5" fill="#1a4066" />
            <path d="M 44 55 Q 52 65 60 55" fill="none" stroke="#1a4066" stroke-width="4.5" stroke-linecap="round" />
          </svg>
          <h1 style={{ fontSize: '80px', color: 'white', fontWeight: 'bold', letterSpacing: '-0.05em' }}>
            Snnlies®
          </h1>
        </div>
        <p style={{ fontSize: '36px', color: '#a3a3a3', maxWidth: '800px', textAlign: 'center', lineHeight: 1.2 }}>
          The #1 Enterprise Discord Automation & AI Platform
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
          <span style={{ background: '#3b99ff', color: 'white', padding: '12px 24px', borderRadius: '30px', fontSize: '24px' }}>Mega Templates</span>
          <span style={{ background: '#222', color: 'white', padding: '12px 24px', borderRadius: '30px', fontSize: '24px' }}>AI Workspace</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
