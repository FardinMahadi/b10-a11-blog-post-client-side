import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./../provider/AuthProvider";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

const PutComment = ({ blogId }) => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in to post a comment.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:5000/comment", {
        blogId,
        userId: user._id,
        userImg: user.photoURL,
        userName: user.displayName,
        comment,
      });
      console.log("Comment posted:", res.data);
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
      setError("Failed to post comment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 p-4 sm:p-2">
          <img
            src={user.photoURL}
            alt={user?.displayName}
            className="rounded-full h-10"
          />
          <input
            value={comment}
            onChange={handleCommentChange}
            placeholder={`Comment as ${user.displayName}`}
            required
            rows="4"
            className="border py-2 px-4 w-full bg-background-light dark:bg-background-dark rounded-full sm:py-1 sm:px-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-light hover:bg-primary-dark text-text-light dark:text-text-dark flex items-center rounded-full btn border-none sm:text-sm"
          >
            {loading ? (
              <FaSpinner className="spinner" />
            ) : (
              <FaPaperPlane className="text-white" />
            )}
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default PutComment;
