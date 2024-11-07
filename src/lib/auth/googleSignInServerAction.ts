'use server'

import { signIn } from "./authOptions";



export  async function SignInGoogle() {
     try {
          return await signIn("google", {redirectTo : "/"});

          
     } catch (error) {
          throw error 
     }
     
}