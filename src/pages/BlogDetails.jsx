import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";

const BlogDetails = () => {
  const blog = useLoaderData();
  const [loading, setLoading] = useState(true);

  const [asideBlog, setAsideBlog] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/recentblogs").then((res) => {
      setAsideBlog(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 py-8 my-20">
        <div className="md:col-span-2">
          <CardSkeleton baseColor="#f0f0f0" highlightColor="#e3e3e3" />
        </div>
        <div className="md:col-span-1">
          {[1, 2, 3].map((index) => (
            <CardSkeleton
              key={index}
              baseColor="#f0f0f0"
              highlightColor="#e3e3e3"
              className="mb-6"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8 my-20">
        <p>Blog not found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 py-8 my-20">
      <main className="md:col-span-2">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">
            {blog.title}
          </h1>
          <div className="flex items-center text-text-light dark:text-text-secondary-dark mb-4">
            <span className="mr-4">By {blog.author_name}</span>
            <span className="mr-4">•</span>
            <span className="mr-4">
              {new Date(blog.date).toLocaleDateString()}
            </span>
            <span className="mr-4">•</span>
            <span>{blog.category}</span>
          </div>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full object-cover rounded-lg mb-6"
          />
          <p className="text-lg mb-6 text-text-light dark:text-text-secondary-dark">
            {blog.description}
          </p>
        </div>
        <div className="prose max-w-none">{blog.content}</div>
      </main>

      {/* aside */}
      <aside className="md:col-span-1">
        {asideBlog?.map((blog) => (
          <div
            key={blog._id}
            className="mb-6 p-4 rounded-lg shadow-sm hover:dark:text-white border border-transparent hover:border-black hover:dark:border-white box-content"
          >
            <h3 className="text-xl font-semibold mb-2 text-text-secondary-light dark:text-text-secondary-dark">
              {blog.title}
            </h3>
            <p className="text-text-secondary-light dark:text-gray-600 line-clamp-2">
              {blog.short_description}
            </p>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default BlogDetails;
