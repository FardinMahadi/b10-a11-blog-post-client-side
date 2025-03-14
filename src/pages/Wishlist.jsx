import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import BlogsCard from "../components/BlogsCard";
import CardSkeleton from "../components/CardSkeleton";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlistBlog, setWishlistBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user) {
        try {
          const res = await axios.get(
            `https://blog-post-server-side.vercel.app/wishlist?email=${user.email}`
          );
          console.log("Fetched wishlist:", res.data);
          setWishlistBlog(res.data);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
          setError("Failed to fetch wishlist. Please try again later.");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [user]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 my-20">
        <h1 className="text-3xl font-bold text-center mb-6 text-text-light dark:text-text-dark">
          Wishlist
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <CardSkeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 my-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-text-light dark:text-text-dark">
        Wishlist
      </h1>
      {error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistBlog.map((blog) => (
            <BlogsCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
