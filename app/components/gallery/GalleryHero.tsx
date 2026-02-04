"use client";

import { motion } from "framer-motion";

export default function GalleryHero() {
    return (
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-foreground/60 uppercase tracking-[0.3em] text-[10px] md:text-sm font-semibold"
            >
                Portfolio
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif"
            >
                Captured <span className="italic">Memories</span>
            </motion.h1>
        </div>
    );
}
