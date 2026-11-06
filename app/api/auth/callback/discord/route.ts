import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) return NextResponse.json({ error: 'No code provided' }, { status: 400 });

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = 'https://snnlies.vercel.app/api/auth/callback/discord';

  try {
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId!, client_secret: clientSecret!,
        grant_type: 'authorization_code', code, redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (tokenData.error) return NextResponse.json(tokenData, { status: 400 });

    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const userData = await userResponse.json();

    // SAVE SESSION COOKIE
    const cookieStore = await cookies();
    cookieStore.set('snnlies_session', userData.id, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    // Redirect to templates page after successful login
    return NextResponse.redirect('https://snnlies.vercel.app/templates');
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
