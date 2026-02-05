"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Booking", href: "/booking" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isOpen
                    ? "bg-black py-4 border-white/10"
                    : scrolled
                        ? "bg-background/95 backdrop-blur-md py-4 border-white/10"
                        : "bg-black/70 py-6 border-transparent"
            )}
        >
            <div className="max-width-container flex items-center justify-between relative z-50">
                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-xl font-serif tracking-widest uppercase"
                >
                    <img src="/images/no bg.png" alt="BT Recording" width={40} height={40} />
                    <span>Recording</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-2 focus:outline-none transition-transform duration-300 "
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <X className="w-8 h-8 cursor-pointer" />
                    ) : (
                        <Menu className="w-8 h-8 cursor-pointer" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full p-8 pt-32">
                    <nav className="flex flex-col gap-8 ">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-serif tracking-widest uppercase hover:text-foreground transition-colors border-b border-white/5 pb-6 "
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
