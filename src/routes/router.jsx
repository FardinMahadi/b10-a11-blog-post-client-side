import { createBrowserRouter } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar />,
  },
]);

export default router;
