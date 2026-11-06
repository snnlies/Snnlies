import { NextResponse } from 'next/server';

// This will be auto-updated by the sync script
const TUNNEL_URL = 'https://d31bd6901d7d48.lhr.life';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint');
  const userId = searchParams.get('userId');

  try {
    let url = `${TUNNEL_URL}${endpoint}`;
    if (userId) url += `/${userId}`;

    const response = await fetch(url, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to connect' }, { status: 500 });
  }
}
