"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import MaxWidth from "./MaxWidth";

type NavLink = {
    label: string;
    href: string;
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks: NavLink[] = [
        { label: "LifeStyle", href: "/lifestyle" },
        { label: "Education", href: "/education" },
        { label: "Health", href: "/health" },
        { label: "Design", href: "/design" },
        { label: "Technology", href: "/technology" },
        { label: "Culture", href: "/culture" },
        { label: "Contact", href: "/contact" },
    ];

    const categoryLinks: NavLink[] = [
        { label: "Business", href: "/category/business" },
        { label: "Sports", href: "/category/sports" },
        { label: "Travel", href: "/category/travel" },
        { label: "Food", href: "/category/food" },
    ];

    const moreLinks: NavLink[] = [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "About Us", href: "/about-us" },
    ];

    const closeSidebar = () => setIsOpen(false);

    return (
        <MaxWidth>
            <header className="w-full bg-white dark:bg-gray-900 border-b">
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-gray-900 dark:text-white"
                    >
                        MyLogo
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="hover:text-blue-500">
                            Home
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-500">
                                Category <ChevronDown size={16} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {categoryLinks.map((link) => (
                                    <DropdownMenuItem key={link.label} asChild>
                                        <Link href={link.href}>{link.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="hover:text-blue-500"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-500">
                                More <ChevronDown size={16} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {moreLinks.map((link) => (
                                    <DropdownMenuItem key={link.label} asChild>
                                        <Link href={link.href}>{link.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu size={20} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64 sm:w-80">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col space-y-4 mt-4">
                                    <Link href="/" onClick={closeSidebar}>
                                        Home
                                    </Link>

                                    {/* Category Dropdown */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger
                                            asChild
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Button
                                                variant="ghost"
                                                className="flex items-center justify-between w-full"
                                            >
                                                Category <ChevronDown size={16} />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {categoryLinks.map((link) => (
                                                <DropdownMenuItem key={link.label} asChild>
                                                    <Link href={link.href} onClick={closeSidebar}>
                                                        {link.label}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    {navLinks.map((link) => (
                                        <Link key={link.label} href={link.href} onClick={closeSidebar}>
                                            {link.label}
                                        </Link>
                                    ))}

                                    {/* More Dropdown */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger
                                            asChild
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Button
                                                variant="ghost"
                                                className="flex items-center justify-between w-full"
                                            >
                                                More <ChevronDown size={16} />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {moreLinks.map((link) => (
                                                <DropdownMenuItem key={link.label} asChild>
                                                    <Link href={link.href} onClick={closeSidebar}>
                                                        {link.label}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </MaxWidth>
    );
}
