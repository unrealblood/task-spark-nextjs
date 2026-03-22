import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // 1. Tell Next.js to delete the session cookie
    (await cookies()).delete('session');

    // Note: You can optionally use the Firebase Admin SDK here to completely 
    // revoke the user's refresh tokens if you want strict security, 
    // but deleting the cookie is the required step for the Next.js app.

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    throw new Error('Error deleting session cookie: ' + error.message);
  }
}