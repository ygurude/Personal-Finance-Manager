import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies as getCookies } from 'next/headers';
import { NextResponse } from 'next/server';

async function handleAuthCallback(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const response = NextResponse.redirect(new URL('/dashboard', requestUrl.origin));

  if (code) {
    const supabase = createRouteHandlerClient({ cookies: getCookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  return response;
}

export const GET = handleAuthCallback;
export const POST = handleAuthCallback;