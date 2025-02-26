import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div
      className={`bg-background-light dark:bg-background-dark overflow-hidden`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
