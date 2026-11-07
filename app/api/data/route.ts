import { NextResponse } from 'next/server';
const TUNNEL_URL = 'https://301d4a7affcaf4.lhr.life';

// Endpoints that perform privileged bot actions. Their shared secret lives
// ONLY on the server (BOT_API_SECRET env var) and is attached here —
// never in browser code, where anyone could read it.
const PROTECTED_ENDPOINTS = ['/api/broadcast', '/api/deploy'];

function getSession(req: Request) {
  const header = req.headers.get('cookie') || '';
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === 'snnlies_session') return v.join('=');
  }
  return null;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint');
  const userId = searchParams.get('userId');
  try {
    let url = `${TUNNEL_URL}${endpoint}`;
    if (userId) url += `/${userId}`;
    const response = await fetch(url, { headers: { 'ngrok-skip-browser-warning': 'true' }, cache: 'no-store' });
    return NextResponse.json(await response.json());
  } catch (error) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint');
  try {
    const body = await req.json().catch(() => ({} as Record<string, unknown>));
    // Never trust a secret sent from the browser.
    if (body && typeof body === 'object') delete (body as Record<string, unknown>).secret;

    if (endpoint && PROTECTED_ENDPOINTS.includes(endpoint)) {
      if (!getSession(req)) {
        return NextResponse.json({ error: 'Login required' }, { status: 401 });
      }
      const secret = process.env.BOT_API_SECRET;
      if (!secret) {
        return NextResponse.json({ error: 'Server is not configured for this action yet' }, { status: 500 });
      }
      (body as Record<string, unknown>).secret = secret;
    }

    const response = await fetch(`${TUNNEL_URL}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' }, body: JSON.stringify(body) });
    return NextResponse.json(await response.json());
  } catch (error) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
