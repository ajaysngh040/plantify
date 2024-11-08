import React from "react";
import { SignInForm } from "@/app/(auth)/sign-in/signInForm";
import { redirect } from "next/navigation";

import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";

const SignInPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();
  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center px-4 dark:bg-black">
        <SignInForm />
      </div>
    );
  } else {
    redirect("/dashboard");
  }
};

export default SignInPage;
