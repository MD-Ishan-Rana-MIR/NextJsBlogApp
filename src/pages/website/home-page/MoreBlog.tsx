import Image from "next/image";
import React from "react";
import { Blog } from "@/utility/type/blog";
import Link from "next/link";

const MoreBlog: React.FC = () => {
    const trendingBlogs: Blog[] = [
        {
            id: 1,
            category: "Design",
            title: "Minimalism: The Future of UI/UX",
            name: "David Kim",
            date: "2025-08-12",
            time: "10:30",
            image: "/images/blogs/recents/recent-1.jpg",
        },
        {
            id: 2,
            category: "Culture",
            title: "How Social Media Shapes Modern Culture",
            name: "Sophia Martinez",
            date: "2025-08-09",
            time: "14:15",
            image: "/images/blogs/recents/recent-1.jpg",
        },
        {
            id: 3,
            category: "Business",
            title: "5 Startup Trends to Watch in 2025",
            name: "Alex Carter",
            date: "2025-08-07",
            time: "09:00",
            image: "/images/blogs/recents/recent-1.jpg",
        },
    ];

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 my-10 px-4 md:px-6">
            {/* Main Blog Grid */}
            <div className="lg:w-4/5 w-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {trendingBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex flex-col sm:flex-row lg:flex-col bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative w-full sm:w-32 lg:w-full h-44 sm:h-32 lg:h-44 flex-shrink-0">
                            <Link href={`/blog-details/${blog.id}`}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover cursor-pointer"
                                />
                            </Link>
                        </div>

                        {/* Text content */}
                        <div className="flex flex-col justify-between p-3 flex-1">
                            <div>
                                <p className="text-xs uppercase text-blue-600 font-semibold">
                                    {blog.category}
                                </p>
                                <h3 className="text-lg font-bold leading-snug">{blog.title}</h3>
                                <p className="text-sm text-gray-500">
                                    By {blog.name} • {blog.date} at {blog.time}
                                </p>
                            </div>

                            <button className="text-blue-500 hover:underline text-sm mt-2 self-start">
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar / Ads */}
            <div className="lg:w-1/5 w-full mt-6 lg:mt-0 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-4">Ads / Sidebar</h2>
                <p className="text-gray-600 dark:text-gray-300">Place your content here.</p>
            </div>
        </div>
    );
};

export default MoreBlog;
