import { useContext } from "react";
import MyNavbar from "../components/MyNavbar";
import { ThemeContext } from "../provider/ThemeProvider";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
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

export default MainLayout;
