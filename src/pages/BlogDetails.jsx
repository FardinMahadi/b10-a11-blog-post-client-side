import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";
import Aside from "../components/Aside";
import fallbackAvatar from "../assets/user.png";
import CommentSection from "../components/CommentSection";

const BlogDetails = () => {
  const blog = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 my-20">
        <p>Error loading blog: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 py-8 my-20">
        <div className="md:col-span-2">
          <CardSkeleton />
        </div>
        <div className="md:col-span-1">
          {[1, 2, 3].map((index) => (
            <CardSkeleton key={index} className="mb-6" />
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
        <div>
          {" "}
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">
              {blog.title}
            </h1>
            <div className="flex items-center text-text-light dark:text-text-secondary-dark mb-4">
              <img
                src={blog.author_avatar || fallbackAvatar}
                alt={`Avatar of ${blog.author_name}`}
                className="w-8 rounded-full mr-4"
              />
              <span className="mr-4">By {blog.author_name}</span>
              <span className="mr-4">•</span>
              <span className="mr-4">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="mr-4">•</span>
              <span>{blog.category}</span>
            </div>
            <img
              src={blog.image}
              alt={`Image for ${blog.title}`}
              className="w-full object-cover rounded-lg mb-6"
            />
            <p className="text-lg mb-6 text-text-light dark:text-text-secondary-dark">
              {blog.description}
            </p>
          </div>
          <div className="prose max-w-none">{blog.content}</div>
        </div>

        {/* Comment section */}
        <div>
          <CommentSection blogId={blog._id} blogWriter={blog.author_email} />
        </div>
      </main>

      {/* aside */}
      <Aside />
    </div>
  );
};

export default BlogDetails;
