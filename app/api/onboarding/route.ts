import { NextResponse } from 'next/server';
const TUNNEL_URL = 'https://1d6339516a5689.lhr.life';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await fetch(`${TUNNEL_URL}/api/onboarding`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    return NextResponse.json({ success: true });
  } catch (error) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
