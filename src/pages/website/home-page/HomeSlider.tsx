"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// 🔹 Slide type
type Slide = {
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Explore the World of Design",
    description: "Discover latest trends and inspirations in UI/UX design.",
    image: "/images/blogs/recents/recent-1.jpg",
  },
  {
    title: "Innovative Technology",
    description: "Learn about cutting-edge technologies shaping the future.",
    image: "/images/blogs/recents/recent-1.jpg",
  },
  {
    title: "Creative Culture",
    description: "Understand how culture and creativity influence our lives.",
    image: "/images/blogs/recents/recent-1.jpg",
  },
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full overflow-hidden relative">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center transition-transform duration-700 ease-in-out
            ${index === currentIndex ? "translate-x-0" : "hidden"}`}
        >
          {/* Left Text */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{slide.description}</p>
            <Button className="w-max">Learn More</Button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative w-full h-52 lg:h-96">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className=" py-5 gap-x-2.5 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 cursor-pointer rounded-full transition-colors
              ${index === currentIndex ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
