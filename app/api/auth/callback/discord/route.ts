import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) return NextResponse.json({ error: 'No code provided' }, { status: 400 });

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = 'https://snnlies.vercel.app/api/auth/callback/discord';

  if (!clientId || !clientSecret) {
    return new NextResponse('<h1>Error: Missing Discord API Keys in Vercel Settings</h1>', { status: 500, headers: { 'Content-Type': 'text/html' } });
  }

  try {
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (tokenData.error) {
      return new NextResponse(`<h1>Discord Error: ${tokenData.error_description}</h1>`, { status: 400, headers: { 'Content-Type': 'text/html' } });
    }

    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const userData = await userResponse.json();

    // Create the response and redirect to dashboard
    const response = NextResponse.redirect('https://snnlies.vercel.app/dashboard');

    // FIXED: Removed httpOnly so the frontend can read the user ID, set secure cookies
    response.cookies.set('snnlies_session', userData.id, {
      httpOnly: false, // Allows JS to read the user ID
      secure: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return response;
  } catch (error) {
    return new NextResponse('<h1>Internal Server Error</h1>', { status: 500, headers: { 'Content-Type': 'text/html' } });
  }
}
