// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    
    if (request.url === '/user/logout') {
        return NextResponse.next()
    }
    
    if (!request.cookies.has('jwt')) {
        console.warn('request', request.cookies);
        return NextResponse.redirect(new URL('/redirect', request.url))    
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/user/:any*'
}