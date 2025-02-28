import React from "react";
import Banner from "../components/Banner";
import RecentBlogs from "../components/RecentBlogs";
import Newslatter from "../components/Newslatter";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecentBlogs />
      <Newslatter />
    </div>
  );
};

export default Home;
