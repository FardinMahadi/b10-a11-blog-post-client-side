import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../provider/ThemeProvider";

const ErrorPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        theme === "dark"
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      }`}
    >
      <h1 className={`text-6xl font-bold text-red-500`}>404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p
        className={`mt-2 ${
          theme === "dark"
            ? "text-text-secondary-dark"
            : "text-text-secondary-light"
        }`}
      >
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className={`mt-6 px-4 py-2 ${
          theme === "dark"
            ? "bg-primary-dark text-text-light hover:text-text-secondary-light"
            : "bg-primary-light text-text-secondary-dark hover:text-text-dark"
        } text-white rounded-lg hover:bg-blue-600`}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
