"use server"

import { auth } from "./authOptions";



export async function checkIsAuthenticated() {
  const session = await auth();

  return session ? true : false;
}
