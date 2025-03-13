import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentSkeleton from "./CommentSkeleton";
import userImg from "../assets/user.png";

const CommentShow = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/comment?blogId=${blogId}`
        );
        console.log(res.data);

        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchComments();
    }
  }, [blogId]);

  if (loading) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {/* Show multiple skeletons while loading */}
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <CommentSkeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {comments.length === 0 ? (
        <div>No comments yet.</div>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment, idx) => (
            <li
              key={idx}
              className="bg-background-light dark:bg-background-dark mx-5 p-4 rounded-md flex items-center hover:bg-background-secondary-light hover:dark:bg-background-secondary-dark sm:mx-2 sm:p-2"
            >
              {comment.userImg ? (
                <img
                  src={comment.userImg}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-4 sm:w-8 sm:h-8"
                />
              ) : (
                <img
                  src={userImg}
                  alt="Default User Avatar"
                  className="w-10 h-10 rounded-full mr-4 sm:w-8 sm:h-8"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold">{comment.userName}</h3>
                <p>{comment.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentShow;
