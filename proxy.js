import { NextResponse } from "next/server";

export function proxy(request) {
    // Check if the secure session cookie exists
    const session = request.cookies.get('session')?.value;

    console.log("Session Cookie Value");
    console.log(request.cookies.get('session')?.value);

    // If there is no session cookie and the user is trying to access the home route
    if (!session && request.nextUrl.pathname === '/') {
    // Redirect them to the login page
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    // If the cookie exists, let them proceed to the route
    return NextResponse.next();
}

// Specify which routes this middleware should run on
export const config = {
    matcher: ['/'], // Add other protected routes here like '/dashboard/:path*'
};