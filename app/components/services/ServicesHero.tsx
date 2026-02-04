"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
    return (
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-foreground/60 uppercase tracking-[0.3em] text-[10px] md:text-sm font-semibold"
            >
                Our Expertise
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif"
            >
                Photography <span className="italic">Experiences</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg font-light max-w-xl mx-auto"
            >
                From intimate editorial sessions to grand wedding celebrations, we provide tailored visual narratives designed for the discerning eye.
            </motion.p>
        </div>
    );
}
