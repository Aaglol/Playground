// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    
    if (request.nextUrl.pathname === '/user/logout') {
        console.log('request pathname ---> ', request.nextUrl.pathname);
        return NextResponse.next()
    }
    
    if (!request.cookies.has('jwt')) {
        console.warn('request cookies', request.cookies);
        return NextResponse.redirect(new URL('/redirect', request.url))    
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/user/:any*'
}