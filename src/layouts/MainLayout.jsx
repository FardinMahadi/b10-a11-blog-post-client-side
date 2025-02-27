import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div
      className={`bg-background-light dark:bg-background-dark overflow-hidden`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
