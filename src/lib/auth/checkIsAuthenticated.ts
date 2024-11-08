"use server"

import { auth } from "./authOptions";



export async function checkIsAuthenticated() {
  const session = await auth();
  if(session){
    return !!session;  // Ensures it returns a boolean;
  }
}
