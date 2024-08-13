import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

interface Routes {
  [key: string]: boolean;
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request
  });

  // const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_KEY!, {
  //   cookies: {
  //     getAll() {
  //       return request.cookies.getAll();
  //     },
  //     setAll(cookiesToSet) {
  //       cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
  //       supabaseResponse = NextResponse.next({
  //         request
  //       });
  //       cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
  //     }
  //   }
  // });

  // const {
  //   data: { user }
  // } = await supabase.auth.getUser();

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/main', request.url));
  }

  return supabaseResponse;
}
