import React from "react";
import FristBlog from "./FristBlog";
import ThreeBlog from "./ThreeBlog";
import Link from "next/link";
import HomeSlider from "./HomeSlider";
import MoreBlog from "./MoreBlog";

const HomePage: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-6 space-y-8">
      {/* Main Blog Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: First Blog + Three Blog */}
        <div className="flex flex-col lg:flex-row lg:w-2/3 gap-6">
          {/* First Blog */}
          <div className="lg:w-1/2 w-full overflow-hidden">
            <FristBlog />
          </div>

          {/* Three Blog */}
          <div className="lg:w-1/2 w-full bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <ThreeBlog />
          </div>
        </div>

        {/* Right Side: Trending */}
        <div className="lg:w-1/3 w-full flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <ThreeBlog />
          </div>
          <Link
            href="/all-trending-blog"
            className="text-blue-500 hover:underline transition-all self-start"
          >
            See all trending blog
          </Link>
        </div>
      </div>

      {/* Home Slider Section */}
      <div className="w-full">
        <HomeSlider />
      </div>

      {/* More Blogs Section */}
      <MoreBlog />
    </div>
  );
};

export default HomePage;
