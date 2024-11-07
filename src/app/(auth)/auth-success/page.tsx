import { CheckCircle } from "lucide-react";
import Link from "next/link";

const AuthSuccessPage: React.FC = () => {
  return (
    <div className="container-lg min-h-screen flex justify-center items-center  dark:bg-black">
      <div className="flex justify-center items-center flex-col h-full w-full">
        <div className="flex justify-center items-center flex-col">
          <CheckCircle size="64" className="text-green  " />
          <p className="dark:text-white">
            {"Success! Please check your email inbox for sign in link."}
          </p>
        </div>
        <div>
          <p className="dark:text-white">
            {
              "Didn't receive an email? To go back to the sign-in page and try again, "
            }

            <Link
              href="/api/auth/signin"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              className="text-green hover:text-lightGreen-dark"
            >
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessPage;
