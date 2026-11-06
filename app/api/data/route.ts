import { NextResponse } from 'next/server';
const TUNNEL_URL = 'https://6f382bc3083e50.lhr.life';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint');
  const userId = searchParams.get('userId');
  try {
    let url = `${TUNNEL_URL}${endpoint}`;
    if (userId) url += `/${userId}`;
    const response = await fetch(url, { headers: { 'ngrok-skip-browser-warning': 'true' } });
    return NextResponse.json(await response.json());
  } catch (error) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
