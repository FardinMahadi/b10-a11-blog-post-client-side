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
import BlogDetails from "../pages/BlogDetails";

const loadBlogDetails = async ({ params }) => {
  const response = await fetch(`http://localhost:5000/blog/${params.id}`);
  const data = await response.json();
  return data;
};

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
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: loadBlogDetails,
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
