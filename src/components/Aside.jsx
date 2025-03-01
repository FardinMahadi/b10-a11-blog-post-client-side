import axios from "axios";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import { Link } from "react-router-dom";

const Aside = () => {
  const [asideBlog, setAsideBlog] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/recentblogs").then((res) => {
      setAsideBlog(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="md:col-span-1">
        {[1, 2, 3].map((index) => (
          <CardSkeleton key={index} className="mb-6" />
        ))}
      </div>
    );
  }

  return (
    <aside className="md:col-span-1">
      {asideBlog?.map((blog) => (
        <Link to={`/blog/${blog._id}`} key={blog._id}>
          <div className="mb-6 p-4 rounded-lg shadow-sm hover:dark:text-white border border-transparent hover:border-black hover:dark:border-white box-content">
            <h3 className="text-xl font-semibold mb-2 text-text-secondary-light dark:text-text-secondary-dark">
              {blog.title}
            </h3>
            <p className="text-text-secondary-light dark:text-gray-600 line-clamp-2">
              {blog.short_description}
            </p>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Aside;
