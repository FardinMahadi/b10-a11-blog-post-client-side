import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ baseColor, highlightColor }) => {
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className="rounded-lg shadow-md overflow-hidden p-4">
        <Skeleton height={200} width="100%" className="mb-4" />
        <Skeleton height={24} width="80%" className="mb-2" />
        <Skeleton count={3} width="100%" className="mb-1" />
      </div>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
