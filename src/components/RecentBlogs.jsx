import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import CardSkeleton from "./CardSkeleton";
import { ThemeContext } from "../provider/ThemeProvider";
import BlogsCard from "./BlogsCard";

const RecentBlogs = () => {
  const { theme } = useContext(ThemeContext);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://blog-post-server-side.vercel.app/recentblogs")
      .then((res) => {
        setRecentBlogs(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recent blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <h2 className="text-text-light dark:text-text-dark text-center text-3xl font-bold mb-6">
          Recent Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10">
          {[1, 2, 3, 4, 5, 6].map((index) =>
            theme == "dark" ? (
              <CardSkeleton key={index} />
            ) : (
              <CardSkeleton key={index} />
            )
          )}
        </div>
      </div>
    );
  }

  if (!recentBlogs) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-text-light dark:text-text-dark text-center text-3xl font-bold mb-6">
        Recent Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10">
        {recentBlogs.map((blog, index) => (
          <BlogsCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
