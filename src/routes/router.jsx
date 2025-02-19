import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddBlogs from "./../pages/AddBlogs";
import AllBlogs from "./../pages/AllBlogs";
import FeaturedBlogs from "./../pages/FeaturedBlogs";
import Wishlist from "./../pages/Wishlist";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addBlog",
        element: <AddBlogs />,
      },
      {
        path: "allBlogs",
        element: <AllBlogs />,
      },
      {
        path: "featuredBlogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
