import React, { useContext } from "react";
import MyNavbar from "../components/MyNavbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../provider/ThemeProvider";

const AuthLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-2 ${
        theme === "dark" ? "bg-background-dark" : "bg-background-light"
      }`}
    >
      <MyNavbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
