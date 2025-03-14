import { Link } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const BlogsCard = ({ blog }) => {
  const { user } = useContext(AuthContext);

  const handleWishList = (e) => {
    e.preventDefault();
    if (user) {
      axios
        .patch("https://blog-post-server-side.vercel.app/wishlist", {
          email: user.email,
          _id: blog?._id,
        })
        .then((response) => {
          console.log("Wishlist updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating wishlist:", error.message);
        });
    } else {
      console.log("User is not logged in.");
    }
  };

  return (
    <div className="bg-background-secondary-light hover:bg-background-light dark:bg-background-secondary-dark hover:dark:bg-background-dark rounded-lg shadow-md hover:shadow-none overflow-hidden ">
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
            onClick={handleWishList}
          >
            <FaHeart /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
