"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Search, Twitter, Facebook, Instagram, X } from "lucide-react";
import MaxWidth from "./MaxWidth";

export default function StickyNavbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <MaxWidth>
            <header className="w-full  bg-white dark:bg-gray-900">
                <div className="flex items-center justify-between  py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">MyLogo</span>
                    </Link>

                    {/* Right Side */}
                    <div className="flex items-center space-x-3">
                        {/* Search Icon / Bar */}
                        <div className="relative flex items-center">
                            {showSearch ? (
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <Input
                                            autoFocus
                                            type="text"
                                            placeholder="Search..."
                                            className="pl-8 w-48 md:w-64 transition-all duration-300"
                                        />
                                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                                    </div>
                                    <button
                                        onClick={() => setShowSearch(false)}
                                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowSearch(true)}
                                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <Search size={18} />
                                </button>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Social Icons */}
                        <Link href="https://twitter.com" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                            <Twitter size={18} />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                            <Facebook size={18} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                            <Instagram size={18} />
                        </Link>

                        {/* Buttons */}
                        <Button variant="outline" asChild>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </div>
                </div>
            </header>
        </MaxWidth>
    );
}
