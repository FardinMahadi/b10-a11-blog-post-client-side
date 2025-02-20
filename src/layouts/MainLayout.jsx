import MyNavbar from "../components/MyNavbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={`bg-background-light dark:bg-background-dark`}>
      <div className="p-2">
        <MyNavbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
