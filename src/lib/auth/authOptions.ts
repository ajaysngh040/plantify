import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import SendGrid from "next-auth/providers/sendgrid";
import Google from "next-auth/providers/google"
// import { sendVerificationRequest } from "@/lib/authSendRequest"; 

export  const {handlers,signIn,signOut,auth} = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret:process.env.AUTH_SECRET,
  providers: [
    Google({
    clientId:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    }),
    SendGrid({
      apiKey: process.env.AUTH_SENDGRID_KEY,
        from: process.env.EMAIL_FROM,
        // sendVerificationRequest,
        
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
    async session({ session, token }) {
      if (token) {
        session.user.id= token.id as string;
      }
      return session;
    },
    
  },
  
  session: {
    strategy: "jwt", // Change to "database" for database-stored sessions
  },
  
  pages: {
      signIn: '/sign-in',
      error: "/auth-error",
      verifyRequest:"/auth-success"
    },
  
  })
 