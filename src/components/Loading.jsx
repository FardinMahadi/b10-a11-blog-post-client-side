import React from "react";
import { SquareLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <SquareLoader color="#2563EB" size={50} />
    </div>
  );
};

export default Loading;
