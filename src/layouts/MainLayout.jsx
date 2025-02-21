import MyNavbar from "../components/MyNavbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={`bg-background-light dark:bg-background-dark`}>
      <div className="container mx-auto p-2">
        <MyNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
