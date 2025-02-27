import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link
        to={"/"}
        className="flex-shrink-0 text-xl font-bold flex items-center gap-2 text-text-light dark:text-text-dark"
      >
        <img src="/favicon.png" className="h-8 w-8" alt="Logo" />
        <span className="text-xl font-semibold">TechTrails</span>
      </Link>
    </>
  );
};

export default Logo;
