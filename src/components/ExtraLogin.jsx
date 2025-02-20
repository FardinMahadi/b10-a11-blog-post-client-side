import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const ExtraLogin = () => {
  const { handleGoogleLogin } = useContext(AuthContext);

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleGoogleLogin}
        className="btn w-full flex items-center justify-center gap-2 p-2 rounded-lg transition border-2 dark:border-background-dark text-text-light dark:text-text-dark bg-background-light hover:text-text-dark dark:bg-gray-800 hover:bg-background-dark dark:hover:bg-background-dark"
      >
        <FcGoogle className="h-5 w-5" /> Sign in with Google
      </button>
    </div>
  );
};

export default ExtraLogin;
