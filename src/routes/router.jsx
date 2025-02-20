import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddBlogs from "./../pages/AddBlogs";
import AllBlogs from "./../pages/AllBlogs";
import FeaturedBlogs from "./../pages/FeaturedBlogs";
import Wishlist from "./../pages/Wishlist";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "./../layouts/AuthLayout";
import SignUp from "./../pages/SignUp";
import Login from "../pages/Login";

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
  // for auth route
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
