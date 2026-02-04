"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/hero.png"
                    alt="BT Recording Hero"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-width-container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <span className="text-foreground/80 uppercase tracking-[0.3em] text-[10px] md:text-sm font-medium">
                            Editorial & Lifestyle Photography
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-serif tracking-tight leading-tight">
                        Capturing the <br />
                        <span className="text-white italic">Art of Life</span>
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Based in Ghana, capturing moments that whisper stories
                        long after they've passed. Minimal. Timeless. Yours.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Link
                            href="/booking"
                            className="px-10 py-4 bg-foreground text-background font-medium uppercase tracking-widest text-sm hover:bg-white/90 transition-all rounded-sm"
                        >
                            Book a Session
                        </Link>
                        <Link
                            href="/gallery"
                            className="px-10 py-4 border border-white/20 text-white font-medium uppercase tracking-widest text-sm hover:bg-white/10 transition-all rounded-sm"
                        >
                            View Gallery
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}
