import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import CardSkeleton from "./CardSkeleton";
import { ThemeContext } from "../provider/ThemeProvider";

const RecentBlogs = () => {
  const { theme } = useContext(ThemeContext);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recentblogs")
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
              <CardSkeleton
                key={index}
                baseColor="#2c2c2c"
                highlightColor="#3d3d3d"
              />
            ) : (
              <CardSkeleton
                key={index}
                baseColor="#f0f0f0"
                highlightColor="#e3e3e3"
              />
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
          <div
            key={index}
            className="bg-background-secondary-light hover:bg-background-light dark:bg-background-secondary-dark hover:dark:bg-background-dark rounded-lg shadow-md hover:shadow-none overflow-hidden "
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-text-secondary-light dark:text-text-dark text-xl font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                {blog.short_description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <div className="flex items-center gap-2">
                  <span>{blog.author_name}</span>
                  {blog.reading_time && <span>• {blog.reading_time}</span>}
                </div>
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-gray-600 rounded-full text-sm">
                  {blog.category}
                </span>
                {blog.tags &&
                  blog.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/blog/${blog._id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                >
                  <FaEye /> View Details
                </Link>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add wishlist functionality here
                    console.log("Added to wishlist:", blog._id);
                  }}
                >
                  <FaHeart /> Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
