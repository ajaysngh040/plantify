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
        if (!token) {
          return session;  // Return the session as-is if token is missing
        }
    
        // Attach the user ID from the token to the session
        session.user.id = token.id as string;
        return session;  // Return the modified session object
      },
      async signIn({ account }) {
        // Check if account exists and has a provider property
        if (!account || !account.provider) {
          return false; // Prevent sign-in if account or provider is missing
        }
      
        // Allow sign-in only if there's an OAuth provider (Google) or a magic link (email)
        return account.provider === 'google' || account.provider === 'email';
      }
      
    
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
 