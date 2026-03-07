"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/graphic-design", label: "Graphic Design" },
        { href: "/photo-manipulation", label: "Photo Manipulation" },
        { href: "/ui-ux", label: "UI/UX" },
        { href: "/thumbnails", label: "Thumbnails" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-foreground/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
                    Portfolio.
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-foreground/70 ${pathname === link.href ? "text-foreground" : "text-foreground/50"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                {/* Mobile menu can go here if needed later, but keeping minimal for now */}
                <div className="md:hidden">
                    <button className="p-2">Menu</button>
                </div>
            </div>
        </header>
    );
}
