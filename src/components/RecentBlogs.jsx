import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recentblogs") //
      .then((res) => {
        setRecentBlogs(res.data);
      })
      .catch((error) => {
        console.error("Error fetching recent blogs:", error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-text-light dark:text-text-dark text-center text-3xl font-bold mb-6">
        Recent Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10">
        {recentBlogs.map((blog, index) => (
          <Link
            to={`/blog/${blog._id}`}
            key={index}
            className="bg-background-secondary-light hover:bg-background-light dark:bg-background-secondary-dark hover:dark:bg-background-dark rounded-lg shadow-md hover:shadow-none overflow-hidden "
          >
            {console.log(blog.image)}
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
