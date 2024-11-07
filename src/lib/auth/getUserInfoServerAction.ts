"use server";

import { auth } from "./authOptions";

export async function getUserInfo() {
  const session = await auth();

  // Return user details if available
  if (!session) {
    console.log("session not found",session)
  }else{
    return session;
  }
}
