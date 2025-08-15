import React from "react";
import FristBlog from "./FristBlog";
import ThreeBlog from "./ThreeBlog";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="w-full ">
      {/* Main Blog Section */}
      <div className="flex flex-col lg:flex-row items-start gap-3">

        {/* Left Side: First Blog + Three Blog */}
        <div className="flex flex-col lg:flex-row lg:w-2/3 gap-6">

          {/* First Blog */}
          <div className="lg:w-[50%] w-full   overflow-hidden">
            <FristBlog />
          </div>

          {/* Three Blog */}
          <div className="lg:w-[50%] w-full bg-white dark:bg-gray-800  ">
            <ThreeBlog />
          </div>
        </div>

        {/* Right Side: Trending */}
        <div className="lg:w-1/3 w-full bg-white dark:bg-gray-800  ">
          <ThreeBlog></ThreeBlog>
          <Link className=" hover:underline transition-all  " href={`/all-trending-blog`}>See all trending blog</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
