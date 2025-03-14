import React, { useEffect, useState } from "react";
import BlogsCard from "./../components/BlogsCard";
import axios from "axios";
import Aside from "../components/Aside";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../components/CardSkeleton";

const AllBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://blog-post-server-side.vercel.app/blogs"
        );
        setBlogs(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4 my-20">
        <h1 className="text-3xl font-bold text-center mb-6 text-text-light dark:text-text-dark">
          All Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, idx) => (
                <CardSkeleton key={idx} />
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            {/* Aside component for recent blogs or other content */}
            <Aside />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 my-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-text-light dark:text-text-dark">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {blogs.map((blog, idx) => (
              <BlogsCard key={idx} blog={blog} />
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          {/* Aside component for recent blogs or other content */}
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
