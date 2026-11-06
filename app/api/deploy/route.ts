import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { guildId, templateName } = await req.json();
    const BOT_API_URL = 'https://6f382bc3083e50.lhr.life/api/deploy';

    const response = await fetch(BOT_API_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true' 
      },
      body: JSON.stringify({
        guildId,
        templateName,
        secret: 'snnlies_super_secret_2026'
      })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to connect to bot' }, { status: 500 });
  }
}
