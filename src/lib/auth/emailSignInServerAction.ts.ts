'use server'

import { signIn } from "./authOptions";



export async function SignInEmail(email:string ) {
   try {
    return await signIn("sendgrid", {
      email, // Pass the email as part of the options
      callbackUrl:"/"
    });
   } catch (error) {
    throw error
   }
 }
 
