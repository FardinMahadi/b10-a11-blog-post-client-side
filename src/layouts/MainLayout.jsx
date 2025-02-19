import { useContext } from "react";
import MyNavbar from "../components/MyNavbar";
import { ThemeContext } from "../provider/ThemeProvider";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="p-2 bg-background-light dark:bg-background-dark">
      <MyNavbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
