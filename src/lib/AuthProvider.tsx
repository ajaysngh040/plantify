"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/lib/hooks";
import { initializeAuth, clearAuth } from "@/store/auth/authSlice";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session && session.user) {
      dispatch(
        initializeAuth({
          isAuthenticated: true,
          user: {
            id: session.user.id as string,
            name: session.user.name as string,
            email: session.user.email as string,
          },
        })
      );
    } else {
      dispatch(clearAuth());
    }
  }, [session, dispatch]);

  return <>{children}</>;
}
