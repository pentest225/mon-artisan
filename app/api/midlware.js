import NextAuth from 'next-auth';
import { authConfig } from './auth.confiig';

export function middleware(request) {
   //ajout de cookies
    let cookie = request.cookies.get('nextjs')
    console.log(cookie) 
    const allCookies = request.cookies.getAll()
    console.log(allCookies)
    request.cookies.has('nextjs') 
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') 

  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie)
  return response

    const currentUser = request.cookies.get('currentUser')?.value
 
  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
 
  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
