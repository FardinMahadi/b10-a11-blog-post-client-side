import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CommentSkeleton = () => {
  return (
    <div className="flex items-start space-x-4 p-4 border rounded-md">
      <Skeleton circle={true} height={40} width={40} />
      <div className="flex-1">
        <Skeleton height={20} width={`80%`} />
        <Skeleton height={15} width={`60%`} style={{ marginTop: "5px" }} />
      </div>
    </div>
  );
};

export default CommentSkeleton;
