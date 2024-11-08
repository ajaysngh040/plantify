"use client";
import { useState, useTransition } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { initializeAuth } from "@/store/auth/authSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInGoogle } from "@/lib/auth/googleSignInServerAction";
import { SignInEmail } from "@/lib/auth/emailSignInServerAction.ts";
import { useSession } from "next-auth/react";

export function SignInForm() {
  const [formdata, setFormdata] = useState({ email: "" });
  const [isPending, startTransition] = useTransition();
  const dispatch = useAppDispatch();
  const { data: session } = useSession();

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      await SignInEmail(formdata.email);
    });

    if (!session) {
      console.log("You are not authorized");
    } else {
      dispatch(
        initializeAuth({
          isAuthenticated: true,
          user: {
            id: session?.user?.id as string,
            name: session?.user?.name as string,
            email: session?.user?.email as string,
          },
        })
      );
    }
  };

  const handleGoogleLogin = async () => {
    await SignInGoogle();

    if (!session) {
      console.log("session not found");
    } else {
      dispatch(
        initializeAuth({
          isAuthenticated: true,
          user: {
            id: session?.user?.id as string,
            name: session?.user?.name as string,
            email: session?.user?.email as string,
          },
        })
      );
    }
  };

  return (
    <Card className="mx-auto max-w-sm dark:bg-black">
      <CardHeader>
        <CardTitle className="text-2xl dark:text-white">Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleEmailLogin} className="grid gap-2">
          <Label htmlFor="email" className="dark:text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="dark:bg-black dark:text-white"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormdata({ email: e.target.value })
            }
            disabled={isPending}
            required
          />
          <Button
            type="submit"
            className="w-full bg-green text-white hover:bg-lightGreen"
          >
            Sign in with Magic Link
          </Button>
        </form>
        <Button
          type="button"
          className="w-full bg-green text-white hover:bg-lightGreen mt-4"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </Button>
      </CardContent>
    </Card>
  );
}
