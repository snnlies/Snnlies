import { NextResponse } from 'next/server';

// Retired: template deployment now goes through /api/data, which attaches
// the bot secret on the server. This legacy route embedded the secret in
// source code and pointed at a stale tunnel URL, so it no longer forwards.
export async function POST() {
  return NextResponse.json({ error: 'This endpoint has moved. Please use the Templates page.' }, { status: 410 });
}
