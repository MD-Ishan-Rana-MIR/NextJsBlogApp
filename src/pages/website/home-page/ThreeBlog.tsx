import Image from "next/image";
import React from "react";
import { Blog } from "@/utility/type/blog";
import Link from "next/link";

const ThreeBlog: React.FC = () => {
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
        <div className="space-y-4">
            {trendingBlogs.map((blog, index) => (
                <div
                    key={index}
                    className="flex flex-row   bg-white dark:bg-gray-800 overflow-hidden"
                >
                    {/* Image */}
                    <div className="relative w-32 h-32 flex-shrink-0">
                        <Link href={`/blog-details/${blog?.id}`} >
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover cursor-pointer "
                            />
                        </Link>
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col justify-between p-3 flex-1">
                        <div>
                            <p className="text-xs uppercase text-blue-600 ">
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
    );
};

export default ThreeBlog;
