import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../provider/ThemeProvider";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-background-dark" : "bg-background-light"
      }`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
