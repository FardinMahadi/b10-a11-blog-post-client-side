import { useContext } from "react";
import CommentShow from "./CommentShow";
import PutComment from "./PutComment";
import { AuthContext } from "../provider/AuthProvider";

const CommentSection = ({ blogId, blogWriter }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-background-secondary-light dark:bg-background-secondary-dark text-text-secondary-light dark:text-text-secondary-dark p-4 rounded-xl sm:p-2">
      <CommentShow blogId={blogId} />
      {user.email === blogWriter ? (
        <div className="text-red-500">Cannot comment on your own blog.</div>
      ) : (
        <PutComment blogId={blogId} />
      )}
    </div>
  );
};

export default CommentSection;
