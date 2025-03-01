import React, { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../provider/ThemeProvider";

const CardSkeleton = () => {
  const { theme } = useContext(ThemeContext);

  const baseColor = theme === "dark" ? "#2c2c2c" : "#f0f0f0";
  const highlightColor = theme === "dark" ? "#3d3d3d" : "#e3e3e3";

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
