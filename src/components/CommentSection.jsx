import { useContext } from "react";
import CommentShow from "./CommentShow";
import PutComment from "./PutComment";
import { ThemeContext } from "../provider/ThemeProvider";

const CommentSection = ({ blogId }) => {
  return (
    <div className="bg-background-secondary-light dark:bg-background-secondary-dark text-text-secondary-light dark:text-text-secondary-dark p-4 rounded-xl sm:p-2">
      <CommentShow blogId={blogId} />
      <PutComment blogId={blogId} />
    </div>
  );
};

export default CommentSection;
