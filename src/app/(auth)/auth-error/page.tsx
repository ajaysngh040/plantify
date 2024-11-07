import { TriangleAlertIcon } from "lucide-react";
import Link from "next/link";
// import { RxExclamationTriangle } from "react-icons/rx";

const AuthErrorPage: React.FC = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen dark:bg-black">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <TriangleAlertIcon size="64" className="text-red-500" />

          <p className="dark:text-white">{"Oops, something went wrong."}</p>
        </div>
        <div>
          <p className="dark:text-white">
            {"To go back to the sign in page, "}

            <Link
              href="/api/auth/signin"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              className="text-green "
            >
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;
