import { NextResponse } from 'next/server';
const TUNNEL_URL = 'https://6836961eed1cdf.lhr.life';
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
    const body = await req.json();
    const response = await fetch(`${TUNNEL_URL}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' }, body: JSON.stringify(body) });
    return NextResponse.json(await response.json());
  } catch (error) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
