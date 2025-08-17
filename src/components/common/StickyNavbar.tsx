"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Search, Twitter, Facebook, Instagram, X, Menu } from "lucide-react";
import MaxWidth from "./MaxWidth";

export default function StickyNavbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        if (userToken) {
            setToken(userToken);
        }
    }, []); // runs only once on the client


    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <MaxWidth>
            <header className="w-full bg-white dark:bg-gray-900 border-b">
                <div className="flex items-center justify-between py-3 px-4 md:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">MyLogo</span>
                    </Link>

                    {/* Desktop / Tablet Menu */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Search */}
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
                            {
                                token ? (
                                    <Link href="/profile">Profile</Link>
                                ) : (
                                    <Link href="/login">Sign In</Link>
                                )
                            }
                        </Button>
                        <Button asChild>
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Search Button */}
                        <button
                            onClick={() => setShowSearch(!showSearch)}
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {showSearch ? <X size={18} /> : <Search size={18} />}
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <Menu size={18} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-white dark:bg-gray-900 border-t">
                        <div className="flex flex-col px-4 py-3 space-y-2">
                            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                            <Link href="/sign-in" onClick={() => setMobileOpen(false)}>Sign In</Link>
                            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                            <div className="flex space-x-3 mt-2">
                                <Link href="https://twitter.com" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                                    <Twitter size={18} />
                                </Link>
                                <Link href="https://facebook.com" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                                    <Facebook size={18} />
                                </Link>
                                <Link href="https://instagram.com" target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                                    <Instagram size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Search */}
                {showSearch && mobileOpen && (
                    <div className="md:hidden px-4 pb-3">
                        <Input
                            autoFocus
                            type="text"
                            placeholder="Search..."
                            className="w-full"
                        />
                    </div>
                )}
            </header>
        </MaxWidth>
    );
}
